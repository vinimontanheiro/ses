import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {StatusBar} from 'react-native';
import {I18nextProvider} from 'react-i18next';
import i18next from './services/i18n/i18next';
import {persistor, store} from './services/redux/store';
import Navigator from './navigator';
import Loading from './modules/ui/Loading';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18next}>
          <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
          <Navigator />
          <Loading />
        </I18nextProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
