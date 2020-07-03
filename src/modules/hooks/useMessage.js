import {useCallback} from 'react';
import {ToastAndroid, Alert} from 'react-native';
import {useTranslation} from 'react-i18next';
import {IS_ANDROID} from '../../constants';
import useLoading from './useLoading';

const MESSAGE_TIMEOUT = 3500;

const useMessage = () => {
  const [loading, setLoading] = useLoading();
  const {t} = useTranslation(`action`);

  const showMessage = useCallback(
    (message) => {
      if (IS_ANDROID) {
        ToastAndroid.showWithGravity(
          message,
          MESSAGE_TIMEOUT,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      } else {
        Alert.alert(t(message), null, [
          {
            text: t(`action:close`),
            style: `cancel`,
          },
        ]);
      }
    },
    [t],
  );

  return {showMessage, setLoading, loading};
};

export default useMessage;
