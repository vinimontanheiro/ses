import React from 'react';
import {Item, Input, Accordion, Icon} from 'native-base';
import {Text, StyleSheet, View, ScrollView, KeyboardAvoidingView} from 'react-native';
import {useTranslation} from 'react-i18next';
import theme from '../theme';

const Manilha = [{title: `Manilha`, content: `Lorem ipsum dolor sit amet`}];

const Fita = [{title: `Fita`, content: `Lorem ipsum dolor sit amet`}];

const Cabo = [{title: `Cabo de aço`, content: `Lorem ipsum dolor sit amet`}];

const HeaderRender = (item, expanded) => {
  return (
    <View
      style={{
        backgroundColor: theme.color.blue6,
        padding: 5,
        flexDirection: `row`,
        justifyContent: `space-between`,
        alignItems: `center`,
        borderRadius: 3,
      }}>
      <View
        style={{
          flexDirection: `row`,
          justifyContent: `flex-start`,
          alignItems: `center`,
          borderRadius: 3,
        }}>
        <Icon
          name={expanded ? `checkbox-outline` : `square-outline`}
          style={{color: expanded ? theme.color.blue2 : theme.color.underlay}}
        />
        <Text style={{fontSize: 18, marginLeft: 5}}>{item.title}</Text>
      </View>
      <Icon name={expanded ? `caret-up-outline` : `caret-down-outline`} />
    </View>
  );
};

const ContentRender = (item, expanded) => {
  return (
    <View
      style={{
        borderRadius: 3,
        borderTopColor: theme.color.white,
        borderTopWidth: 3,
        justifyContent: `center`,
        alignItems: `center`,
        width: `100%`,
        padding: 10,
      }}>
      <Text style={{fontSize: 16, color: theme.color.blue2, fontWeight: `bold`}}>
        {item.content}
      </Text>
    </View>
  );
};

const CalculatorShapeScreen = () => {
  const {t} = useTranslation(`device`);

  return (
    <KeyboardAvoidingView style={styles.flex} keyboardShouldPersistTaps="handled">
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.subTitle}>{t(`what_piece_weight_will_you_lift`)}</Text>
        </View>
        <View style={styles.body}>
          <Item regular style={{borderRadius: 3}}>
            <Input style={styles.input} placeholder="0" keyboardType="numeric" />
            <View style={{paddingHorizontal: 10}}>
              <Text>KG</Text>
            </View>
          </Item>
          <View style={{width: `100%`, backgroundColor: theme.color.blue6, marginTop: 20}}>
            <Accordion
              style={{borderRadius: 3}}
              contentStyle={{borderRadius: 3}}
              dataArray={Manilha}
              expanded={false}
              renderHeader={HeaderRender}
              renderContent={ContentRender}
              expandedIcon="chevron-up-outline"
              icon="chevron-down-outline"
            />
          </View>

          <View style={{width: `100%`, backgroundColor: theme.color.blue6, marginTop: 20}}>
            <Accordion
              style={{borderRadius: 3}}
              contentStyle={{borderRadius: 3}}
              dataArray={Fita}
              expanded={false}
              renderHeader={HeaderRender}
              renderContent={ContentRender}
              expandedIcon="chevron-up-outline"
              icon="chevron-down-outline"
            />
          </View>

          <View style={{width: `100%`, backgroundColor: theme.color.blue6, marginTop: 20}}>
            <Accordion
              style={{borderRadius: 3}}
              contentStyle={{borderRadius: 3}}
              dataArray={Cabo}
              expanded={false}
              renderHeader={HeaderRender}
              renderContent={ContentRender}
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
