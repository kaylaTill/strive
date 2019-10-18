import React, { Suspense, createRef} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Container = styled.div`
    width: 1150px;
    height: 400px;
`;
const hoverLink = styled.a`
    :hover {
		color: #202020;
	}
`

const Objectives = ((props) => {
    const limitedObjectives = props.objectives.slice(0, 3);
    return (
        <div>
            <Container>
                {limitedObjectives.map((obj) =>(
                    <div>
                        <Card variant="outline-dark" style={{ width: '20rem', height: '20rem', float: 'left', marginRight: '3rem', overflowX: ' hidden'}}>
                            <Card.Body style={{ color: '#000000', fontFamily: 'OCR A Std, monospace', textAlign: 'center'}}>
                                <Card.Title>{obj.name}</Card.Title>
                                <Card.Text>{obj.description}</Card.Text>
                                <Card.Link href="/keyResults" style={{color: '#000000'}}>Key Results</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Container>
            <br></br>
            {/* <Link to={'/newObjective'}> */}
            <Button href={'/newObjective'} variant="outline-dark" size="lg" block 
                style={{width: '60rem', bottom: '0px',position: 'relative', left: '6rem', }}>
                New Objective
            </Button>
            <Button href={'/moreObjectives'} variant="outline-dark" size="lg" block 
                style={{width: '60rem', bottom: '0px',position: 'relative', left: '6rem', }}>
                More Objectives
            </Button>
        </div>
    )
});


    
export default Objectives;


