import React, { useState } from 'react';
import NavBar from './navbar.js';
import styled from 'styled-components';

const Center = styled.h1`
    width: 1000px; 
    margin: auto 0;
    padding: 60px;
    align: center;
    text-align: center;
    font-size: 50px;
    font-family: OCR A Std, monospace;
`;


const RootHome = ((props) => {
    return (
        <div>
            <NavBar/>
            <Center>"Not your average to-do list"</Center> 
        </div>
    );
})

export default RootHome;