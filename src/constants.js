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
import RIBBON1 from './assets/img/ribbons/ribbon1.png';
import RIBBON2 from './assets/img/ribbons/ribbon2.png';
import RIBBON3 from './assets/img/ribbons/ribbon3.png';
import RIBBON4 from './assets/img/ribbons/ribbon4.png';
import RIBBON5 from './assets/img/ribbons/ribbon5.png';
import RIBBON6 from './assets/img/ribbons/ribbon6.png';
import RIBBON7 from './assets/img/ribbons/ribbon7.png';
import RIBBON8 from './assets/img/ribbons/ribbon8.png';
import STEEL1 from './assets/img/steels/steel1.png';
import STEEL2 from './assets/img/steels/steel2.png';
import STEEL3 from './assets/img/steels/steel3.png';
import STEEL4 from './assets/img/steels/steel4.png';
import STEEL5 from './assets/img/steels/steel5.png';
import STEEL6 from './assets/img/steels/steel6.png';

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
  DEVICE_SCREEN: `device_screen`,
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

export const SHAPE_LABEL = {
  SHAPE1: `shape1`,
  SHAPE2: `shape2`,
  SHAPE3: `shape3`,
  SHAPE4: `shape4`,
  SHAPE5: `shape5`,
  SHAPE6: `shape6`,
  SHAPE7: `shape7`,
  SHAPE8: `shape8`,
  SHAPE9: `shape9`,
  SHAPE10: `shape10`,
  SHAPE11: `shape11`,
};

export const SHAPES_CALCULATOR = [
  {
    label: SHAPE_LABEL.SHAPE1, // Barra sextavada
    image: SHAPE1_IMG,
    hasDiameter: true,
    hasLength: true,
    hasThickness: false,
    hasHeight: false,
    hasWidth: false,
  },
  {
    label: SHAPE_LABEL.SHAPE2, // Barra redonda
    image: SHAPE2_IMG,
    hasDiameter: true,
    hasLength: true,
    hasThickness: false,
    hasHeight: false,
    hasWidth: false,
  },
  {
    label: SHAPE_LABEL.SHAPE3, // Tubo
    image: SHAPE3_IMG,
    hasDiameter: true,
    hasLength: true,
    hasThickness: true,
    hasHeight: false,
    hasWidth: false,
  },
  {
    label: SHAPE_LABEL.SHAPE4, // Barra quadrada
    image: SHAPE4_IMG,
    hasDiameter: false,
    hasLength: true,
    hasThickness: false,
    hasHeight: true,
    hasWidth: false,
  },
  {
    label: SHAPE_LABEL.SHAPE5, // Tubo quadrado
    image: SHAPE5_IMG,
    hasDiameter: false,
    hasLength: true,
    hasThickness: true,
    hasHeight: true,
    hasWidth: true,
  },
  {
    label: SHAPE_LABEL.SHAPE6,
    image: SHAPE6_IMG,
  },
  {
    label: SHAPE_LABEL.SHAPE7,
    image: SHAPE7_IMG,
  },
  {
    label: SHAPE_LABEL.SHAPE8,
    image: SHAPE8_IMG,
  },
  {
    label: SHAPE_LABEL.SHAPE9,
    image: SHAPE9_IMG,
  },
  {
    label: SHAPE_LABEL.SHAPE10,
    image: SHAPE10_IMG,
    hasDiameter: false,
    hasLength: true,
    hasThickness: false,
    hasHeight: true,
    hasWidth: true,
  },
  {
    label: SHAPE_LABEL.SHAPE11, // Chapa
    image: SHAPE11_IMG,
    hasDiameter: false,
    hasLength: true,
    hasThickness: true,
    hasHeight: true,
    hasWidth: true,
  },
];

export const UNIT = {
  MM: 1,
  CM: 2,
  POL: 3,
};

export const UNITS_CALCULATOR = [
  {
    label: `mm`,
    value: 1,
  },
  {
    label: `cm`,
    value: 2,
  },
  {
    label: `pol`,
    value: 3,
  },
];

export const FIRESTORE_UID = `6xHzwXZFLEbwYiMJc6HH`;

export const RIBBON_VALUE = {
  RIBBON1: 1,
  RIBBON2: 2,
  RIBBON3: 3,
  RIBBON4: 4,
  RIBBON5: 5,
  RIBBON6: 6,
  RIBBON7: 7,
  RIBBON8: 8,
};

export const RIBBONS = [
  {
    label: `Vertical`,
    value: RIBBON_VALUE.RIBBON1,
    image: RIBBON1,
  },
  {
    label: `Choker`,
    value: RIBBON_VALUE.RIBBON2,
    image: RIBBON2,
  },
  {
    label: `Basket`,
    value: RIBBON_VALUE.RIBBON3,
    image: RIBBON3,
  },
  {
    label: `90 graus`,
    value: RIBBON_VALUE.RIBBON4,
    image: RIBBON4,
  },
  {
    label: `2 pernas (0 -45°)`,
    value: RIBBON_VALUE.RIBBON5,
    image: RIBBON5,
  },
  {
    label: `3 e 4 pernas (0 -45°)`,
    value: RIBBON_VALUE.RIBBON6,
    image: RIBBON6,
  },
  {
    label: `2 pernas (46° -60°)`,
    value: RIBBON_VALUE.RIBBON7,
    image: RIBBON7,
  },
  {
    label: `3 e 4 pernas (46°-60°)`,
    value: RIBBON_VALUE.RIBBON8,
    image: RIBBON8,
  },
];

export const STEEL_VALUE = {
  STEEL1: 1,
  STEEL2: 2,
  STEEL3: 3,
  STEEL4: 4,
  STEEL5: 5,
  STEEL6: 6,
  STEEL7: 7,
  STEEL8: 8,
  STEEL9: 9,
  STEEL10: 10,
  STEEL11: 11,
  STEEL12: 12,
  STEEL13: 13,
  STEEL14: 14,
};

export const STEELS = [
  {
    label: `Vertical Simples`,
    value: STEEL_VALUE.STEEL1,
    image: STEEL1,
  },
  {
    label: `Forca Chocker`,
    value: STEEL_VALUE.STEEL2,
    image: STEEL2,
  },
  {
    label: `Vertical Duplo`,
    value: STEEL_VALUE.STEEL3,
    image: STEEL3,
  },
  {
    label: `30°`,
    value: STEEL_VALUE.STEEL4,
    image: STEEL4,
  },
  {
    label: `45°`,
    value: STEEL_VALUE.STEEL5,
    image: STEEL5,
  },
  {
    label: `60°`,
    value: STEEL_VALUE.STEEL6,
    image: STEEL6,
  },
];
