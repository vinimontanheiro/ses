import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableHighlight,
  Platform,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Formik} from 'formik';
import {Picker, Icon} from 'native-base';
import theme from '../theme';
import {UNITS_CALCULATOR} from '../../constants';
import useCalculator from '../hooks/useCalculator';

const SCREEN = Dimensions.get(`screen`);

const CalculatorScreen = ({route: {params}}) => {
  const [shape] = useState(params.shape);
  const {t} = useTranslation(`calculator`);
  const {initialValues, result, clearAll, calculate} = useCalculator(shape);
  return (
    <KeyboardAvoidingView style={styles.flex} keyboardShouldPersistTaps="handled">
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{t(shape.label)}</Text>
          <Image source={shape.image} />
        </View>
        <View style={styles.result}>
          <Text style={styles.resultTitle}>
            {`${t(`weight`)}  `}
            <Text style={styles.resultText}>
              {result.value.toFixed(2)} {`kg`}
            </Text>
          </Text>
          <Text style={styles.resultTitle}>
            {`${t(`total_weight`)}  `}
            <Text style={styles.resultText}>
              {result.totalValue.toFixed(2)} {`kg`}
            </Text>
          </Text>
        </View>
        <View style={styles.body}>
          <Formik
            initialValues={initialValues}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={calculate}
            enableReinitialize>
            {({values, handleSubmit, handleChange, setFieldValue, resetForm}) => (
              <>
                {shape.hasDiameter && (
                  <View style={styles.box}>
                    <View style={styles.inputTitleBox}>
                      <Text style={styles.inputTitle}>{t(`diameter`)}</Text>
                    </View>
                    <View style={styles.inputBox}>
                      <TextInput
                        placeholder="0"
                        value={values.diameter}
                        onChangeText={handleChange(`diameter`)}
                        keyboardType="number-pad"
                        style={[styles.input, styles.border]}
                      />
                    </View>
                    <View style={styles.unitBox}>
                      <Picker
                        iosHeader="Selecione"
                        headerBackButtonText="Voltar"
                        iosIcon={
                          <Icon
                            style={{
                              zIndex: 99,
                              position: `relative`,
                              right: values.diameterUnit === 1 ? 25 : 15,
                            }}
                            name="caret-down-outline"
                          />
                        }
                        selectedValue={values.diameterUnit}
                        style={styles.unit}
                        onValueChange={(itemValue) => setFieldValue(`diameterUnit`, itemValue)}>
                        {UNITS_CALCULATOR.map((u) => (
                          <Picker.Item label={u.label} value={u.value} />
                        ))}
                      </Picker>
                    </View>
                  </View>
                )}

                {shape.hasThickness && (
                  <View style={styles.box}>
                    <View style={styles.inputTitleBox}>
                      <Text style={styles.inputTitle}>{t(`thickness`)}</Text>
                    </View>
                    <View style={styles.inputBox}>
                      <TextInput
                        placeholder="0"
                        value={values.thickness}
                        onChangeText={handleChange(`thickness`)}
                        keyboardType="number-pad"
                        style={[styles.input, styles.border]}
                      />
                    </View>
                    <View style={styles.unitBox}>
                      <Picker
                        iosIcon={
                          <Icon
                            style={{
                              zIndex: 99,
                              position: `relative`,
                              right: values.thicknessUnit === 1 ? 25 : 15,
                            }}
                            name="caret-down-outline"
                          />
                        }
                        selectedValue={values.thicknessUnit}
                        style={styles.unit}
                        onValueChange={(itemValue) => setFieldValue(`thicknessUnit`, itemValue)}>
                        {UNITS_CALCULATOR.map((u) => (
                          <Picker.Item label={u.label} value={u.value} />
                        ))}
                      </Picker>
                    </View>
                  </View>
                )}

                {shape.hasLength && (
                  <View style={styles.box}>
                    <View style={styles.inputTitleBox}>
                      <Text style={styles.inputTitle}>{t(`length`)}</Text>
                    </View>
                    <View style={styles.inputBox}>
                      <TextInput
                        placeholder="0"
                        value={values.length}
                        onChangeText={handleChange(`length`)}
                        keyboardType="number-pad"
                        style={[styles.input, styles.border]}
                      />
                    </View>
                    <View style={styles.unitBox}>
                      <Picker
                        iosIcon={
                          <Icon
                            style={{
                              zIndex: 99,
                              position: `relative`,
                              right: values.lengthUnit === 1 ? 25 : 15,
                            }}
                            name="caret-down-outline"
                          />
                        }
                        selectedValue={values.lengthUnit}
                        style={styles.unit}
                        onValueChange={(itemValue) => setFieldValue(`lengthUnit`, itemValue)}>
                        {UNITS_CALCULATOR.map((u) => (
                          <Picker.Item label={u.label} value={u.value} />
                        ))}
                      </Picker>
                    </View>
                  </View>
                )}
                {shape.hasHeight && (
                  <View style={styles.box}>
                    <View style={styles.inputTitleBox}>
                      <Text style={styles.inputTitle}>{t(`height`)}</Text>
                    </View>
                    <View style={styles.inputBox}>
                      <TextInput
                        placeholder="0"
                        value={values.height}
                        onChangeText={handleChange(`height`)}
                        keyboardType="number-pad"
                        style={[styles.input, styles.border]}
                      />
                    </View>
                    <View style={styles.unitBox}>
                      <Picker
                        iosHeader="Selecione"
                        headerBackButtonText="Voltar"
                        iosIcon={
                          <Icon
                            style={{
                              zIndex: 99,
                              position: `relative`,
                              right: values.heightUnit === 1 ? 25 : 15,
                            }}
                            name="caret-down-outline"
                          />
                        }
                        selectedValue={values.heightUnit}
                        style={styles.unit}
                        onValueChange={(itemValue) => setFieldValue(`heightUnit`, itemValue)}>
                        {UNITS_CALCULATOR.map((u) => (
                          <Picker.Item label={u.label} value={u.value} />
                        ))}
                      </Picker>
                    </View>
                  </View>
                )}

                {shape.hasWidth && (
                  <View style={styles.box}>
                    <View style={styles.inputTitleBox}>
                      <Text style={styles.inputTitle}>{t(`width`)}</Text>
                    </View>
                    <View style={styles.inputBox}>
                      <TextInput
                        placeholder="0"
                        value={values.width}
                        onChangeText={handleChange(`width`)}
                        keyboardType="number-pad"
                        style={[styles.input, styles.border]}
                      />
                    </View>
                    <View style={styles.unitBox}>
                      <Picker
                        iosHeader="Selecione"
                        headerBackButtonText="Voltar"
                        iosIcon={
                          <Icon
                            style={{
                              zIndex: 99,
                              position: `relative`,
                              right: values.widthUnit === 1 ? 25 : 15,
                            }}
                            name="caret-down-outline"
                          />
                        }
                        selectedValue={values.widthUnit}
                        style={styles.unit}
                        onValueChange={(itemValue) => setFieldValue(`widthUnit`, itemValue)}>
                        {UNITS_CALCULATOR.map((u) => (
                          <Picker.Item label={u.label} value={u.value} />
                        ))}
                      </Picker>
                    </View>
                  </View>
                )}

                <View style={styles.amount}>
                  <View style={styles.amountBox}>
                    <Text style={[styles.inputTitle, styles.amountTitle]}>
                      {t(`amount_of_pieces`)}
                    </Text>
                  </View>
                  <TextInput
                    placeholder="0"
                    value={`${values.amount}`}
                    onChangeText={handleChange(`amount`)}
                    keyboardType="number-pad"
                    style={[styles.input, styles.border, styles.amountInput]}
                  />
                </View>

                <TouchableHighlight
                  style={styles.button}
                  underlayColor={theme.color.underlayBlue}
                  onPress={handleSubmit}>
                  <Text style={styles.buttonText}>{t(`action:calculate`)}</Text>
                </TouchableHighlight>

                <TouchableOpacity
                  style={styles.clearButton}
                  onPress={() => {
                    clearAll();
                    resetForm();
                  }}>
                  <Text style={{color: theme.color.grayText}}>Limpar</Text>
                </TouchableOpacity>
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
    paddingTop: 5,
  },
  body: {
    flex: 1,
    width: `100%`,
    height: `100%`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `flex-start`,
    paddingVertical: 5,
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
    marginTop: 5,
    backgroundColor: theme.color.white,
  },
  inputTitleBox: {
    width: `30%`,
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
    width: `35%`,
    height: 40,
  },
  input: {
    height: 40,
    textAlign: `center`,
  },
  border: {
    borderWidth: 1,
    borderColor: theme.color.blue4,
    borderRadius: 3,
  },
  unitBox: {
    width: 90,
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
    justifyContent: `space-between`,
    alignItems: `center`,
    width: `100%`,
    marginTop: 20,
  },
  amountBox: {
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    height: 40,
    backgroundColor: theme.color.blue6,
    paddingHorizontal: 8,
    borderRadius: 3,
  },
  amountInput: {
    width: Platform.select({ios: SCREEN.width * 0.535, android: SCREEN.width * 0.56}),
    height: 40,
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
  buttonText: {
    color: theme.color.white,
    fontSize: 18,
  },
  result: {
    width: `95%`,
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: theme.color.blue2,
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: `center`,
    flexDirection: `column`,
    alignItems: `flex-start`,
  },
  resultTitle: {
    fontWeight: `bold`,
    color: theme.color.blue2,
  },
  resultText: {
    fontSize: 18,
    fontWeight: `normal`,
    color: theme.color.purpleText,
  },
  clearButton: {
    padding: 5,
    width: `95%`,
    alignItems: `center`,
    color: theme.color.danger,
  },
});

export default CalculatorScreen;
