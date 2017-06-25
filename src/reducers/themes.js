/*
highlights: [OwnBubble, ForeignBubble, Status],
text: [,,ForeignAuthor,]
 */

const INITIAL_STATE = {
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
  }
}

const themes = (state = INITIAL_STATE, action) => state;

export default themes;
