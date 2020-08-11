import React, {useState} from 'react';
import {Text, StyleSheet, View, ScrollView, KeyboardAvoidingView, Image} from 'react-native';
import {useTranslation} from 'react-i18next';
import theme from '../theme';
import {SECURITY} from '../../constants';

const SecurityScreenItem = ({route: {params}}) => {
  const {t} = useTranslation(`security`);
  const [data] = useState(SECURITY[params.title]);
  return (
    <KeyboardAvoidingView style={styles.flex} keyboardShouldPersistTaps="handled">
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{t(params.title)}</Text>
        </View>
        <View style={styles.body}>
          {data.map(({text, image}) => (
            <View key={text} style={styles.box}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={image}
                width={styles.image.width}
                height={styles.image.height}
              />
              <View style={{width: `100%`}}>
                <Text style={styles.text}>{text}</Text>
              </View>
            </View>
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
    justifyContent: `flex-start`,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  header: {},
  body: {
    width: `100%`,
    flexDirection: `column`,
    alignItems: `flex-start`,
    justifyContent: `center`,
    paddingHorizontal: 50,
  },
  box: {
    flex: 1,
    borderRadius: 5,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `center`,
    paddingVertical: 20,
  },
  image: {
    width: 120,
    height: 90,
    alignSelf: `flex-start`,
  },
  text: {
    fontSize: 16,
    color: theme.color.dark,
    textAlign: `left`,
  },
  title: {
    fontSize: 20,
  },
});

export default SecurityScreenItem;
