// import appleAuth, {
//   AppleAuthRequestOperation,
//   AppleAuthRequestScope,
// } from '@invertase/react-native-apple-authentication';
import {GoogleSignin} from '@react-native-community/google-signin';
import {useCallback, useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {debug, showLog} from '../../services/utils';
import {AuthContext} from '../../services/context';
import useLoading from './useLoading';
import useMessage from './useMessage';
import {IS_ANDROID} from '../../constants';

const useSign = () => {
  const {authSignIn} = useContext(AuthContext);
  const {t} = useTranslation(`error`);
  const {showMessage} = useMessage({t});
  const [, setLoading] = useLoading();

  const setToken = useCallback(
    (token) => {
      authSignIn(token);
    },
    [authSignIn],
  );

  const handleGoogleSignIn = useCallback(async () => {
    try {
      console.log(`handling`);
      if (IS_ANDROID) {
        await GoogleSignin.hasPlayServices();
      }
      const {user} = await GoogleSignin.signIn();
      console.log(user);
      const {accessToken} = await GoogleSignin.getTokens();
      if (accessToken) {
        // setLoading(true);
        setToken(accessToken);
      }
    } catch (error) {
      // setLoading(false);
      showLog(error);
    }
  }, [setToken, setLoading]);

  // const handleAppleSignIn = useCallback(async () => {
  //   try {
  //     const appleAuthRequestResponse = await appleAuth.performRequest({
  //       requestedOperation: AppleAuthRequestOperation.LOGIN,
  //       requestedScopes: [AppleAuthRequestScope.EMAIL, AppleAuthRequestScope.FULL_NAME],
  //     });

  //     if (appleAuthRequestResponse && appleAuthRequestResponse.identityToken) {
  //       const {
  //         email,
  //         user,
  //         fullName: {givenName, familyName},
  //       } = appleAuthRequestResponse;
  //       const name = `${givenName} ${familyName}`;
  //       const dataToSend = {name, email};

  //       if (email) {
  //         if (isSignUp) {
  //           handleInitialValues(dataToSend);
  //         } else {
  //           setLoading(true);
  //           dataToSend.appleId = user;
  //           const {data} = await appleSignInMutation({variables: {...dataToSend}});
  //           if (data.appleSignIn) {
  //             const {
  //               appleSignIn: {
  //                 detail: {token},
  //               },
  //             } = data;
  //             updateUserAccountStore({signProvider: PROVIDER.APPLE});
  //             setJWTToken(token);
  //           }
  //         }
  //       } else {
  //         setLoading(false);
  //         showMessage(`apple_denied`);
  //       }
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     debug(error);
  //   }
  // }, [
  //   isSignUp,
  //   handleInitialValues,
  //   appleSignInMutation,
  //   setJWTToken,
  //   updateUserAccountStore,
  //   setLoading,
  //   showMessage,
  // ]);

  return {
    handleGoogleSignIn,
  };
};

export default useSign;
