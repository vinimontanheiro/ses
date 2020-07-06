import * as React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import {SCREEN} from '../constants';
import PublicNavigator from './PublicNavigator';
import {AuthContext} from '../services/context';
import useAuth from '../modules/hooks/useAuth';
import PrivateNavigator from './PrivateNavigator';
import useBootstrap from '../modules/hooks/useBootstrap';

const Stack = createStackNavigator();

const Navigator = () => {
  const [authContext, {token, isSignOut}] = useAuth();
  const {t} = useTranslation(`home`);
  useBootstrap();

  return (
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
              initialRouteName={SCREEN.HOME_SCREEN}
              headerMode="screen"
              screenOptions={{headerBackTitleVisible: false}}>
              {PrivateNavigator.map(({name, title, options, component}) => (
                <Stack.Screen
                  key={name}
                  name={name}
                  options={{
                    ...options,
                    title: title ? t(title) : null,
                  }}
                  component={component}
                />
              ))}
            </Stack.Navigator>
          </SafeAreaView>
        )}
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  signed: {
    flex: 1,
    paddingBottom: 0,
    paddingTop: 0,
  },
});
