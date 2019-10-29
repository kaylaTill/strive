import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Container = styled.div`
    width: 1150px;
    height: 400px;
    position: relative;
    left: 3rem;
`;

const MoreObjectives = ((props) => {
    const allObjectives = props.objectives;
    return (
        <div>
            <Container>
                {allObjectives.map((obj) => (
                    <div>
                        <Card variant="outline-dark" style={{ width: '20rem', 
                            height: '20rem', float: 'left', 
                            marginTop: '3rem', 
                            marginRight: '3rem'}}>
                            <Card.Body style={{ color: '#000000', fontFamily: 'OCR A Std, monospace', textAlign: 'center' }}>
                                <Card.Title>{obj.name}</Card.Title>
                                <Card.Text>{obj.description}</Card.Text>
                                <Card.Link href="/keyResults" style={{ color: '#000000' }}>Key Results</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Container>

        </div>
    );
});

export default MoreObjectives;