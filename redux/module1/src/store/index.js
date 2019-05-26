import { createStore } from 'redux';
import rootReduser from './rootReducer';

const Store = createStore(rootReduser);

export default Store;
