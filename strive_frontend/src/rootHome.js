import React, { Suspense } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
const Register = (React.lazy(() => import('./registration/register.js')));
const Login = (React.lazy(() => import('./publicPages/login.js')));
const AboutPage = (React.lazy(() => import('./publicPages/about.js')));
const RegisterSuccess = (React.lazy(() => import('./registration/registrationSuccess.js')));
const RegisterFailure = (React.lazy(() => import('./registration/registrationFailed.js')));
const LoginFailure = (React.lazy(() => import('./publicPages/loginFailed.js')));
const PublicNav = (React.lazy(() => import('./publicPages/publicNav.js')));
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
        this.state = {
            redirectSuccess: false,
            redirectFailure: false,
            sessionOpen: false,
            loginFailed: false,
        }

        this.handleRegister = this.handleRegister.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }



    handleRegister(email, first_name, last_name, username, password) {
        axios.post('/register', {
            email: email,
            first_name: first_name,
            last_name: last_name,
            username: username,
            password: password,
        })
            .then(() => {
                window.location.reload(false)
            })
            .catch((error) => {
                this.setState({
                    redirectSuccess: false,
                    redirectFailure: true
                })
            });
    }

    handleLogin(username, password) {
        axios.post('/login', {
            username: username,
            password: password
        })
        .then(() => {
            window.location.reload(false);
        })
        .catch((error) => {
            this.setState({
                loginFailed: true
            })
        });
    }


    render() {
        const { redirectSuccess } = this.state;
        const { redirectFailure } = this.state;
        const { loginFailed } = this.state;
        return (
            <Router>
                <Suspense fallback={<div></div>}>
                     <Switch>
                        <Route exact={true} path={'/'}>
                            <PublicNav />
                            <Center>"Not your average to-do list"</Center>
                        </Route>

                        
                        <Route exact={true} path={'/about'}>
                            <PublicNav />
                            <AboutPage />
                        </Route>

                        
                        <Route exact={true} path={'/registrationSuccess'}>
                            <RegisterSuccess />
                        </Route>
                        <Route exact={true} path={'/registrationFailure'}>
                            <RegisterFailure />
                        </Route>
                        <Route exact={true} path={'/failedLogin'}>
                            <LoginFailure />
                        </Route>

            
                        <Route exact={true} path={'/register'}>
                            <PublicNav />
                            <Register handleRegister={this.handleRegister} />
                            {(redirectSuccess && !redirectFailure) && (<Redirect to={'/registrationSuccess'} />)}
                            {(!redirectSuccess && redirectFailure) && (<Redirect to={'/registrationFailure'} />)}
                        </Route>

        
                        <Route exact={true} path={'/login'}>
                            <PublicNav />
                            <Login handleLogin={this.handleLogin} />
                            {loginFailed && (<Redirect to={'/failedLogin'} />)}
                        </Route>
                    </Switch>
                </Suspense>
            </Router>
        );
    }
    
}

export default RootHome;