import React from 'react';
import styled from 'styled-components';
import { Form, Button, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
// import moment from 'moment-jalaali'
// import DatePicker from 'react-datepicker2';

const NewObjective = ((props) => {
    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col} >
                    <Form.Label>Objective Name</Form.Label>
                    <Form.Control type="text" placeholder="Objective Name" />
                </Form.Group>

                <Form.Group as={Col} >
                    <Form.Label>Time Span</Form.Label>
                    <Form.Control as="select">
                        <option>3 Month Objective</option>
                        <option>6 Month Objective</option>
                        <option>9 Month Objective</option>
                        <option>12 Month Objective</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>


            <div>Key Results</div>
            <Form.Group >
                <Form.Label>Key Result One</Form.Label>
                <Form.Control placeholder="First Priority" />
            </Form.Group>

            <Form.Group >
                <Form.Label>Key Result Two</Form.Label>
                <Form.Control placeholder="Second Priority" />
                {/* <Form.Label>Key Result Two Deadline</Form.Label> */}
                {/* <DatePicker
                value={this.state.value}
                onChange={value => this.setState({ value })}
            /> */}
            </Form.Group>
            <Form.Group >
                <Form.Label>Key Result Two</Form.Label>
                <Form.Control placeholder="Third Priority" />
            </Form.Group>

            <Form.Group >
                <Form.Label>Key Result Four</Form.Label>
                <Form.Control placeholder="Fourth Priority" />
            </Form.Group>

            <Form.Group >
                <Form.Label>Key Result Five</Form.Label>
                <Form.Control placeholder="Fifth Priority" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
        </Button>
        </Form>
    );

})

export default NewObjective;