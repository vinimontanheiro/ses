import React, {useCallback} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import theme from '../theme';
import GUIN_IMG from '../../assets/img/guin.png';
import DEVICE_IMG from '../../assets/img/device.png';
import CALCULATOR_IMG from '../../assets/img/calculator.png';
import SECURITY_IMG from '../../assets/img/security.png';
import ARROW_IMG from '../../assets/img/arrow.png';
import useUser from '../hooks/useUser';
import {SCREEN} from '../../constants';

const HomeScreen = () => {
  const {t} = useTranslation(`home`);
  const navigation = useNavigation();
  const {
    user: {givenName},
  } = useUser();

  const handleNavigation = useCallback(
    (screen) => {
      navigation.navigate(screen);
    },
    [navigation],
  );

  return (
    <KeyboardAvoidingView style={styles.flex} keyboardShouldPersistTaps="handled">
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            {t(`hello`)}, <Text style={styles.bold}> {givenName}</Text>
          </Text>
          <Text style={styles.subTitle}>{t(`choose_some_action_below`)}</Text>
        </View>
        <View style={styles.body}>
          <TouchableOpacity
            onPress={() => {
              handleNavigation(SCREEN.CRANE_SCREEN);
            }}>
            <View style={styles.box}>
              <View style={styles.boxContent}>
                <Image style={styles.image} source={GUIN_IMG} />
                <View style={styles.boxText}>
                  <Text style={styles.text}>{t(`crane`)}</Text>
                </View>
              </View>
              <Image style={styles.arrow} source={ARROW_IMG} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleNavigation(SCREEN.DEVICE_SCREEN);
            }}>
            <View style={[styles.box, {backgroundColor: theme.color.blue3}]}>
              <View style={styles.boxContent}>
                <Image style={styles.image} source={DEVICE_IMG} />
                <View style={styles.boxText}>
                  <Text style={styles.text}>{t(`device`)}</Text>
                </View>
              </View>
              <Image style={styles.arrow} source={ARROW_IMG} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleNavigation(SCREEN.CALCULATOR_SHAPE_SCREEN);
            }}>
            <View style={[styles.box, {backgroundColor: theme.color.blue4}]}>
              <View style={styles.boxContent}>
                <Image style={styles.image} source={CALCULATOR_IMG} />
                <View style={styles.boxText}>
                  <Text style={styles.text}>{t(`calculator`)}</Text>
                </View>
              </View>
              <Image style={styles.arrow} source={ARROW_IMG} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleNavigation(SCREEN.SECURITY_SCREEN);
            }}>
            <View style={[styles.box, {backgroundColor: theme.color.blue5}]}>
              <View style={styles.boxContent}>
                <Image style={styles.image} source={SECURITY_IMG} />
                <View style={styles.boxText}>
                  <Text style={styles.text}>{t(`security`)}</Text>
                </View>
              </View>
              <Image style={styles.arrow} source={ARROW_IMG} />
            </View>
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
    height: 94,
    backgroundColor: theme.color.blue2,
    borderRadius: 5,
    borderTopLeftRadius: 15,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `center`,
  },
  boxContent: {
    flex: 1,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `space-between`,
    paddingHorizontal: 15,
  },
  image: {
    position: `relative`,
    bottom: 6,
  },
  boxText: {
    paddingRight: 20,
  },
  text: {
    fontSize: 17,
    fontWeight: `bold`,
    color: theme.color.dark,
  },
  header: {
    width: `95%`,
    flexDirection: `column`,
  },
  headerText: {
    fontSize: 24,
  },
  arrow: {
    position: `relative`,
    left: 15,
  },
  subTitle: {
    color: `#706F6F`,
    fontSize: 14,
  },
  bold: {
    fontWeight: `bold`,
  },
});

export default HomeScreen;
