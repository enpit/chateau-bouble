import { combineReducers } from 'redux';

import interaction from './interaction';
import messages from './messages';

const rootReducer = combineReducers({
    interaction,
    messages
});

export default rootReducer;
