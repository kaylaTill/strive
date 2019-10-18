import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch, Redirect, useParams, useRouteMatch} from 'react-router-dom';
import axios from 'axios';
const PrivateNav = (React.lazy(() => import('./privateNav.js')));
const Objectives = (React.lazy(() => import('./objectives.js')));
const NewObjective = (React.lazy(() => import('./newObj.js')));
import { createBrowserHistory } from 'history';

const Center = styled.h1`
    width: 1000px; 
    margin: auto 0;
    padding: 60px;
    align: center;
    text-align: center;
    font-size: 40px;
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
    width: 7%;
    text-align: left;
    color: rgba(0, 0, 0, 1);
    font-family: OCR A Std, monospace; 
    text-decoration: none; 
`;

const NavRight = styled.div`
    width: 70%;
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
    text-align: right; 
    font-size: 15px;
    font-family: OCR A Std, monospace;
`;

class UserHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote_author: "",
            quote_text: "",
            sessionStatus: true
        }
        this.handleLogout = this.handleLogout.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

   componentDidMount() {
       axios.get('/loggedIn')
       .then((res) => {
           this.setState({
               sessionStatus: true
            })
        })
        .catch(() => {
            this.setState({
                sessionStatus: false
            })
        });

        axios.get('/quote')
            .then(({ data }) => {
                this.setState({
                    quote_text: data.quote_text,
                    quote_author: data.quote_author
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }
        
        handleLogout() {
            axios.get('/logout')
            .then(() => {
                window.location.reload(false)
            })
            .catch((err) => {
                console.log(err);
            });
        }


    handleSubmit(name, timeSpan, keyResult1, keyResult2, keyResult3, keyResult4, keyResult5) {

        axios.post('/addObjective', {
            name: name,
            timeSpan: timeSpan,
            keyResult1: keyResult1,
            keyResult2: keyResult2,
            keyResult3: keyResult3,
            keyResult4: keyResult4,
            keyResult5: keyResult5
        })
            .then((response) => {
                console.log(response);
                    
            })
            .catch((error) => {
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
                        <Link to={'/objectives'}>
                            <NavItem > Objectives </NavItem>
                        </Link>
                        <NavItem>|</NavItem>

                        <Link to={'/keyResults'}>
                            <NavItem> Key Results </NavItem>
                        </Link>
                        <NavItem>|</NavItem>

                        <Link to={'/progress'}>
                            <NavItem> Progress </NavItem>
                        </Link>
                        <NavItem>|</NavItem>
                        <Link to={'/'}>
                            <NavItem onClick={this.handleLogout}> Logout</NavItem>
                        </Link>
                    </NavRight>
                </Nav>

                <Suspense fallback={<div></div>}>
                    <Switch>

                        {/* HOME */}
                        <Route exact={true} path={'/'}>
                            <Center>
                                <div>{`${this.state.quote_text}`}</div>
                                <br></br>
                                <div>{`- ${this.state.quote_author}`}</div>
                            </Center>
                        </Route>
                        {/* REDIRECTS ON LOGIN AND REGISTER */}
                        <Route exact={true} path={'/login'}>
                            <Center>
                                <div>{`${this.state.quote_text}`}</div>
                                <br></br>
                                <div>{`- ${this.state.quote_author}`}</div>
                            </Center>
                        </Route>
                        <Route exact={true} path={'/register'}>
                            <Center>
                                <div>{`${this.state.quote_text}`}</div>
                                <br></br>
                                <div>{`- ${this.state.quote_author}`}</div>
                            </Center>
                        </Route>

                        <Route path={'/objectives'}>
                            <Objectives/>
                        </Route>

                        <Route path={'/newObjective'}>
                            <NewObjective handleSubmit={this.handleSubmit}/>
                        </Route>
                    </Switch>
                </Suspense>  
            </Router>             
        );
    }
}

export default UserHomePage;