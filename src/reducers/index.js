import { combineReducers } from 'redux';

import interaction from './interaction';
import messages from './messages';

const createReducers = () =>
  combineReducers({
    interaction,
    messages
});

export default createReducers;
