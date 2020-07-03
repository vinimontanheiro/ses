import {handleActions} from 'redux-actions';
import {SET_APP, RESET_APP_STORE} from '../actions';

const initialState = {
  loading: false,
};

const App = handleActions(
  {
    [RESET_APP_STORE]: () => initialState,
    [SET_APP]: (state, {payload}) => ({
      ...state,
      ...payload,
    }),
  },
  initialState,
);

export default App;
