const commons = {
  black: `#000000`,
  dark: `#323030`,
  default: `#D1CACA`,
  defaultLight: `#fafafa`,
  danger: `rgb(255, 0, 0)`,
  warning: `#ffd400`,
  info: `#cce5ff`,
  enabled: `#4d89ea`,
  transparent: `transparent`,
  underlay: `rgba(0,0,0, 0.3)`,
};

const light = {
  color: {
    light: `#fff`,
    ...commons,
  },
};

export default {
  ...light,
};
