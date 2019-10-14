import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';

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
    font-family: OCR A Std, monospace;  
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

const NavBar = ((props) => {
    return (
        <div>
            <Router>
                <Nav>
                    <NavLeft>Strive</NavLeft>
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
            </Router>
        </div>
    );
})


export default NavBar;