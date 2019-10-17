import React, { Suspense, createRef} from 'react';
import styled from 'styled-components';
import { Form, Button, Overlay } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch, Redirect, useParams, useRouteMatch  } from 'react-router-dom';
const NewObjective = (React.lazy(() => import('./newObj.js')));

export 

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
const Page = styled.div`
    flex: 1
`

class Objectives extends React.Component {

    constructor(props) {
        super(props);
        // this.showForm = this.showForm.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
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
                <br></br>


                <Suspense fallback={<div></div>}>
                    <Route exact path={'/newObjective'}>
                        <br></br>
                        <NewObjective/>
                    </Route> 
                </Suspense>
            </div>
        );

    }

}

    
export default Objectives;


