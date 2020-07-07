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
import {SHAPES_CALCULATOR, SCREEN} from '../../constants';

const CalculatorShapeScreen = () => {
  const {t} = useTranslation(`calculator`);
  const navigation = useNavigation();

  const handleNavigation = useCallback(
    (shape) => {
      navigation.navigate(SCREEN.CALCULATOR_SCREEN, {shape});
    },
    [navigation],
  );

  return (
    <KeyboardAvoidingView style={styles.flex} keyboardShouldPersistTaps="handled">
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.subTitle}>{t(`choose_which_shape_you_want_to_calculate`)}</Text>
        </View>
        <View style={styles.body}>
          {SHAPES_CALCULATOR.map((sc) => (
            <TouchableOpacity
              key={sc.label}
              style={[styles.box, {backgroundColor: theme.color.blue6}]}
              onPress={() => {
                handleNavigation(sc);
              }}>
              <View style={styles.boxContent}>
                <View style={styles.boxText}>
                  <Text style={styles.text}>{t(sc.label)}</Text>
                </View>
                <Image style={styles.image} source={sc.image} />
              </View>
            </TouchableOpacity>
          ))}
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
    justifyContent: `flex-start`,
    paddingVertical: 15,
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
    marginTop: 10,
    paddingHorizontal: 20,
  },
  boxContent: {
    flex: 1,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `space-between`,
    paddingHorizontal: 15,
  },
  image: {},
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
  subTitle: {
    color: `#706F6F`,
    fontSize: 14,
  },
});

export default CalculatorShapeScreen;
