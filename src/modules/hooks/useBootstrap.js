import {useEffect} from 'react';
import {GoogleSignin} from '@react-native-community/google-signin';
import {IS_ANDROID, WEB_CLIENT_ID} from '../../constants';
// import SplashScreen from 'react-native-splash-screen';

const useBootstrap = () => {
  useEffect(() => {
    if (IS_ANDROID) {
      GoogleSignin.configure({
        webClientId: WEB_CLIENT_ID,
      });
    } else {
      GoogleSignin.configure({
        iosClientId: WEB_CLIENT_ID,
      });
    }
  }, []);
};

export default useBootstrap;
