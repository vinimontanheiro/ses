import {Platform} from 'react-native';

export const IS_DEVELOPMENT = false;

export const IS_ANDROID = Platform.OS === `android`;

export const SCREEN = {
  SIGN_IN: `sign_in`,
  QR_CODE_SCANNER: `qr_code_scanner`,
  SUPPLY_SCREEN: `supply_screen`,
  FORGOT_PASSWORD: `forgot_my_password`,
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
