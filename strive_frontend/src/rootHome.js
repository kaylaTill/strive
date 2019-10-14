import React, { useState } from 'react';
import NavBar from './navbar.js';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Register from './register.js'
import axios from 'axios';

const Center = styled.h1`
    width: 1000px; 
    margin: auto 0;
    padding: 60px;
    align: center;
    text-align: center;
    font-size: 50px;
    font-family: OCR A Std, monospace;
`;

class RootHome extends React.Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
    }


    handleRegister(email, first_name, last_name, username, password) {
        axios.post('/register', {
            email: email,
            first_name: first_name,
            last_name: last_name,
            username: username,
            password: password,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        return (
            <Router>
                <NavBar/>
                <Center>"Not your average to-do list"</Center>
                <Route path={'/register'} component={<Register handleRegister={this.handleRegister}/>}/>
                {/* <Register handleRegister={this.handleRegister}/> */}
            </Router>
        );
    }


}

export default RootHome;