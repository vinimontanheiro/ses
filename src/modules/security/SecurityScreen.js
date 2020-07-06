import React, {useCallback} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import theme from '../theme';
import {SCREEN} from '../../constants';

const SecurityScreen = () => {
  const {t} = useTranslation(`security`);
  const navigation = useNavigation();

  const handleNavigation = useCallback(
    (title) => {
      navigation.navigate(SCREEN.SECURITY_ITEM_SCREEN, {title});
    },
    [navigation],
  );

  return (
    <KeyboardAvoidingView style={styles.flex} keyboardShouldPersistTaps="handled">
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        <View style={styles.body}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => {
              handleNavigation(`braces`);
            }}>
            <Text style={styles.text}>{t(`braces`)}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
            onPress={() => {
              handleNavigation(`shackles`);
            }}>
            <Text style={styles.text}>{t(`shackles`)}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
            onPress={() => {
              handleNavigation(`cables`);
            }}>
            <Text style={styles.text}>{t(`cables`)}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
            onPress={() => {
              handleNavigation(`angles`);
            }}>
            <Text style={styles.text}>{t(`angles`)}</Text>
          </TouchableOpacity>
        </View>
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
    padding: 25,
  },
  body: {
    flex: 1,
    width: `100%`,
    height: `100%`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `space-evenly`,
  },
  box: {
    width: `95%`,
    height: 100,
    backgroundColor: theme.color.blue5,
    borderRadius: 5,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `center`,
  },
  text: {
    fontSize: 17,
    fontWeight: `bold`,
    color: theme.color.dark,
    textAlign: `center`,
  },
});

export default SecurityScreen;
