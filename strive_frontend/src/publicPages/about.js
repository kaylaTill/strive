import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const About = styled.div`
    width: 1000px; 
    margin: auto 0;
    padding: 60px;
    position: relative;
    left: 5rem;
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
                    Strive is an online goal setting management system inspired by OKR's.
                    We aim to help companies and indivisuals achieve their goals by setting
                    objectives, key results, and by providing visual progress trackers.
                </Intro>
                <br />

                <Join>Join Strive today, and take control.</Join>
                <br />

                <Quote>The future belongs to those who prepare for it today.</Quote>
                <Quote>- Malcom X</Quote>
                <Button href={'/register'}variant="outline-dark" size="lg" block
                    style={{ width: '30rem', bottom: '0px', marginTop: '30px', position: 'relative', left: '12rem', }}>
                    Get Started.
                </Button>
            </div>
        </About>
    );
};

export default AboutPage;