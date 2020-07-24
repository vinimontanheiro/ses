import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import theme from '../theme';

const RenderContent = ({item, result}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.resultBox}>{`${item.content} ${result}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    fontSize: 16,
    color: theme.color.blue2,
    fontWeight: `bold`,
  },
});

export default RenderContent;
