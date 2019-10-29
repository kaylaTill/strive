import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const StyledRes = styled.div`
    font-size: 15px;
    font-family: OCR A Std, monospace;
    padding: 60px;
    align: center;
    text-align: center;
`;

const LoginFailure = (props) => {
    return (
        <StyledRes>
            <div>
                Uh oh, we couldn't find an account under that username and password, 
                please try again or register a new account.
            </div>
            <Button variant="outline-secondary" onClick={(() => window.location.href = '/')}>
                Back To Home
            </Button>
            <Link to={'/register'}>
                <Button variant="outline-secondary">
                    Register Account
                </Button>
            </Link>
        </StyledRes>
    );
};

export default LoginFailure;