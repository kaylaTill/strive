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

const RegisterSuccess = (props) => {
    return (
        <StyledRes>
            <div>
                Registration Complete!
            </div>
            <Link to={'/home'}>
                <Button variant="outline-secondary">
                    View your Page
                </Button>
            </Link>
        </StyledRes>
    );

};


export default RegisterSuccess;