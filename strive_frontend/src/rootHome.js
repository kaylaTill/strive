import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
const Register = (React.lazy(() => import('./register.js')));
const Login = (React.lazy(() => import('./login.js')));
const AboutPage = (React.lazy(() => import('./about.js')));
const UserHomePage = (React.lazy(() => import('./userHomepage.js')));
const RegisterSuccess = (React.lazy(() => import('./registrationSuccess.js')));
const RegisterFailure = (React.lazy(() => import('./registrationFailed.js')));
const LoginFailure = (React.lazy(() => import('./loginFailed.js')));

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
        this.state = {
            redirectSuccess: false,
            redirectFailure: false,
            sessionOpen: false,
            loginFailed: false
        }

        this.handleRegister = this.handleRegister.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.loggedIn = this.loggedIn.bind(this);
    }


    componentDidMount() {
        this.loggedIn();
    }


    handleRegister(email, first_name, last_name, username, password) {
        axios.post('/register', {
            email: email,
            first_name: first_name,
            last_name: last_name,
            username: username,
            password: password,
        })
            .then((response) => {
                if (response.status == 200) {
                    console.log(response.data);
                    this.setState({
                        redirectSuccess: true,
                        redirectFailure: false,
                        sessionOpen: true
                    })
                } 
            })
            .catch((error) => {
                this.setState({
                    redirectSuccess: false,
                    redirectFailure: true
                })
            });
    }


    loggedIn() {
        axios.get('/dashboard')
            .then((response) => {
                if (response.status === 200) {
                    console.log('Login set by dashboard!');
                    this.setState({
                        sessionOpen: true
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    handleLogin(username, password) {
        axios.post('/login', {
            username: username,
            password: password
        })
        .then(() => {
            this.loggedIn();
        })
        .catch((error) => {
            this.setState({
                loginFailed: true
            })
        });
    }


    handleLogout() {
        axios.get('/logout')
            .then(() => {
                this.setState({
                    sessionOpen: false
                })
                console.log('byebye, session destroyed by logout');
            })
            .catch((err) => {
                console.log(err);
            });
    }


    render() {
        const { redirectSuccess } = this.state;
        const { redirectFailure } = this.state;
        const { sessionOpen } = this.state;
        const { loginFailed } = this.state;
        return (
            <Router>
                {/* REACT ROUTES */}
                <Suspense fallback={<div></div>}>
                {sessionOpen ? <Redirect to={'/home'} />:
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
                    </Nav>}

                    <Switch>
                        {/* HOME PAGE AND LOGOUT */}
                        <Route exact={true} path={'/'}>
                            <Center>"Not your average to-do list"</Center>
                        </Route>

                        {/* ABOUT  */}
                        <Route exact={true} path={'/about'}>
                            <AboutPage />
                        </Route>

                        {/* REGISTER AND LOG INCONFIRMATION */}
                        <Route exact={true} path={'/registrationSuccess'}>
                            <RegisterSuccess />
                        </Route>
                        <Route exact={true} path={'/registrationFailure'}>
                            <RegisterFailure />
                        </Route>
                        <Route exact={true} path={'/failedLogin'}>
                            <LoginFailure/>
                        </Route>


                        {/* REGISTER */}
                        <Route exact={true} path={'/register'}>
                            <Register handleRegister={this.handleRegister} />
                            {(redirectSuccess && !redirectFailure) && (<Redirect to={'/registrationSuccess'} />)}
                            {(!redirectSuccess && redirectFailure) && (<Redirect to={'/registrationFailure'} />)}
                        </Route>

                        {/* LOGIN */}
                        <Route exact={true} path={'/login'}>
                            <Login handleLogin={this.handleLogin} />
                            {sessionOpen && (<Redirect to={'/home'} />)}
                            {loginFailed && (<Redirect to={'/failedLogin'} />)}
                        </Route>
                        
                        {/* USER HOMPAGE */}
                        <Route exact={true} path={'/home'}>
                            {sessionOpen ? <UserHomePage logout={this.handleLogout} sessionStatus={this.state.sessionOpen} /> : (<Redirect to={'/'} />)}
                        </Route>
                    </Switch>
                </Suspense>
            </Router>

        );
    }
    
}

export default RootHome;