import React from 'react';
import styled from 'styled-components';
import { Form, Button, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
// import moment from 'moment-jalaali'
// import DatePicker from 'react-datepicker2';

const StyledForm = styled.form`
    position: fixed;
    left: 200px;
    botton: 100%;
    align: center;
    text-align: center;
    width: 960px;
    font-size: 20px;
    font-family: OCR A Std, monospace;
    align: center;
    text-align: center;
    display: inline-block;
`;

const StyledInputs = styled.div`
    width: 600px;
    position: relative;
    
`

const NewObjective = ((props) => {
    return (
        <StyledForm>
            <Form.Row>
                <Form.Group as={Col} >
                    <Form.Label>Objective Name</Form.Label>
                    <StyledInputs>
                        <Form.Control type="text" placeholder="Objective Name" />
                    </StyledInputs>
                </Form.Group>

                <Form.Group as={Col} >
                    <Form.Label>Time Span</Form.Label>
                    <StyledInputs>
                        <Form.Control as="select">
                        <option>3 Month Objective</option>
                        <option>6 Month Objective</option>
                        <option>9 Month Objective</option>
                        <option>12 Month Objective</option>
                        </Form.Control>
                    </StyledInputs>
                </Form.Group>
            </Form.Row>


            <div>Key Results</div>
            <Form.Group >
                <Form.Label>Key Result One</Form.Label>
                <StyledInputs>
                    <Form.Control placeholder="First Priority" />
                </StyledInputs>
            </Form.Group>

            <Form.Group >
                <Form.Label>Key Result Two</Form.Label>
                <StyledInputs>
                    <Form.Control placeholder="Second Priority" />
                </StyledInputs>
                {/* <Form.Label>Key Result Two Deadline</Form.Label> */}
                {/* <DatePicker
            value={this.state.value}
            onChange={value => this.setState({ value })}
        /> */}
            </Form.Group>
            <Form.Group >
                <Form.Label>Key Result Two</Form.Label>
                <StyledInputs>
                    <Form.Control placeholder="Third Priority" />
                </StyledInputs>
            </Form.Group>

            <Form.Group >
                <Form.Label>Key Result Four</Form.Label>
                <StyledInputs>
                    <Form.Control placeholder="Fourth Priority" />
                </StyledInputs>
            </Form.Group>

            <Form.Group >
                <Form.Label>Key Result Five</Form.Label>
                <StyledInputs>
                    <Form.Control placeholder="Fifth Priority" />
                </StyledInputs>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </StyledForm>
    );

})

export default NewObjective;