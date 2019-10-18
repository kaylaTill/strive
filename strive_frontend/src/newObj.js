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

class NewObjective extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            timeSpan: "",
            keyResult1: "",
            keyResult2: "",
            keyResult3: "",
            keyResult4: "",
            keyResult5: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validForm = this.validForm.bind(this);

    }

    validForm() {
        return (
            this.state.name.length > 0 &&
            this.state.timeSpan.length > 0 &&
            this.state.keyResult1.length > 0 &&
            this.state.keyResult2.length > 0 &&
            this.state.keyResult3.length > 0 &&
            this.state.keyResult4.length > 0 &&
            this.state.keyResult5.length > 0
        );
    }


    async handleSubmit(event) {
        event.preventDefault();
        if (!this.validForm()) {
            alert('Sorry not a valid form!')
        } else {
            this.props.handleSubmit(
                this.state.name,
                this.state.timeSpan,
                this.state.keyResult1,
                this.state.keyResult2,
                this.state.keyResult3,
                this.state.keyResult4,
                this.state.keyResult5
            )
        }

    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }


    render() {
        return (
            <StyledForm onSubmit={this.handleSubmit}>
                <Form>
                    <Form.Row>
                        <Form.Group >
                            <Form.Label>Objective Name</Form.Label>
                            <br></br>
                            <Form.Control 
                                type="text"
                                placeholder="Objective Name"
                                name="name"
                                required
                                value={this.state.name}
                                onChange={this.handleChange} />
                        </Form.Group>
    
    
                        <br></br>
                        <Form.Group >
                            <Form.Label>Time Span</Form.Label>
                            <br></br>
                            <Form.Control as="select" 
                                name="timeSpan"
                                required
                                value={this.state.timeSpan}
                                onChange={this.handleChange} >
                                <option>Select a TimeSpan for your OKR</option>
                                <option>3 Month Objective</option>
                                <option>6 Month Objective</option>
                                <option>9 Month Objective</option>
                                <option>12 Month Objective</option>
                            </Form.Control >
                        </Form.Group>
                    </Form.Row>
    
    
                    <br></br>
                    <div>Key Results</div>
                    <br></br>
                    <Form.Group >
                        <Form.Label>Key Result One</Form.Label>
                        <br></br>
                        <Form.Control placeholder="First Priority" 
                            name="keyResult1"
                            required
                            value={this.state.keyResult1}
                            onChange={this.handleChange} />
                    </Form.Group>
    
                    <br></br>
                    <Form.Group >
                        <Form.Label>Key Result Two</Form.Label>
                        <br></br>
                        <Form.Control 
                            placeholder="Second Priority"
                            name="keyResult2"
                            required
                            value={this.state.keyResult2}
                            onChange={this.handleChange}
                         />
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
                        <Form.Control 
                            placeholder="Third Priority" 
                            required
                            name="keyResult3"
                            value={this.state.keyResult3}
                            onChange={this.handleChange}/>
                    </Form.Group>
    
                    <br></br>
                    <Form.Group >
                        <Form.Label>Key Result Four</Form.Label>
                        <br></br>
                        <Form.Control 
                            placeholder="Fourth Priority"
                            name="keyResult4"
                            required
                            value={this.state.keyResult4}
                            onChange={this.handleChange} 
                        />
                    </Form.Group>
    
                    <br></br>
                    <Form.Group >
                        <Form.Label>Key Result Five</Form.Label>
                        <br></br>
                        <Form.Control 
                            placeholder="Fifth Priority"
                            name="keyResult5"
                            required
                            value={this.state.keyResult5}
                            onChange={this.handleChange} 
                        />
                    </Form.Group>
    
                    <br></br>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </StyledForm>
        );
    }
};

export default NewObjective;