import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
const Objectives = (React.lazy(() => import('./objectives.js')));


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
    width: 97%;
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
    width: 700%;
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

class UserHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote_author: "",
            quote_text: ""
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
                <Nav>
                    <NavLeft>
                        <Link to={'/home'}>
                            <NavItem> Strive </NavItem>
                        </Link>
                    </NavLeft>

                    <NavRight>
                        <Link to={'/objectives'}>
                            <NavItem> Objectives </NavItem>
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
                            <NavItem onClick={this.handleClick}> Logout </NavItem>
                        </Link>

                    </NavRight>
                </Nav>


                <Suspense fallback={<div></div>}>
                    <Switch>
                        {/* USER HOMEPAGE ROUTES */}
                        <Route exact={true} path={'/home'}>
                            <Center>
                                <div>{`${this.state.quote_text}`}</div>
                                <br></br>
                                <div>{`- ${this.state.quote_author}`}</div>
                            </Center>
                        </Route>

                        {/* OBJECTIVES */}
                        <Route exact={true} path={'/objectives'}>
                            <Objectives/>
                        </Route>
                    </Switch>
                </Suspense>               
            </Router>
        );
    }
}

export default UserHomePage;