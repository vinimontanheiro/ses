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
import {IS_ANDROID, FIRESTORE_UID} from '../../constants';
import useUser from './useUser';
import useMessage from './useMessage';
import useLoading from './useLoading';

const useSign = () => {
  const {authSignIn} = useContext(AuthContext);
  const {t} = useTranslation(`error`);
  const [, setLoading] = useLoading();
  const {updateUser} = useUser();
  const {showMessage} = useMessage();

  const setToken = useCallback(
    (token) => {
      authSignIn(token);
    },
    [authSignIn],
  );

  const checkAuthorizedUser = useCallback(
    async (user) => {
      try {
        setLoading(true);
        const auth = await firestore().collection(`custom_auth`).doc(FIRESTORE_UID).get();
        const {emails} = auth.data();
        if (emails && emails.includes(user.email)) {
          updateUser(user);
          setToken(user.token);
          setLoading(false);
        } else {
          setLoading(false);
          showMessage(t(`unauthorized_user`));
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
        }
      } catch (error) {
        setLoading(false);
        showMessage(t(`network_error`));
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
      }
    },
    [t, updateUser, setLoading, showMessage, setToken],
  );

  const handleGoogleSignIn = useCallback(async () => {
    try {
      if (IS_ANDROID) {
        await GoogleSignin.hasPlayServices();
      }
      const {user} = await GoogleSignin.signIn();
      const {accessToken} = await GoogleSignin.getTokens();
      if (accessToken && user.email) {
        await checkAuthorizedUser({...user, token: accessToken});
      } else {
        showMessage(t(`unauthorized_user`));
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
      }
    } catch (error) {
      showLog(error);
    }
  }, [checkAuthorizedUser, showMessage, t]);

  const handleAppleSignIn = useCallback(async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: AppleAuthRequestOperation.LOGIN,
        requestedScopes: [AppleAuthRequestScope.EMAIL, AppleAuthRequestScope.FULL_NAME],
      });
      if (appleAuthRequestResponse && appleAuthRequestResponse.identityToken) {
        const {email, user, fullName} = appleAuthRequestResponse;
        if (email) {
          await checkAuthorizedUser({
            ...user,
            ...fullName,
            email,
            token: appleAuthRequestResponse.identityToken,
          });
        } else {
          showMessage(t(`apple_denied`));
        }
      }
    } catch (error) {
      showLog(error);
    }
  }, [t, showMessage, checkAuthorizedUser]);

  return {
    handleGoogleSignIn,
    handleAppleSignIn,
  };
};

export default useSign;
