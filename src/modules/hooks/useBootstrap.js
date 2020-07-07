import {useEffect} from 'react';
import {GoogleSignin} from '@react-native-community/google-signin';
import SplashScreen from 'react-native-splash-screen';
import {WEB_CLIENT_ID} from '../../constants';

const useBootstrap = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
    });
  }, []);

  useEffect(() => {
    SplashScreen.hide();
  }, []);
};

export default useBootstrap;
