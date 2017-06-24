import React from 'react';
import { Provider } from 'react-redux';
import interaction from '../reducers/interaction';
import { createStore } from 'redux';

const Bubble = function ({author, text, time}) {
    return (
      <Provider store={createStore(interaction)}>
          <div className="bubblewrap">
            <span className="time">{time}</span>
              <div className="bubble">
                <span className="author">{author}</span>
                <span className="text">{text}</span>
              </div>
          </div>
        </Provider>
    );
};

export default Bubble;
