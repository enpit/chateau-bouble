import { SET_THEME } from '../actions/themes';

/*
highlights: [OwnBubble, ForeignBubble, Status],
text: [,,ForeignAuthor,]
 */
const THEMES = {
  current: {
    backgrounds: ['#fff', '#ededed'],
    text: ['#000', '#b2b2b2', '#8c9943', '#999'],
    highlights: ['#70d6ff', '#e9ff70', '#56acc9'],
    dimensions: {
      height: '480px',
      width: '420px'
    }
  },
  green: {
    backgrounds: ['#fff', '#ededed'],
    text: ['#000', '#b2b2b2', '#25827e', '#999'],
    highlights: ['#71f79f', '#3dd6d0', '#3dd6d0'],
    dimensions: {
      height: '480px',
      width: '420px'
    }
  },
  chateauBuble: {
    backgrounds: ['#fff', '#ededed'],
    text: ['#000', '#b2b2b2', '#8c9943', '#999'],
    highlights: ['#70d6ff', '#e9ff70', '#56acc9'],
    dimensions: {
      height: '480px',
      width: '420px'
    }
  }
}

const themes = (state = THEMES, action) => {
  if (action.type === SET_THEME) {
    return { current: THEMES[action.name] || THEMES.chateauBuble };
  } else {
    return state;
  }
};

export default themes;
