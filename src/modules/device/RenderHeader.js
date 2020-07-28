import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import theme from '../theme';

const RenderHeader = ({item, expanded}) => {
  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <Icon
          name={expanded ? `checkbox-outline` : `square-outline`}
          style={{color: expanded ? theme.color.blue2 : theme.color.underlay}}
        />
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <Icon name={expanded ? `caret-up-outline` : `caret-down-outline`} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: theme.color.blue6,
    padding: 10,
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
    borderRadius: 3,
  },
  header: {
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    borderRadius: 3,
  },
  title: {
    fontSize: 18,
    marginLeft: 5,
  },
});

export default RenderHeader;
