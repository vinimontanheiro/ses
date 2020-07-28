import React from 'react';
import {Item, Input} from 'native-base';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import useCrane from '../hooks/useCrane';
import theme from '../theme';

const CraneScreen = () => {
  const {t} = useTranslation(`device`);
  const {height, weight, radius, onHeightChange, onWeightChange, onRadiusChange} = useCrane();

  return (
    <KeyboardAvoidingView style={styles.flex} keyboardShouldPersistTaps="handled">
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.subTitle}>Qual a altura total?</Text>
        </View>
        <View style={styles.body}>
          <Item regular style={styles.radius3}>
            <Input
              value={height}
              style={styles.input}
              placeholder="0"
              keyboardType="numeric"
              onChangeText={onHeightChange}
            />
            <View style={{paddingHorizontal: 10}}>
              <Text>A</Text>
            </View>
          </Item>

          <View style={[styles.header, {marginTop: 20}]}>
            <Text style={styles.subTitle}>Qual o peso da carga?</Text>
          </View>
          <Item regular style={styles.radius3}>
            <Input
              value={weight}
              style={styles.input}
              placeholder="0"
              keyboardType="numeric"
              onChangeText={onWeightChange}
            />
            <View style={{paddingHorizontal: 10}}>
              <Text>KG</Text>
            </View>
          </Item>

          <View style={[styles.header, {marginTop: 20}]}>
            <Text style={styles.subTitle}>Qual o raio de ação??</Text>
          </View>
          <Item regular style={styles.radius3}>
            <Input
              value={radius}
              style={styles.input}
              placeholder="0"
              keyboardType="numeric"
              onChangeText={onRadiusChange}
            />
            <View style={{paddingHorizontal: 10}}>
              <Text>R</Text>
            </View>
          </Item>

          <TouchableHighlight style={styles.button} underlayColor={theme.color.underlayBlue}>
            <Text style={styles.buttonText}>{t(`action:calculate`)}</Text>
          </TouchableHighlight>

          <TouchableOpacity style={styles.clearButton}>
            <Text style={{color: theme.color.grayText}}>Limpar</Text>
          </TouchableOpacity>
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
    paddingVertical: 5,
  },
  header: {
    width: `95%`,
    flexDirection: `column`,
  },
  button: {
    marginTop: 20,
    backgroundColor: theme.color.blue2,
    width: `95%`,
    justifyContent: `center`,
    alignItems: `center`,
    borderRadius: 50,
    height: 50,
  },
  subTitle: {
    color: `#706F6F`,
    fontSize: 14,
  },
  input: {
    height: 40,
    textAlign: `center`,
  },
  buttonText: {
    color: theme.color.white,
    fontSize: 18,
  },
  clearButton: {
    padding: 5,
    width: `95%`,
    alignItems: `center`,
    color: theme.color.danger,
  },
  radius3: {
    borderRadius: 3,
  },
});

export default CraneScreen;
