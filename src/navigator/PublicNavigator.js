import {SCREEN} from '../constants';
// import theme from '../modules/theme';
import SignInScreen from '../modules/sign/SignInScreen';

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
    name: SCREEN.SIGN_IN,
    component: SignInScreen,
    options: {
      headerShown: false,
    },
  },
];
