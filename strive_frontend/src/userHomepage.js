import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
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

class UserHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: {}
        }
    }

    componentDidMount() {
        axios.get('/quote')
            .then(({ data }) => {
                console.log(data);
                this.setState({
                    quote: {
                        quote_text: data.quote_text,
                        quote_author: data.quote_author
                    }
                })
            })
    }


    render() {
        return (
            <div>
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
                            <NavItem> Logout </NavItem>
                        </Link>
                    </NavRight>
                </Nav>

                <Center>
                    <div>{`${this.state.quote.quote_text}`}</div>
                    <br></br>
                    <div>{`- ${this.state.quote.quote_author}`}</div>
                </Center>
            </div>
        );
    }
}

export default UserHomePage;