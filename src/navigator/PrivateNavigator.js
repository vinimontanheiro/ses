import {SCREEN} from '../constants';
import HomeScreen from '../modules/home/HomeScreen';
import SecurityScreen from '../modules/security/SecurityScreen';
import SecurityItemScreen from '../modules/security/SecurityItemScreen';
import CalculatorShapeScreen from '../modules/calculator/CalculatorShapeScreen';
import CalculatorScreen from '../modules/calculator/CalculatorScreen';
import DeviceScreen from '../modules/device/DeviceScreen';
import CraneScreen from '../modules/crane/CraneScreen';

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
  {
    name: SCREEN.CALCULATOR_SHAPE_SCREEN,
    component: CalculatorShapeScreen,
    title: `home:calculator`,
    options: {
      headerStyle,
    },
  },
  {
    name: SCREEN.CALCULATOR_SCREEN,
    component: CalculatorScreen,
    title: `home:calculator`,
    options: {
      headerStyle,
    },
  },
  {
    name: SCREEN.DEVICE_SCREEN,
    component: DeviceScreen,
    title: `home:device`,
    options: {
      headerStyle,
    },
  },
  {
    name: SCREEN.CRANE_SCREEN,
    component: CraneScreen,
    title: `home:crane`,
    options: {
      headerStyle,
    },
  },
];
