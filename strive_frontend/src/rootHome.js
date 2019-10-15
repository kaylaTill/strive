import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
const Register = (React.lazy(() => import('./register.js')));
const Login = (React.lazy(() => import('./login.js')));
const AboutPage = (React.lazy(() => import('./about.js')));
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

 

const RegisterSucces = (props) => {
    return (
        <div>
            <div>
                Registration Complete!
            </div>
            <Link to={'/homeProfile'}>
                <Button variant="outline-secondary">
                    View your Page
                </Button>
            </Link>
        </div>
    );
    
};

const RegisterFailure = (props) => {
    return(
        <div>
            <div>
                Uh Oh, looks like you already have an accout, try logining in!
            </div>
            <Link to={'/'}>
                <Button variant="outline-secondary">
                    Back to Home
                </Button>
            </Link>
        </div>
    );
};




class RootHome extends React.Component {
    constructor(props) {
        super(props);
            // save state => session
            // login 
            // password

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
            .then(function (response) {
                if (typeof(response.data) === 'string') {
                    console.log(response.data);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    handleLogin(username, password) {
        // axios post call => /login 
        axios.post('/login', {
            username: username,
            password: password
        })
        .then((response) => {
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

                {/* REACT ROUTES */}
                <Suspense fallback={<div> </div>}>
                    <Switch>
                        {/* HOME PAGE && LOG OUT  */}
                        <Route exact={true} path={'/'}>
                            <Center>"Not your average to-do list"</Center>
                        </Route>


                        {/* ABOUT  */}
                        <Route exact={true} path={'/about'}>
                            <AboutPage/>
                        </Route>

                        {/* REGISTER */}
                        <Route exact={true} path={'/register'}>
                            <Register handleRegister={this.handleRegister}/>
                        </Route>

                        {/* REGISTER CONFIRMATION */}
                

                        {/* LOGIN */}
                        <Route exact={true} path={'/login'}>
                            <Login handleLogin={this.handleLogin}/>
                        </Route>
                    </Switch>
                </Suspense>
            </Router>
        );
    }
    
}

export default RootHome;