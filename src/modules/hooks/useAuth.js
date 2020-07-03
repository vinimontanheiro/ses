import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {useEffect, useMemo} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {showLog} from '../../services/utils';
import {restoreTokenAction, signInAction, resetAuthStoreAction} from '../../services/redux/actions';

const useAuth = () => {
  const dispatch = useDispatch();

  const {token, loading, isSignOut} = useSelector(
    (state) => ({
      loading: state.Auth.loading,
      token: state.Auth.token,
      isSignOut: state.Auth.isSignOut,
    }),
    shallowEqual,
  );

  useEffect(() => {
    const restoreTokenAsync = async () => {
      try {
        const storageToken = await AsyncStorage.getItem(`token`);
        dispatch(restoreTokenAction(storageToken));
      } catch (e) {
        showLog(e);
      }
    };
    if (!isSignOut) {
      restoreTokenAsync();
    }
  }, [dispatch, token, isSignOut]);

  const authContext = useMemo(
    () => ({
      authSignIn: async (t) => {
        await AsyncStorage.setItem(`token`, t);
        dispatch(signInAction(t));
      },
      authSignOut: async () => {
        await AsyncStorage.setItem(`token`, ``);
        dispatch(resetAuthStoreAction());
      },
    }),
    [dispatch],
  );

  return [authContext, {token, loading, isSignOut}];
};

export default useAuth;
