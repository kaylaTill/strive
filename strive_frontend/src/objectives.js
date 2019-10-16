import React, {Suspense} from 'react';
import styled from 'styled-components';
import { Form, Button, Overlay } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
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
    position: relative;
    width: 50%;
    background-color: black;
    ${ObjectiveOverlay}:hover & {
        bottom: 0;
        height: 100%;
    }
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

const StyledForm = styled.form`
    font-size: 15px;
    font-family: OCR A Std, monospace;
    padding: 60px;
    align: center;
    text-align: center;
`;


class Objectives extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Router>
                <Suspense fallback={<div></div>}>
                    <Route path={'/objectives'}>
                        <Container>
                            <Objective>
                                <ObjectiveOverlay>
                                    <Description>
                                        Example Objective
                                    </Description>
                                </ObjectiveOverlay>
                            </Objective>
                        </Container>
                        <Link to={'/new'}>
                            <StyledDiv>
                                New Objective
                            </StyledDiv>
                        </Link>
                    </Route>
                    <Switch>   
                        <Route exact={true} path={'/new'}>
                            <NewObjective />
                        </Route>
                    </Switch>
                </Suspense>
            </Router>
        );

    }

}

    
export default Objectives;


