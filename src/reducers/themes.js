const INITIAL_STATE = {
  current: {
    backgrounds: ['#fff', '#ededed'],
    text: ['#000', '#b2b2b2', '#8c9943', '#999'],
    highlights: ['#70d6ff', '#e9ff70', '#56acc9'],
    dimensions: {
      height: '480px',
      width: '420px'
    }
  }
}

const themes = (state = INITIAL_STATE, action) => state;

export default themes;
