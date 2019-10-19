import React from 'react';
import ReactDOM from 'react-dom';
import RootHome from './rootHome.js';
import axios from 'axios';
import UserHomePage from './userHomepage';

const loggedIn = (() => {
    axios.get('/loggedIn')
    .then((response) => {
        ReactDOM.render(
            <UserHomePage />,
            document.getElementById('app')
        )
    })
    .catch((err) => {
        ReactDOM.render(
            <RootHome />,
            document.getElementById('app')
        );
    })
});

loggedIn();







module.hot.accept();