import { createStore } from 'redux'
import createReducers from './reducers'

const store = createStore(createReducers());

export default store;
