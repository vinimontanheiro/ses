import React, {useRef} from 'react';
import {Item, Input, Accordion, Icon} from 'native-base';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  Image,
  CellRenderer,
  VirtualizedList,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import useDevice from '../hooks/useDevice';
import theme from '../theme';
import RenderHeader from './RenderHeader';
import RenderContent from './RenderContent';
import {RIBBONS} from '../../constants';

const Manilha = [{title: `Manilha`, content: `Deverá ser utilizada a manilha de`}];

const Fita = [{title: `Fita`, content: `Lorem ipsum dolor sit amet`}];

const Cabo = [{title: `Cabo de aço`, content: `Lorem ipsum dolor sit amet`}];

const Ribbons = ({item, onRibbonsChange, ribbon}) => {
  return (
    <View style={styles.optionContainer}>
      <FlatList
        style={styles.flatlist}
        data={RIBBONS}
        keyExtractor={(row) => row.value}
        numColumns={2}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item: {label, image, value}}) => (
          <TouchableOpacity
            style={[
              styles.optionHandle,
              {borderColor: ribbon === value ? theme.color.blue4 : theme.color.white},
            ]}
            onPress={() => {
              onRibbonsChange(value);
            }}>
            <View style={styles.optionContent}>
              {ribbon === value ? (
                <Icon
                  style={[styles.optionIcon, {color: theme.color.blue2}]}
                  name="radio-button-on-outline"
                />
              ) : (
                <Icon style={styles.optionIcon} name="radio-button-off-outline" />
              )}
              <View style={styles.optionImageBox}>
                <Image style={styles.image} source={image} />
              </View>
            </View>
            <Text style={styles.optionText}>{label}</Text>
          </TouchableOpacity>
        )}
      />

      <RenderContent item={item} />
    </View>
  );
};

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
    onRibbonsChange,
    ribbon,
  } = useDevice();

  console.log(ref);

  return (
    <KeyboardAvoidingView style={styles.flex} keyboardShouldPersistTaps="handled">
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.subTitle}>{t(`what_piece_weight_will_you_lift`)}</Text>
        </View>
        <View style={styles.body}>
          <Item regular style={{borderRadius: 3}}>
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
          <View style={{width: `100%`, backgroundColor: theme.color.blue6, marginTop: 5}}>
            <Accordion
              style={{borderRadius: 3}}
              contentStyle={{borderRadius: 3}}
              dataArray={Manilha}
              expanded={shackleOpened}
              renderHeader={(item, expanded) => RenderHeader({item, expanded})}
              renderContent={(item) => RenderContent({item, result: shackle})}
              expandedIcon="chevron-up-outline"
              icon="chevron-down-outline"
              onAccordionOpen={onShackleChange}
              ref={ref}
            />
          </View>

          <View style={{width: `100%`, backgroundColor: theme.color.white, marginTop: 10}}>
            <Accordion
              style={{borderRadius: 3}}
              contentStyle={{borderRadius: 3}}
              dataArray={Fita}
              expanded={false}
              renderHeader={(item, expanded) => RenderHeader({item, expanded})}
              renderContent={(item) => Ribbons({item, onRibbonsChange, ribbon})}
              expandedIcon="chevron-up-outline"
              icon="chevron-down-outline"
            />
          </View>

          <View style={{width: `100%`, backgroundColor: theme.color.blue6, marginTop: 10}}>
            <Accordion
              style={{borderRadius: 3}}
              contentStyle={{borderRadius: 3}}
              dataArray={Cabo}
              expanded={false}
              renderHeader={(item, expanded) => RenderHeader({item, expanded})}
              renderContent={(item) => RenderContent({item, result: shackle})}
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
  flatlist: {
    flex: 1,
    borderTopColor: theme.color.white,
    borderTopWidth: 2,
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
  optionContainer: {
    flex: 1,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    width: `100%`,
  },
  contentContainerStyle: {
    flexDirection: `row`,
    justifyContent: `space-between`,
    borderTopColor: theme.color.white,
    borderTopWidth: 2,
  },
  optionHandle: {
    flexDirection: `column`,
    width: `50%`,
    backgroundColor: theme.color.blue6,
    justifyContent: `center`,
    alignItems: `center`,
    height: 100,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
    borderWidth: 2,
  },
  optionContent: {
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    width: `100%`,
  },
  optionIcon: {
    position: `relative`,
    top: 10,
  },
  optionImageBox: {
    flex: 0.8,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    width: `100%`,
  },
  optionText: {
    textAlign: `center`,
    paddingTop: 5,
  },
});

export default CalculatorShapeScreen;
