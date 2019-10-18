import React, { Suspense, createRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Card, Button, ListGroup } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
    width: 1150px;
`;

const KeyResults = ((props) => {
    const objectives = props.objectives;
    return (
        <div>
            <Container>
                {objectives.map((obj) => (
                    <div>
                        <Card variant="outline-dark" style={{ height: '10rem', marginTop: '3rem' }}>
                            <Card.Body style={{ color: '#000000', fontFamily: 'OCR A Std, monospace', textAlign: 'center' }}>
                                <Card.Title>{obj.name}</Card.Title>
                                <Card.Text>{obj.description}</Card.Text>
                                <Card.Text>{obj.timeSpan}</Card.Text>
                            </Card.Body>
                        </Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{ color: '#000000', 
                            fontFamily: 'OCR A Std, monospace', 
                            marginTop: '3rem', 
                            textAlign: 'center' }}>Key Results</ListGroup.Item>
                            <ListGroup.Item>I. {obj.keyResult1}</ListGroup.Item>
                            <ListGroup.Item>II. {obj.keyResult2}</ListGroup.Item>
                            <ListGroup.Item>III. {obj.keyResult3}</ListGroup.Item>
                            <ListGroup.Item>IV. {obj.keyResult4}</ListGroup.Item>
                            <ListGroup.Item>V. {obj.keyResult5}</ListGroup.Item>
                        </ListGroup>
                    </div>
                ))}
            </Container>
        </div>
    )
});

export default KeyResults;