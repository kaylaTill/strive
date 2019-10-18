import React, { Suspense, createRef} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch, Redirect, useParams, useRouteMatch  } from 'react-router-dom';
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


class Objectives extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // name: '',
            // timeSpan: '',
            // description: '',
            // keyResult1: '',
            // keyResult2: '',
            // keyResult3: '',
            // keyResult4: '',
            // keyResult5: ''
            objectives: [],
            isVisible: false
        }
    }

    componentDidMount() {
        axios.get('/getUserObjectives')
        .then(({data}) => {
            this.setState({
                objectives: data
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }



    


    render() {
        const limitedObjectives = this.state.objectives.slice(0, 3);
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
                {/* </Link> */}
            </div>
        );

    }

}

    
export default Objectives;


