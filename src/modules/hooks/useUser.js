import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {setApp} from '../../services/redux/actions';

const useUser = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(
    (state) => ({
      user: state.App.user,
    }),
    shallowEqual,
  );

  const updateUser = useCallback(
    (u) => {
      dispatch(setApp({user: u}));
    },
    [dispatch],
  );

  return {updateUser, dispatch, user};
};

export default useUser;
