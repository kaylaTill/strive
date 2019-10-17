import React from 'react';
import styled from 'styled-components';
import { Form, Button, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
// import moment from 'moment-jalaali'
// import DatePicker from 'react-datepicker2';

const StyledForm = styled.form`
    position: relative;
    left: 5%
    botton: 900%;
    align: center;
    text-align: center;
    font-size: 20px;
    font-family: OCR A Std, monospace;
    align: center;
    text-align: center;
`;

const NewObjective = ((props) => {
    return (
        <StyledForm>
            <Form.Row>
                <Form.Group >
                    <Form.Label>Objective Name</Form.Label>
                    <br></br>
                    <Form.Control type="text" placeholder="Objective Name" />
                </Form.Group>


                <br></br>
                <Form.Group >
                    <Form.Label>Time Span</Form.Label>
                    <br></br>
                    <Form.Control as="select">
                        <option>3 Month Objective</option>
                        <option>6 Month Objective</option>
                        <option>9 Month Objective</option>
                        <option>12 Month Objective</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>


            <br></br>
            <div>Key Results</div>
            <br></br>
            <Form.Group >
                <Form.Label>Key Result One</Form.Label>
                <br></br>
                <Form.Control placeholder="First Priority" />
            </Form.Group>

            <br></br>
            <Form.Group >
                <Form.Label>Key Result Two</Form.Label>
                <br></br>
                <Form.Control placeholder="Second Priority" />
                {/* <Form.Label>Key Result Two Deadline</Form.Label> */}
                {/* <DatePicker
            value={this.state.value}
            onChange={value => this.setState({ value })}
        /> */}
            </Form.Group>
            <br></br>
            <Form.Group >
                <Form.Label>Key Result Two</Form.Label>
                <br></br>
                <Form.Control placeholder="Third Priority" />
            </Form.Group>

            <br></br>
            <Form.Group >
                <Form.Label>Key Result Four</Form.Label>
                <br></br>
                <Form.Control placeholder="Fourth Priority" />
            </Form.Group>

            <br></br>
            <Form.Group >
                <Form.Label>Key Result Five</Form.Label>
                <br></br>
                <Form.Control placeholder="Fifth Priority" />
            </Form.Group>

            <br></br>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </StyledForm>
    );

})

export default NewObjective;