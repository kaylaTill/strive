import React from 'react';
import ReactDOM from 'react-dom';
// import UserHomePage from './userHomepage.js';
import RootHome from './rootHome.js';


ReactDOM.render(
    <div><RootHome/></div>,
    document.getElementById('app')
);

module.hot.accept();