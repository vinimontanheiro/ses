import {SCREEN} from '../constants';
import QRCodeScreen from '../modules/home/HomeScreen';
// import theme from '../modules/theme';

// const headerStyle = {
//   elevation: 0,
//   shadowOpacity: 0,
//   shadowOffset: {
//     height: 0,
//   },
//   shadowRadius: 0,
//   backgroundColor: theme.color.background,
// };

export default [
  {
    name: SCREEN.QR_CODE_SCANNER,
    component: QRCodeScreen,
    options: {
      headerShown: false,
    },
  },
];
