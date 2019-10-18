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
                        <Card border="none" style={{ height: '10rem', marginTop: '3rem' }}>
                            <Card.Body style={{ color: '#000000', fontFamily: 'OCR A Std, monospace', textAlign: 'center' }}>
                                <Card.Title>{obj.name}</Card.Title>
                                <Card.Text>{obj.description}</Card.Text>
                                <Card.Text>{obj.timeSpan}</Card.Text>
                            </Card.Body>
                        </Card>

                        <div style={{
                            color: '#000000',
                            fontFamily: 'OCR A Std, monospace',
                            marginTop: '3rem',
                            textAlign: 'center',
                            fontSize: '20px'}}>Key Results</div>
                        <ListGroup border="dark" variant="flush">
                            <ListGroup.Item action border="dark" variant="light">I. {obj.keyResult1}</ListGroup.Item>
                            <ListGroup.Item action border="dark" variant="light">II. {obj.keyResult2}</ListGroup.Item>
                            <ListGroup.Item action border="dark" variant="light">III. {obj.keyResult3}</ListGroup.Item>
                            <ListGroup.Item action border="dark" variant="light">IV. {obj.keyResult4}</ListGroup.Item>
                            <ListGroup.Item action border="dark" variant="light">V. {obj.keyResult5}</ListGroup.Item>
                        </ListGroup>
                    </div>
                ))}
            </Container>
        </div>
    )
});

export default KeyResults;