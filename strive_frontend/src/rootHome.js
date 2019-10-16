import React, { Suspense } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
const Register = (React.lazy(() => import('./register.js')));
const Login = (React.lazy(() => import('./login.js')));
const AboutPage = (React.lazy(() => import('./about.js')));
const UserHomePage = (React.lazy(() => import('./userHomepage.js')));
const RegisterSuccess = (React.lazy(() => import('./registrationSuccess.js')));
const RegisterFailure = (React.lazy(() => import('./registrationFailed.js')));
const LoginFailure = (React.lazy(() => import('./loginFailed.js')));
const PublicNav = (React.lazy(() => import('./publicNav.js')));
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
        this.handleLogout = this.handleLogout.bind(this);
    }


    componentDidMount() {
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

    handleLogin(username, password) {
        axios.post('/login', {
            username: username,
            password: password
        })
        .then(() => {
            this.setState({
                sessionOpen: true
            })
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
                console.log('byebye, session destroyed by logout.');
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
                    {!sessionOpen ? 
                        // USER NOT LOGGED IN => ROUTES FOR PUBLIC PAGE
                        <Switch>
                            {/* HOME PAGE AND LOGOUT  */}
                            <Route exact={true} path={'/'}>
                                <PublicNav/>
                                <Center>"Not your average to-do list"</Center>
                            </Route>

                            {/* ABOUT  */}
                            <Route exact={true} path={'/about'}>
                               <PublicNav/>
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
                                <LoginFailure />
                            </Route>


                            {/* REGISTER */}
                            <Route exact={true} path={'/register'}>
                               <PublicNav/>
                                <Register handleRegister={this.handleRegister} />
                                {(redirectSuccess && !redirectFailure) && (<Redirect to={'/registrationSuccess'} />)}
                                {(!redirectSuccess && redirectFailure) && (<Redirect to={'/registrationFailure'} />)}
                            </Route>

                            {/* LOGIN */}
                            <Route exact={true} path={'/login'}>
                                <PublicNav/>
                                <Login handleLogin={this.handleLogin} />
                                {loginFailed && (<Redirect to={'/failedLogin'} />)}
                            </Route> 
                        </Switch> 
                            :  <Redirect to={'/home'}/>}

                        {/* HOME PAGE */}
                        <Switch>
                            <Route path={'/home'}>
                                <UserHomePage logout={this.handleLogout} sessionStatus={this.state.sessionOpen} />
                            </Route>
                        </Switch>
                </Suspense>
            </Router>
        );
    }
    
}

export default RootHome;