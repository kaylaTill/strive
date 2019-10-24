import React, { Suspense, createRef} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Container = styled.div`
    width: 1150px;
    height: 430px;
    position: relative;
    left: 3rem;
`;

const Objectives = ((props) => {
    const limitedObjectives = props.objectives.slice(0, 3);
    return (
        <div>
            <Container>
                {limitedObjectives.map((obj) =>(
                    <div>
                        <Card variant="outline-dark" 
                            style={{ width: '20rem', height: '20rem', float: 'left', marginRight: '3rem'}}>
                            <Card.Body style={{ color: '#000000', fontFamily: 'OCR A Std, monospace', textAlign: 'center'}}>
                                <Card.Title>{obj.name}</Card.Title>
                                <Card.Text>{obj.description}</Card.Text>
                                <Card.Link href={'/keyResults'}style={{color: '#000000'}}>Key Results</Card.Link>
                                <br></br>
                                <Card.Link href={'/progress'}style={{color: '#000000'}}>Progress</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Container>
            <Button href={'/newObjective'} variant="outline-dark" size="lg" block 
                style={{width: '60rem', position: 'relative', left: '6rem'}}>
                New Objective
            </Button>
            <Button href={'/moreObjectives'} variant="outline-dark" size="lg" block 
                style={{width: '60rem', position: 'relative', left: '6rem', marginBottom: '3rem' }}>
                Show All Objectives
            </Button>       
        </div>
    )
});


    
export default Objectives;


