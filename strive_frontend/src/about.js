import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const About = styled.div`
    width: 960px;
    margin: auto 0;
    padding: 60px;
    align: center;
    text-align: center;
    font-size: 20px;
    font-family: OCR A Std, monospace;
`

const Intro = styled.div`
    font-size: 15px;
`

const Join = styled.div`
    font-size: 15px;
`
const Quote = styled.div`
    font-size: 15px;
`


const AboutPage = (props) => {
    return (
        <About>
            <div>
                Welcome to Strive, Get motivated. Get organized. Get ahead.
            </div>
            <br />
            <div>
                <Intro>
                    Strive is an online goal setting management system inspired by Google OKR's.
                    We aim to help companies and indivisuals achieve their goals by setting
                    objectives, key results, and by providing visual progress trackers.
                </Intro>
                <br />

                <Join>Join Strive today, and take control.</Join>
                <br />

                <Quote>The future belongs to those who prepare for it today.</Quote>
                <Quote>- Malcom X</Quote>
                <Link to={'/register'}>
                    <Button variant="outline-secondary">
                        Get Started.
                </Button>
                </Link>
            </div>
        </About>
    );
};

export default AboutPage;