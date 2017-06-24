import React from 'react';
import { Provider } from 'react-redux';
import interaction from '../reducers/interaction';
import { createStore } from 'redux';

const Bubble = function ({author, text}) {
    return (
      <Provider store={createStore(interaction)}>
          <div className="bubble">
              <span>{author}:</span> <span>{text}</span>
          </div>
        </Provider>
    );
};

export default Bubble;
