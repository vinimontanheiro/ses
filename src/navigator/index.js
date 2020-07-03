import * as React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREEN} from '../constants';
import PublicNavigator from './PublicNavigator';
import {AuthContext} from '../services/context';
import useAuth from '../modules/hooks/useAuth';
import PrivateNavigator from './PrivateNavigator';
import useBootstrap from '../modules/hooks/useBootstrap';

const Stack = createStackNavigator();

const Navigator = () => {
  const [authContext, {token, isSignOut}] = useAuth();

  useBootstrap();

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <NavigationContainer>
        <AuthContext.Provider value={authContext}>
          {!token || isSignOut ? (
            <Stack.Navigator
              initialRouteName={SCREEN.SIGN_IN}
              headerMode="screen"
              screenOptions={{headerBackTitleVisible: false, headerTransparent: true}}>
              {PublicNavigator.map(({name, options, component}) => (
                <Stack.Screen key={name} name={name} options={options} component={component} />
              ))}
            </Stack.Navigator>
          ) : (
            <SafeAreaView style={styles.signed}>
              <Stack.Navigator
                initialRouteName={SCREEN.QR_CODE_SCANNER}
                headerMode="screen"
                screenOptions={{headerBackTitleVisible: false}}>
                {PrivateNavigator.map(({name, options, component}) => (
                  <Stack.Screen
                    key={name}
                    name={name}
                    options={options}
                    initialParams={{isQRCode: name === SCREEN.QR_CODE_SCANNER}}
                    component={component}
                  />
                ))}
              </Stack.Navigator>
            </SafeAreaView>
          )}
        </AuthContext.Provider>
      </NavigationContainer>
    </>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  signed: {
    flex: 1,
    paddingBottom: 0,
    paddingTop: 0,
  },
  notSigned: {
    flex: 1,
    paddingBottom: 0,
    paddingTop: 0,
    backgroundColor: `#413E3E`,
  },
});
