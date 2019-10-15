import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const RegisterSucces = (props) => {
    return (
        <div>
            <div>
                Registration Complete!
            </div>
            <Link to={'/homeProfile'}>
                <Button variant="outline-secondary">
                    View your Page
                </Button>
            </Link>
        </div>
    );

};


export default RegisterSucces;