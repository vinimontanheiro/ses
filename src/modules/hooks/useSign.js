import appleAuth, {
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
} from '@invertase/react-native-apple-authentication';
import {GoogleSignin} from '@react-native-community/google-signin';
import {useCallback, useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {showLog} from '../../services/utils';
import {AuthContext} from '../../services/context';
import {IS_ANDROID} from '../../constants';
import useUser from './useUser';
import useMessage from './useMessage';

const useSign = () => {
  const {authSignIn} = useContext(AuthContext);
  const {t} = useTranslation(`error`);
  const {updateUser} = useUser();
  const {showMessage} = useMessage();

  const setToken = useCallback(
    (token) => {
      authSignIn(token);
    },
    [authSignIn],
  );

  const handleGoogleSignIn = useCallback(async () => {
    try {
      if (IS_ANDROID) {
        await GoogleSignin.hasPlayServices();
      }
      const {user} = await GoogleSignin.signIn();
      const {accessToken} = await GoogleSignin.getTokens();
      if (accessToken) {
        updateUser(user);
        setToken(accessToken);
      }
    } catch (error) {
      showLog(error);
    }
  }, [setToken, updateUser]);

  const handleAppleSignIn = useCallback(async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: AppleAuthRequestOperation.LOGIN,
        requestedScopes: [AppleAuthRequestScope.EMAIL, AppleAuthRequestScope.FULL_NAME],
      });
      if (appleAuthRequestResponse && appleAuthRequestResponse.identityToken) {
        const {email, user, fullName} = appleAuthRequestResponse;
        if (email) {
          updateUser({...user, ...fullName});
          setToken(appleAuthRequestResponse.identityToken);
        } else {
          showMessage(t(`apple_denied`));
        }
      }
    } catch (error) {
      showMessage(t(`apple_denied`));
    }
  }, [t, showMessage, updateUser, setToken]);

  return {
    handleGoogleSignIn,
    handleAppleSignIn,
  };
};

export default useSign;
