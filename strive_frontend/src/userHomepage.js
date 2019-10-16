import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
const Objectives = (React.lazy(() => import('./objectives.js')));
const PrivateNav = (React.lazy(() => import('./privateNav.js')));


const Center = styled.h1`
    width: 1000px; 
    margin: auto 0;
    padding: 60px;
    align: center;
    text-align: center;
    font-size: 40px;
    font-family: OCR A Std, monospace;
`;

const NavItem = styled.div`
    color: rgba(0, 0, 0, 1);
    float: left;
    padding: 12px;
    text-decoration: none;
    text-align: right; 
    font-size: 15px;
    font-family: OCR A Std, monospace;
    position: relative;
    left: 45%;
    svg {
        margin-right: 50px;
    }
`;


class UserHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote_author: "",
            quote_text: "",
            sessionStatus: this.props.sessionStatus
        }
        this.handleClick = this.handleClick.bind(this);
    }

   componentDidMount() {
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

    handleClick() {
        this.props.logout();
    }
    
    render() {
        return (
            <Router>
                <Suspense fallback={<div></div>}>
                    {/* DYNAMIC DASHBOARD ROUTES */}
                    <Switch>
                        {/* DASHBOARD */}
                        <Route exact={'true'} path={'/home'}>
                            <PrivateNav/>
                            <Link to={'/'}>
                                <NavItem onClick={this.handleClick}> Logout</NavItem>
                            </Link>
                            <Center>
                                <div>{`${this.state.quote_text}`}</div>
                                <br></br>
                                <div>{`- ${this.state.quote_author}`}</div>
                            </Center>
                        </Route>


                        {/* OBJECTIVES */}
                        <Route exact={true} path={'/objectives'}>
                            <PrivateNav />
                            <Link to={'/'}>
                                <NavItem onClick={this.handleClick}> Logout</NavItem>
                            </Link>
                            <Objectives/>
                        </Route>
                    </Switch>
                </Suspense>               
            </Router>
        );
    }
}

export default UserHomePage;