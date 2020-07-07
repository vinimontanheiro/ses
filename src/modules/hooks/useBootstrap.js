import {useEffect} from 'react';
import {GoogleSignin} from '@react-native-community/google-signin';
import SplashScreen from 'react-native-splash-screen';
import {IS_ANDROID, WEB_CLIENT_ID} from '../../constants';

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

  useEffect(() => {
    SplashScreen.hide();
  }, []);
};

export default useBootstrap;
