import React, { Suspense, createRef} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch, Redirect, useParams, useRouteMatch  } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const StyledDiv = styled.div`
    height:40px; 
    width:200px; 
    position:relative;
    top:50%; 
    left: 40%;
    text-align: center;
    font-family: OCR A Std, monospace;
    border-style: solid;
    alignItems: 'center';
    paddingTop: 50px;
    color: black;
`

const Container = styled.div`
    width: 1150px;
    height: 400px;
`;
const Objective = styled.div`
    display: block;
    width: 30%;
    height: 40%;
    outline-style: solid;
    font-size: 20px;
`

const Description = styled.div`
    text-align: right; 
    font-size: 15px;
    font-family: OCR A Std, monospace;
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
            // this.setState({
            //     name: data.name,
            //     description: data.description,
            //     timeSpan: data.timeSpan,
            //     keyResult1: data.keyResult1,
            //     keyResult2: data.keyResult2,
            //     keyResult3: data.keyResult3,
            //     keyResult4: data.keyResult4,
            //     keyResult5: data.keyResult5
            // })
        })
        .catch((err) => {
            console.log(err);
        })
    }


    


    render() {
        return (
            <div>
                <Container>
                    {this.state.objectives.map((obj) =>(
                        <div>
                            <Card style={{ width: '20rem', height: '20rem', float: 'left'}}>
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
                <Link to={'/newObjective'}>
                    <StyledDiv>
                        New Objective
                    </StyledDiv>
                </Link>
            </div>
        );

    }

}

    
export default Objectives;


