import {Platform} from 'react-native';

export const IS_DEVELOPMENT = true;

export const WEB_CLIENT_ID = `119879670298-v0nd2t43ag4b9oh3lj04rr6n5n2457tl.apps.googleusercontent.com`;

export const IS_ANDROID = Platform.OS === `android`;

export const SCREEN = {
  SIGN_IN: `sign_in`,
  HOME_SCREEN: `home_screen`,
  SECURITY_SCREEN: `security_screen`,
  SECURITY_ITEM_SCREEN: `security_item_screen`,
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
