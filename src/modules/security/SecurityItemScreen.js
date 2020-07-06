import React from 'react';
import {Text, StyleSheet, View, ScrollView, KeyboardAvoidingView, Image} from 'react-native';
import {useTranslation} from 'react-i18next';
import theme from '../theme';
import SAMPLE_IMG from '../../assets/img/sample.png';

const SecurityScreenItem = ({route: {params}}) => {
  const {t} = useTranslation(`security`);
  return (
    <KeyboardAvoidingView style={styles.flex} keyboardShouldPersistTaps="handled">
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        <View>
          <Text style={styles.title}>{t(params.title)}</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.box}>
            <Image source={SAMPLE_IMG} />
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </Text>
          </View>
          <View style={styles.box}>
            <Image source={SAMPLE_IMG} />
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </Text>
          </View>
          <View style={styles.box}>
            <Image source={SAMPLE_IMG} />
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </Text>
          </View>
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
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  body: {
    flex: 1,
    width: `100%`,
    height: `100%`,
    flexDirection: `column`,
    alignItems: `flex-start`,
    justifyContent: `space-around`,
    paddingHorizontal: 50,
  },
  box: {
    borderRadius: 5,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `center`,
  },
  text: {
    fontSize: 16,
    color: theme.color.dark,
    textAlign: `left`,
    marginLeft: 5,
  },
  title: {
    fontSize: 20,
  },
});

export default SecurityScreenItem;
