import React from 'react';
import ReactDOM from 'react-dom';
import RootHome from './rootHome.js';


ReactDOM.render(
    <RootHome />,
    document.getElementById('app')
);

module.hot.accept();