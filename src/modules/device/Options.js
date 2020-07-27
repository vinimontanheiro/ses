import React from 'react';
import {Icon} from 'native-base';
import {Text, StyleSheet, View, TouchableOpacity, FlatList, Image} from 'react-native';
import theme from '../theme';
import {RIBBONS} from '../../constants';

const Options = ({item, onChange, selected, result, weight, data}) => {
  return (
    <View style={styles.optionContainer}>
      <FlatList
        style={styles.flatlist}
        data={data}
        keyExtractor={(row) => row.value}
        numColumns={2}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item: {label, image, value}}) => (
          <TouchableOpacity
            style={[
              styles.optionHandle,
              {borderColor: selected === value ? theme.color.blue4 : theme.color.white},
            ]}
            onPress={() => {
              onChange(value);
            }}>
            <View style={styles.optionContent}>
              {selected === value ? (
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
      {!item ? (
        <View
          style={[
            styles.resultContainer,
            {backgroundColor: result.backgroundColor || theme.color.blue6},
          ]}>
          <Text style={[styles.resultBox, {color: result.color || theme.color.blue2}]}>{`${
            result.label || result
          }`}</Text>
        </View>
      ) : (
        <View style={[styles.resultContainer, {backgroundColor: theme.color.blue6}]}>
          <Text style={[styles.resultBox, {color: theme.color.blue2}]}>
            {Number(weight) > 0 ? `${item.content} ${result}` : `${result}`}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    borderTopColor: theme.color.white,
    borderTopWidth: 2,
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
  resultContainer: {
    borderRadius: 3,
    borderTopColor: theme.color.white,
    borderTopWidth: 3,
    justifyContent: `center`,
    alignItems: `center`,
    width: `100%`,
    padding: 15,
    backgroundColor: theme.color.blue6,
  },
  resultBox: {
    fontSize: 15,
    color: theme.color.blue2,
    fontWeight: `bold`,
    textShadowColor: `rgba(0, 0, 0,0.3)`,
    textShadowOffset: {width: 0.1, height: 0.2},
    textShadowRadius: 1,
  },
});

export default Options;
