import React from 'react';
import ReactDOM from 'react-dom';
import UserHomePage from './userHomepage.js';


ReactDOM.render(
    <div><UserHomePage/></div>,
    document.getElementById('app')
);

module.hot.accept();