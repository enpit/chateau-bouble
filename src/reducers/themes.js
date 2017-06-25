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
      background: '#fff'
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
    background: '#ededed'
  },
  ForeignBubble: {
    backgroundColor: '#e9ff70',
    boxShadow: '-1px 1px 0px #999'
  },
  Author: {
    color: '#8c9943'
  },
  TextInput: {
    background: '#ededed'
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
      backgroundColor: '#ededed'
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

const themes = (state = THEMES, action) => {
  if (action.type === SET_THEME) {
    return { current: THEMES[action.name] || THEMES.green };
  } else {
    return state;
  }
};

export default themes;
