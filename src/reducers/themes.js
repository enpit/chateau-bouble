const INITIAL_STATE = {
  current: {
    color: 'black',
    backgrounds: ['#fff', '#ededed'],
    text: ['#000', '#b2b2b2'],
    highlights: ['#70d6ff', '#e9ff70']
  }
}

const themes = (state = INITIAL_STATE, action) => state;

export default themes;
