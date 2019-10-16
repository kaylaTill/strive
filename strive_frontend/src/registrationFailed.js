import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


const StyledRes = styled.div`
    font-size: 15px;
    font-family: OCR A Std, monospace;
    padding: 60px;
    align: center;
    text-align: center;
`;

const RegisterFailure = (props) => {
    return (
        <StyledRes>
            <div>
                Uh Oh, looks like you already have an accout, try loggining in!
            </div>
            <Link to={'/'}>
                <Button variant="outline-secondary">
                    Back to Home
                </Button>
            </Link>
        </StyledRes>
    );
};

export default RegisterFailure;