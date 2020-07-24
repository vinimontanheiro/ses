import React, {useRef} from 'react';
import {Item, Input, Accordion} from 'native-base';
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
import useDevice from '../hooks/useDevice';
import theme from '../theme';
import RenderHeader from './RenderHeader';
import RenderContent from './RenderContent';
import Ribbons from './Ribbons';
import Steels from './Steels';

const Manilha = [{title: `Manilha`, content: `Deverá ser utilizada a manilha de`}];
const Fita = [{title: `Fita`}];
const Cabo = [{title: `Cabo de aço`, content: `Deverá ser utilizado o cabo de aço de`}];

const CalculatorShapeScreen = () => {
  const {t} = useTranslation(`device`);
  const ref = useRef(null);
  const {
    onShackleChange,
    shackle,
    weight,
    onWeightChange,
    shackleOpened,
    handleCalculate,
    onRibbonChange,
    ribbon,
    ribbonResult,
  } = useDevice();

  return (
    <KeyboardAvoidingView style={styles.flex} keyboardShouldPersistTaps="handled">
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.subTitle}>{t(`what_piece_weight_will_you_lift`)}</Text>
        </View>
        <View style={styles.body}>
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

          <TouchableHighlight
            style={styles.button}
            underlayColor={theme.color.underlayBlue}
            onPress={handleCalculate}>
            <Text style={styles.buttonText}>{t(`action:calculate`)}</Text>
          </TouchableHighlight>

          <TouchableOpacity style={styles.clearButton}>
            <Text style={{color: theme.color.grayText}}>Limpar</Text>
          </TouchableOpacity>

          <View style={[styles.header, {marginTop: 20}]}>
            <Text style={styles.subTitle}> Escolha uma opção ou mais para resultados</Text>
          </View>
          <View style={styles.shackle}>
            <Accordion
              style={styles.radius3}
              contentStyle={styles.radius3}
              dataArray={Manilha}
              expanded={shackleOpened}
              renderHeader={(item, expanded) => RenderHeader({item, expanded})}
              renderContent={(item) => RenderContent({item, result: shackle, weight})}
              expandedIcon="chevron-up-outline"
              icon="chevron-down-outline"
              onAccordionOpen={onShackleChange}
              ref={ref}
            />
          </View>

          <View style={styles.ribbon}>
            <Accordion
              style={styles.radius3}
              contentStyle={styles.radius3}
              dataArray={Fita}
              expanded={false}
              renderHeader={(item, expanded) => RenderHeader({item, expanded})}
              renderContent={(item) => Ribbons({onRibbonChange, ribbon, result: ribbonResult})}
              expandedIcon="chevron-up-outline"
              icon="chevron-down-outline"
            />
          </View>

          <View style={styles.steel}>
            <Accordion
              style={styles.radius3}
              contentStyle={styles.radius3}
              dataArray={Cabo}
              expanded={false}
              renderHeader={(item, expanded) => RenderHeader({item, expanded})}
              renderContent={(item) => Steels({item, onSteelChange: () => true, result: shackle})}
              expandedIcon="chevron-up-outline"
              icon="chevron-down-outline"
            />
          </View>
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
  shackle: {
    width: `100%`,
    backgroundColor: theme.color.blue6,
    marginTop: 5,
  },
  ribbon: {
    width: `100%`,
    backgroundColor: theme.color.white,
    marginTop: 10,
  },
  steel: {
    width: `100%`,
    backgroundColor: theme.color.blue6,
    marginTop: 10,
  },
  radius3: {
    borderRadius: 3,
  },
});

export default CalculatorShapeScreen;
