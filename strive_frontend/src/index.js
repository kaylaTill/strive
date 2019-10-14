import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home.js';


ReactDOM.render(
    <div><Home/></div>,
    document.getElementById('app')
);

module.hot.accept();