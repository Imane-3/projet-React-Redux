import { legacy_createStore } from 'redux';
import particleReducer from './reduces';

const store = legacy_createStore(particleReducer);

export default store;
