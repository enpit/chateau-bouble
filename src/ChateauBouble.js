import React from 'react';

import ChatView from './components/ChatView';
import Themes from './themes';

const ChateauBouble = (props) => {
    const theme = Themes[props.themeKey || 'chateauBouble'];

    return (
        <ChatView {...props} theme={theme} />
    );
}


export default ChateauBouble;
