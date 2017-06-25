import { SET_THEME } from '../actions/themes';

/*
highlights: [OwnBubble, ForeignBubble, Status],
text: [,,ForeignAuthor,]
 */

const THEMES = {
  default: {
    Author: {
      color: '#56acc9'
    },
    ChatView: {
      background: '#fff',
      fontFamily: '"Helvetica Neue", Arial, Verdana, sans-serif'
    },
    TextBubble: {
      color: '#000'
    },
    OwnBubble: {
      backgroundColor: '#70d6ff'
    },
    ForeignBubble: {
      backgroundColor: '#ededed',
      boxShadow: 'none'
    },
    ConversationView: {
      background: '#fff'
    },
    Header: {
      background: '#fff',
      borderBottom: '1px solid #ededed',
      color: '#000'
    },
    Status: {
      color: '#70d6ff'
    },
    Time: {
      color: '#999'
    },
    TextInput: {
      background: '#fff',
      borderTop: '1px solid #ededed'
    },
    ImageSelectLogo: {
      color: '#999',
      hover: {
        color: '#56acc9'
      }
    },
    ImageBubble: {
      boxShadow: 'none'
    },
    TextView: {
      backgroundColor: '#fff',
      borderTop: '1px solid #ededed'
    },
    TextInputArea: {
      border: '1px solid #ededed',
      placeholder: {
        color: '#b2b2b2'
      },
      hover: {
        border: '1px solid #ededed'
      },
      focus: {
        border: '1px solid #ededed'
      }
    },
    TextSubmitButton: {
      backgroundColor: '#70d6ff',
      hover: {
        backgroundColor: '#56acc9'
      }
    },
    dimensions: {
      height: '480px',
      width: '420px'
    }
  }
};

THEMES.classic = Object.assign({}, THEMES.default, {
  Header: {
    background: '#ededed',
    borderBottom: '1px solid #ededed',
    color: '#000'
  },
  ForeignBubble: {
    backgroundColor: '#e9ff70',
    boxShadow: '-1px 1px 0px #999'
  },
  Author: {
    color: '#8c9943'
  },
  TextInput: {
    background: '#ededed',
    borderTop: '1px solid #ededed'
  },
  TextInputArea: {
    border: '1px solid #b2b2b2',
    placeholder: {
      color: '#b2b2b2'
    },
    hover: {
      border: '1px solid #b2b2b2'
    },
    focus: {
      border: '1px solid #70d6ff'
    }
  },
  TextView: {
    backgroundColor: '#ededed',
    borderTop: '1px solid #ededed'
  }
});

THEMES.green = Object.assign({}, THEMES.classic, {
  Status: {
    color: '#25827e'
  },
  ForeignBubble: {
    backgroundColor: '#71f79f'
  },
  OwnBubble: {
    backgroundColor: '#3dd6d0'
  },
  Author: {
    color: '#25827e'
  },
  ImageSelectLogo: {
    color: '#999',
    hover: {
      color: '#56acc9'
    }
  },
  TextSubmitButton: {
    backgroundColor: '#25827e',
    hover: {
      backgroundColor: '#25827e'
    }
  }
});

THEMES.nature = Object.assign({}, THEMES.green, {
  ConversationView: {
    background: 'url("https://4.bp.blogspot.com/-esCc74oyDlg/WQd1e6ZjbgI/AAAAAAACLRo/EfzA4-DQNq03hKYHLUX-AO2dP-7KI9KXQCPcB/s0/Natural_Landscape_Alberta_Canada_img.jpg")',
    backgroundSize: 'cover'
  },
  ImageBubble: {
    boxShadow: '0px 0px 5px black'
  }
});

THEMES.blue = Object.assign({}, THEMES.default, {
  ConversationView: {
    background: 'url("https://s-media-cache-ak0.pinimg.com/736x/a6/22/50/a62250e0b8576e94f8082cde346ad8a7--blue-iphone-wallpaper-colorful-wallpaper.jpg")',
    backgroundSize: 'cover'
  },
  ImageBubble: {
    boxShadow: '0px 0px 5px black'
  },
  Header: {
    background: '#c4dfef',
    borderBottom: '1px solid transparent',
    color: '#000'
  },
  Status: {
    color: '#059dfc'
  },
  TextView: {
    backgroundColor: '#c4dfef',
    borderTop: '1px solid transparent'
  }
});

const themes = (state = THEMES, action) => {
  if (action.type === SET_THEME) {
    return { current: THEMES[action.name] || THEMES.green };
  } else {
    return state;
  }
};

export default themes;
