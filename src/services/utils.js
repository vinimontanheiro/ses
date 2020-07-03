import {IS_DEVELOPMENT} from '../constants';

export const showLog = (message) => {
  if (IS_DEVELOPMENT) {
    console.log(message);
  }
};

export const genarateKey = (length = 8) => {
  let key = ``;
  const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    key += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return key;
};

// export const isImage = (extension) => {
//   return IMAGE_EXTENSIONS.includes(extension.toLowerCase());
// };
