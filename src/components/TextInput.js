import React from 'react';

const TextInput = ({onSubmit}) => (
  <div className="text-view">
    <input type="text" />
    <button onClick={() => onSubmit('Hello world')}>></button>
  </div>
);

export default TextInput;
