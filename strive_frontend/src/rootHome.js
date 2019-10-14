import React, { Suspense } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
// import NavBar from './navbar.js';
const Register = (React.lazy(() => import('./register.js')));

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

const Nav = styled.div`
    max-width: 1010px;
    padding: 26px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    background-color: #fff;
`;
const NavLeft = styled.div`
    width: 20%;
    text-align: left;
    color: rgba(0, 0, 0, 1);
    font-family: OCR A Std, monospace; 
    text-decoration: none; 
`;

const NavRight = styled.div`
    width: 50%;
    text-align: right;
    position: relative;
    left: 45%;
    svg {
        margin-right: 50px;
    }
`;
const NavItem = styled.div`
    color: rgba(0, 0, 0, 1);
    float: left;
    padding: 12px;
    text-decoration: none;
    text-align: right; 
    font-size: 15px;
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
                <Nav>
                    <NavLeft>
                        <Link to={'/'}>
                            <NavItem> Strive </NavItem>
                        </Link>
                    </NavLeft>

                    <NavRight>
                        <Link to={'/about'}>
                            <NavItem> About Strive </NavItem>
                        </Link>
                        <NavItem>|</NavItem>

                        <Link to={'/register'}>
                            <NavItem> Register </NavItem>
                        </Link>
                        <NavItem>|</NavItem>

                        <Link to={'/login'}>
                            <NavItem> Login </NavItem>
                        </Link>
                    </NavRight>
                </Nav>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact={true} path={'/'}>
                            <Center>"Not your average to-do list"</Center>
                        </Route>
                        <Route exact={true} path={'/register'}>
                            <Register handleRegister={this.handleRegister}/>
                        </Route>

                    </Switch>
                </Suspense>
            </Router>
        );
    }
    
}

export default RootHome;