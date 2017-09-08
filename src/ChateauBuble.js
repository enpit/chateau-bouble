import React from 'react';

import ChatView from './components/ChatView';
import Themes from './themes';

const ChateauBuble = (props) => {
    const theme = Themes[props.themeKey || 'chateauBuble'];

    return (
        <ChatView {...props} theme={theme} />
    );
}


export default ChateauBuble;
