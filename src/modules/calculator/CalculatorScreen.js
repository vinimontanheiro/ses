import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  TextInput,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Formik} from 'formik';
import {Picker} from '@react-native-community/picker';
import {TouchableHighlight} from 'react-native-gesture-handler';
import theme from '../theme';
import {UNITS_CALCULATOR} from '../../constants';

const CalculatorScreen = ({route: {params}}) => {
  const [shape] = useState(params.shape);
  const {t} = useTranslation(`calculator`);
  return (
    <KeyboardAvoidingView style={styles.flex} keyboardShouldPersistTaps="handled">
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{t(shape.label)}</Text>
          <Image source={shape.image} />
        </View>
        <View style={styles.body}>
          <Formik
            initialValues={{
              diameter: 0,
              diameterUnit: 0,
              thicknessUnit: 0,
              thickness: 0,
              length: 0,
              lengthUnit: 0,
              unit: 0,
              amount: 0,
            }}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={() => {}}>
            {({values, handleSubmit, handleChange, setFieldValue}) => (
              <>
                <View style={styles.box}>
                  <View style={styles.inputTitleBox}>
                    <Text style={styles.inputTitle}>{t(`diameter`)}</Text>
                  </View>
                  <View style={styles.inputBox}>
                    <TextInput
                      value={`${values.diameter}`}
                      onChangeText={handleChange(`diameter`)}
                      keyboardType="number-pad"
                      style={styles.border}
                    />
                  </View>
                  <View style={styles.unitBox}>
                    <Picker
                      selectedValue={values.diameterUnit}
                      style={styles.unit}
                      onValueChange={(itemValue) => setFieldValue(`diameterUnit`, itemValue)}>
                      {UNITS_CALCULATOR.map((u) => (
                        <Picker.Item label={u.label} value={u.value} />
                      ))}
                    </Picker>
                  </View>
                </View>

                <View style={styles.box}>
                  <View style={styles.inputTitleBox}>
                    <Text style={styles.inputTitle}>{t(`thickness`)}</Text>
                  </View>
                  <View style={styles.inputBox}>
                    <TextInput
                      value={`${values.thickness}`}
                      onChangeText={handleChange(`thickness`)}
                      keyboardType="number-pad"
                      style={styles.border}
                    />
                  </View>
                  <View style={styles.unitBox}>
                    <Picker
                      selectedValue={values.thicknessUnit}
                      style={styles.unit}
                      onValueChange={(itemValue) => setFieldValue(`thicknessUnit`, itemValue)}>
                      {UNITS_CALCULATOR.map((u) => (
                        <Picker.Item label={u.label} value={u.value} />
                      ))}
                    </Picker>
                  </View>
                </View>

                <View style={styles.box}>
                  <View style={styles.inputTitleBox}>
                    <Text style={styles.inputTitle}>{t(`length`)}</Text>
                  </View>
                  <View style={styles.inputBox}>
                    <TextInput
                      value={`${values.length}`}
                      onChangeText={handleChange(`length`)}
                      keyboardType="number-pad"
                      style={styles.border}
                    />
                  </View>
                  <View style={styles.unitBox}>
                    <Picker
                      selectedValue={values.lengthUnit}
                      style={styles.unit}
                      onValueChange={(itemValue) => setFieldValue(`lengthUnit`, itemValue)}>
                      {UNITS_CALCULATOR.map((u) => (
                        <Picker.Item label={u.label} value={u.value} />
                      ))}
                    </Picker>
                  </View>
                </View>

                <View style={styles.amount}>
                  <Text style={[styles.inputTitle, styles.amountTitle]}>
                    {t(`amount_of_pieces`)}
                  </Text>
                  <TextInput
                    value={`${values.amount}`}
                    onChangeText={handleChange(`amount`)}
                    keyboardType="number-pad"
                    style={[styles.border, styles.amountInput]}
                  />
                </View>

                <TouchableHighlight
                  containerStyle={styles.button}
                  style={{color: theme.color.white}}
                  underlayColor={theme.color.underlay}>
                  <Text style={styles.buttonText}>{t(`action:calculate`)}</Text>
                </TouchableHighlight>
              </>
            )}
          </Formik>
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
    paddingTop: 15,
  },
  body: {
    flex: 1,
    width: `100%`,
    height: `100%`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `flex-start`,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: `column`,
    justifyContent: `space-between`,
    alignItems: `center`,
    flex: 0.1,
    backgroundColor: theme.color.blue6,
    width: `95%`,
    borderRadius: 5,
    paddingVertical: 10,
  },
  box: {
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `space-between`,
    width: `100%`,
    marginTop: 8,
    backgroundColor: theme.color.white,
  },
  inputTitleBox: {
    width: `25%`,
    paddingHorizontal: 5,
    backgroundColor: theme.color.blue6,
    height: 40,
    borderRadius: 3,
    justifyContent: `center`,
    alignItems: `center`,
  },
  inputTitle: {
    fontSize: 14,
    fontWeight: `bold`,
    textAlign: `right`,
  },
  inputBox: {
    width: `40%`,
    height: 40,
  },
  border: {
    borderWidth: 1,
    borderColor: theme.color.blue4,
    borderRadius: 3,
  },
  unitBox: {
    width: 100,
    textAlign: `right`,
    position: `relative`,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: theme.color.blue4,
  },
  unit: {
    height: 40,
  },
  title: {
    fontSize: 20,
  },
  amount: {
    flexDirection: `row`,
    alignItems: `center`,
    width: `100%`,
    marginTop: 20,
  },
  amountInput: {
    width: `59%`,
    height: 40,
    marginLeft: 10,
  },
  amountTitle: {
    backgroundColor: theme.color.blue6,
    height: 40,
    textAlignVertical: `center`,
    paddingHorizontal: 8,
    borderRadius: 3,
  },
  button: {
    marginTop: 20,
    backgroundColor: theme.color.blue2,
    width: `90%`,
    justifyContent: `center`,
    alignItems: `center`,
    borderRadius: 50,
    height: 50,
  },
  buttonText: {
    color: theme.color.white,
    fontSize: 18,
  },
});

export default CalculatorScreen;
