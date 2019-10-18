import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Button, Card } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Container = styled.div`
    width: 1150px;
    height: 400px;
`;

const MoreObjectives = ((props) => {
    const allObjectives = props.objectives;
    return (
        <Container>
            {allObjectives.map((obj) => (
                <div>
                    <Card variant="outline-dark" style={{ width: '20rem', height: '20rem', float: 'left', marginRight: '3rem', overflowX: ' hidden' }}>
                        <Card.Body style={{ color: '#000000', fontFamily: 'OCR A Std, monospace', textAlign: 'center' }}>
                            <Card.Title>{obj.name}</Card.Title>
                            <Card.Text>{obj.description}</Card.Text>
                            <Card.Link href="/keyResults" style={{ color: '#000000' }}>Key Results</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </Container>
    );
});

export default MoreObjectives;