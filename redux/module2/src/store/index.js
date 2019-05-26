import { createStore } from 'redux';
import rootReducers from './rootRedusers';

const Store = createStore(rootReducers);

export default Store;
