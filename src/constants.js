import {Platform} from 'react-native';
import SHAPE1_IMG from './assets/img/barra-sextavada.png';
import SHAPE2_IMG from './assets/img/barra-redonda.png';
import SHAPE3_IMG from './assets/img/tubo.png';
import SHAPE4_IMG from './assets/img/barra-quadrada.png';
import SHAPE5_IMG from './assets/img/tubo-quadrado.png';
import SHAPE6_IMG from './assets/img/perfil-t.png';
import SHAPE7_IMG from './assets/img/perfil-ih.png';
import SHAPE8_IMG from './assets/img/perfil-u.png';
import SHAPE9_IMG from './assets/img/cantoneira.png';
import SHAPE10_IMG from './assets/img/barra-chata.png';
import SHAPE11_IMG from './assets/img/chapa.png';

export const IS_DEVELOPMENT = true;

export const WEB_CLIENT_ID = `119879670298-v0nd2t43ag4b9oh3lj04rr6n5n2457tl.apps.googleusercontent.com`;

export const IS_ANDROID = Platform.OS === `android`;

export const SCREEN = {
  SIGN_IN: `sign_in`,
  HOME_SCREEN: `home_screen`,
  SECURITY_SCREEN: `security_screen`,
  SECURITY_ITEM_SCREEN: `security_item_screen`,
  CALCULATOR_SCREEN: `calculator_screen`,
  CALCULATOR_SHAPE_SCREEN: `calculator_shape_screen`,
};

export const ANIMATION_TYPE = {
  BOUNCE: `bounce`,
  FLASH: `flash`,
  JELLO: `jello`,
  PULSE: `pulse`,
  ROTATE: `rotate`,
  RUBBER_BAND: `rubberBand`,
  SHAKE: `shake`,
  SWING: `swing`,
  TADA: `tada`,
  WOBBLE: `wobble`,
  FADE_IN: `fadeIn`,
  FADE_OUT: `fadeOut`,
  FADE_OUT_UP: `fadeOutUp`,
  FADE_IN_UP: `fadeInUp`,
  FADE_OUT_DOWN: `fadeOutDown`,
  SLIDE_IN_UP: `slideInUp`,
  SLIDE_IN_DOWN: `slideInDown`,
  BOUNCE_IN: `bounceIn`,
  ZOOM_IN: `zoomIn`,
};

export const SHAPES_CALCULATOR = [
  {
    label: `shape1`,
    image: SHAPE1_IMG,
  },
  {
    label: `shape2`,
    image: SHAPE2_IMG,
  },
  {
    label: `shape3`,
    image: SHAPE3_IMG,
  },
  {
    label: `shape4`,
    image: SHAPE4_IMG,
  },
  {
    label: `shape5`,
    image: SHAPE5_IMG,
  },
  {
    label: `shape6`,
    image: SHAPE6_IMG,
  },
  {
    label: `shape7`,
    image: SHAPE7_IMG,
  },
  {
    label: `shape8`,
    image: SHAPE8_IMG,
  },
  {
    label: `shape9`,
    image: SHAPE9_IMG,
  },
  {
    label: `shape10`,
    image: SHAPE10_IMG,
  },
  {
    label: `shape11`,
    image: SHAPE11_IMG,
  },
];

export const UNITS_CALCULATOR = [
  {
    label: `cm`,
    value: 0,
  },
  {
    label: `mm`,
    value: 1,
  },
  {
    label: `pol`,
    value: 2,
  },
];

export const FIRESTORE_UID = `6xHzwXZFLEbwYiMJc6HH`;
