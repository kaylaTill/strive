import React, { useState } from 'react';
import styled from 'styled-components';


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
const NavItem = styled.a`
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
            <Nav>
                <NavLeft>Strive</NavLeft>
                <NavRight>
                    <NavItem href="/about">About Strive</NavItem>
                    <NavItem>|</NavItem>
                    <NavItem href="/register">Register</NavItem>
                    <NavItem>|</NavItem>
                    <NavItem href="/login">Login</NavItem>
                </NavRight>
            </Nav>
        </div>
    );
})


export default NavBar;