import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  ImageBackground,
  Text,
  TouchableHighlight,
} from 'react-native';

import {useTranslation} from 'react-i18next';
import useSign from '../hooks/useSign';
import theme from '../theme';
import BACKGROUND_IMG from '../../assets/img/background-login.png';
import LOGO_SIGNIN from '../../assets/img/logo-signin.png';
import GOOGLE from '../../assets/img/google.png';

const SignInScreen = () => {
  const {t} = useTranslation(`sign`);
  const {handleGoogleSignIn} = useSign();

  return (
    <KeyboardAvoidingView style={styles.flex} keyboardShouldPersistTaps="handled">
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        <ImageBackground style={styles.imgBackground} resizeMode="cover" source={BACKGROUND_IMG}>
          <View style={styles.logoBox}>
            <Image
              style={styles.logo}
              source={LOGO_SIGNIN}
              width={styles.logo.width}
              height={styles.logo.height}
              resizeMode="contain"
            />
          </View>
          <View style={styles.box}>
            <View style={styles.body}>
              <TouchableHighlight
                style={styles.googleBTN}
                onPress={handleGoogleSignIn}
                underlayColor={theme.color.defaultLight}>
                <View
                  style={{justifyContent: `center`, alignItems: `center`, flexDirection: `row`}}>
                  <Image source={GOOGLE} width={60} height={60} />
                  <Text style={styles.text}>{t(`sign_in_with_google`)}</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
      <View style={styles.borderEffect} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: theme.color.white,
  },
  container: {
    flexGrow: 1,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`,
  },
  logoBox: {
    flex: 0.07,
    justifyContent: `flex-end`,
    alignItems: `center`,
  },
  logo: {
    width: 180,
    height: 92.2,
  },
  body: {
    flex: 1,
    alignItems: `center`,
    justifyContent: `center`,
  },
  imgBackground: {
    width: `100%`,
    height: `80%`,
    flex: 1,
    flexDirection: `column`,
    justifyContent: `space-between`,
  },
  box: {
    backgroundColor: theme.color.blue1,
    flex: 0.19,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 10,
    alignItems: `center`,
    justifyContent: `flex-start`,
  },
  googleBTN: {
    backgroundColor: `white`,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  text: {
    marginLeft: 5,
    fontSize: 16,
  },
});

export default SignInScreen;
