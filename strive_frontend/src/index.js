import React from 'react';
import ReactDOM from 'react-dom';
import RootHome from './rootHome.js';
import { BrowserRouter as Router, Link } from 'react-router-dom';


ReactDOM.render(
    <RootHome />,
    document.getElementById('app')
);

module.hot.accept();