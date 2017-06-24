import React from 'react';

const TextInput = ({text, onSubmit, onUpdateMessage}) => (
  <div className="text-view">
    <input type="text"
      value={text}
      onChange={(event) => onUpdateMessage(event.target.value)}
      onKeyUp={(event) => {
        if (event.keyCode === 13) {
          onSubmit(text);
        }
      }}/>
    <button onClick={() => onSubmit(text)}>></button>
  </div>
);

export default TextInput;
