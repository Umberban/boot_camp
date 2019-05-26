import { combineReducers } from 'redux';
import todosReducer from '../pages/TodosPage/todosReducer';

const rootReduser = combineReducers({
  todos: todosReducer,
});

export default rootReduser;
