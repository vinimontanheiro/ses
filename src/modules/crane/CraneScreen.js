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
import SimpleAnimatableView from '../ui/SimpleAnimatableView';

const CraneScreen = () => {
  const {t} = useTranslation(`crane`);
  const {
    height,
    weight,
    radius,
    onHeightChange,
    onWeightChange,
    onRadiusChange,
    clear,
    showResult,
    result,
    animation,
  } = useCrane();

  console.log(result);

  return (
    <KeyboardAvoidingView style={styles.flex} keyboardShouldPersistTaps="handled">
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        <View style={styles.body}>
          <View style={styles.header}>
            <Text style={styles.subTitle}>{t(`whats_the_total_height`)}</Text>
          </View>
          <Item regular style={styles.radius3}>
            <Input
              value={height}
              style={styles.input}
              placeholder="0"
              keyboardType="numeric"
              onChangeText={onHeightChange}
            />
            <View style={styles.paddingHorizontal10}>
              <Text>A</Text>
            </View>
          </Item>

          <View style={[styles.header, styles.marginTop20]}>
            <Text style={styles.subTitle}>{t(`whats_the_weight`)}</Text>
          </View>
          <Item regular style={styles.radius3}>
            <Input
              value={weight}
              style={styles.input}
              placeholder="0"
              keyboardType="numeric"
              onChangeText={onWeightChange}
            />
            <View style={styles.paddingHorizontal10}>
              <Text>KG</Text>
            </View>
          </Item>

          <View style={[styles.header, styles.marginTop20]}>
            <Text style={styles.subTitle}>{t(`whats_the_radius`)}</Text>
          </View>
          <Item regular style={styles.radius3}>
            <Input
              value={radius}
              style={styles.input}
              placeholder="0"
              keyboardType="numeric"
              onChangeText={onRadiusChange}
            />
            <View style={styles.paddingHorizontal10}>
              <Text>R</Text>
            </View>
          </Item>

          <TouchableHighlight
            style={styles.button}
            underlayColor={theme.color.underlayBlue}
            onPress={showResult}>
            <Text style={styles.buttonText}>{t(`find_crane`)}</Text>
          </TouchableHighlight>

          <TouchableOpacity style={styles.clearButton} onPress={clear}>
            <Text style={{color: theme.color.grayText}}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <SimpleAnimatableView
          style={[{width: result ? `100%` : 0}]}
          duration={500}
          type={animation.type}
          onAnimationBegin={animation.onStart}
          onAnimationEnd={animation.onEnd}>
          <View style={styles.resultBox}>
            <Text style={styles.resultText}>{result}</Text>
          </View>
        </SimpleAnimatableView>
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
    paddingTop: 25,
  },
  body: {
    flex: 1,
    width: `100%`,
    height: `100%`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `flex-start`,
    paddingVertical: 5,
    paddingHorizontal: 25,
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
    marginBottom: 3,
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
  paddingHorizontal10: {
    paddingHorizontal: 10,
  },
  marginTop20: {
    marginTop: 20,
  },
  resultBox: {
    width: `100%`,
    backgroundColor: theme.color.blue3,
    height: 100,
    alignItems: `center`,
    justifyContent: `center`,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  resultText: {
    color: theme.color.white,
    fontSize: 16,
    fontWeight: `bold`,
    textAlign: `center`,
  },
});

export default CraneScreen;
