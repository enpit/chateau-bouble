import React, { Component } from 'react';

const Bubble = function ({author, text}) {
    return (
        <div>
            <span>{author}:</span> <span>{text}</span>
        </div>
    );
};

export default Bubble;
