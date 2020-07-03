import React from 'react';
import {Text, StyleSheet, View, ScrollView, KeyboardAvoidingView} from 'react-native';

const SignInScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.flex} keyboardShouldPersistTaps="handled">
      <ScrollView style={styles.content} contentContainerStyle={styles.container}>
        <View style={styles.body}>
          <Text>Teste</Text>
        </View>
      </ScrollView>
      <View style={styles.borderEffect} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`,
  },

  body: {
    flex: 1,
    width: `100%`,
    height: `100%`,
    flexDirection: `column`,
    padding: 25,
    alignItems: `center`,
    justifyContent: `center`,
  },
});

export default SignInScreen;
