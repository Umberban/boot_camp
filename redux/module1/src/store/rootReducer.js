import { combineReducers } from 'redux';
import counterReducer from '../components/pages/HomePage/counterReducer';

const rootReduser = combineReducers({
  counter: counterReducer,
});

export default rootReduser;
