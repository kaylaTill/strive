import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch, Redirect, useParams, useRouteMatch} from 'react-router-dom';
import axios from 'axios';
const PrivateNav = (React.lazy(() => import('./privateNav.js')));
const Objectives = (React.lazy(() => import('./objectives.js')));
const NewObjective = (React.lazy(() => import('./newObj.js')));


const Center = styled.h1`
    width: 1000px; 
    margin: auto 0;
    padding: 60px;
    align: center;
    text-align: center;
    font-size: 40px;
    font-family: OCR A Std, monospace;
`;



class UserHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote_author: "",
            quote_text: "",
            sessionStatus: this.props.sessionStatus
        }
        this.handleClick = this.handleClick.bind(this);
    }

   componentDidMount() {
       axios.get('/quote')
           .then(({ data }) => {
               this.setState({
                   quote_text: data.quote_text,
                   quote_author: data.quote_author
               })
           })
           .catch((err) => {
               console.log(err);
           });
    }

    handleClick() {
        this.props.logout();
    }
    
    render() {
        return (
            <div>
                <Suspense fallback={<div></div>}>
                    {/* DYNAMIC DASHBOARD ROUTES */}
                    <Switch>
                        {/* ORIGINAL HOME PAGE */}
                        <Route exact={true} path={'/home'}>
                            <PrivateNav/>
                            <Center>
                                <div>{`${this.state.quote_text}`}</div>
                                <br></br>
                                <div>{`- ${this.state.quote_author}`}</div>
                            </Center>
                        </Route>
                    </Switch>
                </Suspense>               
            </div>
        );
    }
}

export default UserHomePage;