import React, { Suspense, createRef} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Form, Button, Overlay } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch, Redirect, useParams, useRouteMatch  } from 'react-router-dom';
const NewObjective = (React.lazy(() => import('./newObj.js')));

const StyledDiv = styled.div`
    height:40px; 
    width:200px; 
    position:relative;
    top:50%; 
    left: 45%;
    text-align: center;
    font-family: OCR A Std, monospace;
    border-style: solid;
    flex: 1,
    alignItems: 'center',
    paddingTop: 50px;
`

const Container = styled.div`
    width: 1150px;
    height: 400px;
`;
const Objective = styled.div`
    display: block;
    width: 100 %;
    height: auto;
`

const Description = styled.div`
    text-align: right; 
    font-size: 15px;
    font-family: OCR A Std, monospace;
`
const Page = styled.div`
    flex: 1
`

class Objectives extends React.Component {

    constructor(props) {
        super(props);
        // this.showForm = this.showForm.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('/getUserObjectives')
        .then(({data}) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }


    


    render() {
        return (
            <div>
                <Container>
                    {/* <Objective>
                        <ObjectiveOverlay>
                            <Description>
                                Example Objective
                            </Description>
                        </ObjectiveOverlay>
                    </Objective> */}
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


