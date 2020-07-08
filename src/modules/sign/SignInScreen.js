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
  Platform,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import useSign from '../hooks/useSign';
import theme from '../theme';
import BACKGROUND_IMG from '../../assets/img/background-login.png';
import LOGO_SIGNIN from '../../assets/img/logo-signin.png';
import GOOGLE_IMG from '../../assets/img/google.png';
import APPLE_IMG from '../../assets/img/apple.png';
import {IS_ANDROID} from '../../constants';

const SignInScreen = () => {
  const {t} = useTranslation(`sign`);
  const {handleGoogleSignIn, handleAppleSignIn} = useSign();

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
                style={styles.button}
                onPress={handleGoogleSignIn}
                underlayColor={theme.color.defaultLight}>
                <View style={styles.textBox}>
                  <Image source={GOOGLE_IMG} width={32} height={32} />
                  <Text style={styles.text}>{t(`sign_in_with_google`)}</Text>
                </View>
              </TouchableHighlight>

              {!IS_ANDROID && (
                <TouchableHighlight
                  style={[styles.button, {marginTop: 15}]}
                  onPress={handleAppleSignIn}
                  underlayColor={theme.color.defaultLight}>
                  <View style={styles.textBox}>
                    <Image source={APPLE_IMG} width={32} height={32} />
                    <Text style={styles.text}>{t(`sign_in_with_google`)}</Text>
                  </View>
                </TouchableHighlight>
              )}
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
    flex: Platform.select({ios: 0.15, android: 0.2}),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: `center`,
    justifyContent: `flex-start`,
  },
  button: {
    backgroundColor: `white`,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
  },
  textBox: {
    justifyContent: `center`,
    alignItems: `center`,
    flexDirection: `row`,
  },

  text: {
    marginLeft: 5,
    fontSize: 16,
  },
});

export default SignInScreen;
