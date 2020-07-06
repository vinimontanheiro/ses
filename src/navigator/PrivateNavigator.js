import {SCREEN} from '../constants';
import HomeScreen from '../modules/home/HomeScreen';
import SecurityScreen from '../modules/security/SecurityScreen';
import SecurityItemScreen from '../modules/security/SecurityItemScreen';

import theme from '../modules/theme';

// import theme from '../modules/theme';

const headerStyle = {
  elevation: 0,
  shadowOpacity: 0,
  shadowOffset: {
    height: 0,
  },
  shadowRadius: 0,
  backgroundColor: theme.color.white,
};

export default [
  {
    name: SCREEN.HOME_SCREEN,
    component: HomeScreen,
    title: ``,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREEN.SECURITY_SCREEN,
    component: SecurityScreen,
    title: `home:security`,
    options: {
      headerStyle,
    },
  },
  {
    name: SCREEN.SECURITY_ITEM_SCREEN,
    component: SecurityItemScreen,
    title: `home:security`,
    options: {
      headerStyle,
    },
  },
];
