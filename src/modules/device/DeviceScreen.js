import React from 'react';
import {Content, Item, Input} from 'native-base';
import {Text, StyleSheet, View, ScrollView, KeyboardAvoidingView} from 'react-native';
import {useTranslation} from 'react-i18next';
import theme from '../theme';

const CalculatorShapeScreen = () => {
  const {t} = useTranslation(`device`);

  return (
    <KeyboardAvoidingView style={styles.flex} keyboardShouldPersistTaps="handled">
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.subTitle}>{t(`what_piece_weight_will_you_lift`)}</Text>
        </View>
        <View style={styles.body}>
          <Item regular>
            <Input style={styles.input} placeholder="0" />
            <View style={{paddingHorizontal: 10}}>
              <Text>KG</Text>
            </View>
          </Item>
        </View>
      </ScrollView>
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
  header: {
    width: `95%`,
    flexDirection: `column`,
  },
  subTitle: {
    color: `#706F6F`,
    fontSize: 14,
  },
  input: {
    height: 40,
    textAlign: `center`,
  },
});

export default CalculatorShapeScreen;
