import React, {Suspense} from 'react';
import styled from 'styled-components';
import { Form, Button, Overlay } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch, Redirect, useParams, useRouteMatch  } from 'react-router-dom';
const NewObjective = (React.lazy(() => import('./newObj.js')));


const StyledDiv = styled.div`
    height:40px; 
    width:200px; 
    margin: -20px -50px; 
    position:relative;
    top:50%; 
    left: 45%;
    text-align: center;
    font-family: OCR A Std, monospace;
    border-style: solid;
`

const ObjectiveOverlay = styled.div`
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    background-color: #grey;
    overflow: hidden;
    color: white;
    width: 100%;
    height:0;
    transition: .5s ease;
`
const Container = styled.div`
    width: 1500px;
    height: 400px;
    border-style: solid;
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


class Objectives extends React.Component {

    constructor(props) {
        super(props);

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
                <Link to={'/objectives'}>
                    <StyledDiv>
                        New Objective
                    </StyledDiv>
                </Link>
                <br></br>


                <Suspense fallback={<div></div>}>
                    <Route exact path={'/objectives'}>
                        <br></br>
                        <NewObjective/>
                    </Route> 
                </Suspense>
            </div>
        );

    }

}

    
export default Objectives;


