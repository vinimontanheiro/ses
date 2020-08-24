import appleAuth, {
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
} from '@invertase/react-native-apple-authentication';
import {GoogleSignin} from '@react-native-community/google-signin';
import firestore from '@react-native-firebase/firestore';
import {useCallback, useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {showLog} from '../../services/utils';
import {AuthContext} from '../../services/context';
import {IS_ANDROID, FIRESTORE_UID, PROVIDER} from '../../constants';
import useUser from './useUser';
import useMessage from './useMessage';
import useLoading from './useLoading';
import {setApp} from '../../services/redux/actions';

const AUTH_COLLECTION = `custom_auth`;
const SETTINGS_COLLECTION = `settings`;

const useSign = () => {
  const {authSignIn} = useContext(AuthContext);
  const {t} = useTranslation(`error`);
  const [, setLoading] = useLoading();
  const {updateUser, user} = useUser();
  const {showMessage} = useMessage();

  const setToken = useCallback(
    (token) => {
      authSignIn(token);
    },
    [authSignIn],
  );

  const handleAppleLogout = useCallback(async () => {
    try {
      await appleAuth.performRequest({
        requestedOperation: AppleAuthRequestOperation.LOGOUT,
      });
    } catch (e) {
      showLog(e);
    }
  }, []);

  const handleGoogleLogout = useCallback(async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (e) {
      showLog(e);
    }
  }, []);

  const handleLogout = useCallback(async () => {
    setToken(``);
    if (user.prodiver === PROVIDER.APPLE) {
      await handleAppleLogout();
    }
    if (user.prodiver === PROVIDER.GOOGLE) {
      await handleGoogleLogout();
    }
  }, [user, setToken, handleAppleLogout, handleGoogleLogout]);

  const checkAuthorizedUser = useCallback(
    async (userData) => {
      try {
        console.log(userData);
        setLoading(true);
        const settings = await firestore().collection(SETTINGS_COLLECTION).doc(FIRESTORE_UID).get();
        const {restrictAuthEnabled} = settings.data();
        const auth = await firestore().collection(AUTH_COLLECTION).doc(FIRESTORE_UID).get();
        const {emails} = auth.data();
        if (restrictAuthEnabled) {
          if (emails && emails.includes(userData.email)) {
            updateUser(userData);
            setToken(userData.token);
          } else {
            showMessage(t(`unauthorized_user`));
            await handleLogout();
          }
        } else {
          updateUser(userData);
          setToken(userData.token);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        showMessage(t(`network_error`));
        await handleLogout();
      }
    },
    [t, updateUser, handleLogout, setLoading, showMessage, setToken],
  );

  const handleGoogleSignIn = useCallback(async () => {
    try {
      if (IS_ANDROID) {
        await GoogleSignin.hasPlayServices();
      }
      const {user: userData} = await GoogleSignin.signIn();
      const {accessToken} = await GoogleSignin.getTokens();
      if (accessToken && userData.email) {
        await checkAuthorizedUser({...userData, token: accessToken, prodiver: PROVIDER.GOOGLE});
      } else {
        showMessage(t(`unauthorized_user`));
        await handleGoogleLogout();
      }
    } catch (error) {
      showLog(error);
    }
  }, [checkAuthorizedUser, handleGoogleLogout, showMessage, t]);

  const handleAppleSignIn = useCallback(async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: AppleAuthRequestOperation.LOGIN,
        requestedScopes: [AppleAuthRequestScope.EMAIL, AppleAuthRequestScope.FULL_NAME],
      });
      console.log(appleAuthRequestResponse);
      if (appleAuthRequestResponse && appleAuthRequestResponse.identityToken) {
        const {email, user: userData, fullName} = appleAuthRequestResponse;
        if (email) {
          await checkAuthorizedUser({
            ...userData,
            ...fullName,
            email,
            token: appleAuthRequestResponse.identityToken,
            prodiver: PROVIDER.APPLE,
          });
        } else {
          showMessage(t(`apple_denied`));
          await handleAppleLogout();
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [t, showMessage, checkAuthorizedUser, handleAppleLogout]);

  return {
    handleGoogleSignIn,
    handleAppleSignIn,
    handleLogout,
  };
};

export default useSign;
