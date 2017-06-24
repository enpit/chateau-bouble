import { combineReducers } from 'redux';

import interaction from './interaction';
import messages from './messages';
import themes from './themes';

const rootReducer = combineReducers({
    interaction,
    messages,
    themes
});

export default rootReducer;
