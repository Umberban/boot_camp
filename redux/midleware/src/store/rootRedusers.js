import { combineReducers } from 'redux';
import todosReducer from '../pages/TodosPage/todosReducer';
import cartReducer from '../components/Cart/cartReducer';

const rootReduser = combineReducers({
  todos: todosReducer,
  cart: cartReducer,
});

export default rootReduser;
