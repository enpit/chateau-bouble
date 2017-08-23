import React, { Component } from 'react';
import styles from './assets/font-awesome/css/font-awesome.min.css';

import ChatView from './components/ChatView';

import Themes from './themes';

const ChateauBuble = (props) => {
    const theme = Themes[props.themeKey || 'chateauBuble'];

    return (
        <ChatView {...props} theme={theme} />
    );
}


export default ChateauBuble;
