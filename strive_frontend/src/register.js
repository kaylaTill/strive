import React from "react";
import {Form, Button} from "react-bootstrap";
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const StyledForm = styled.form`
    font-size: 15px;
    font-family: OCR A Std, monospace;
    padding: 60px;
    align: center;
    text-align: center;
`;

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            first_name: "",
            last_name: "",
            username: "",
            password: "",
            confirmPassword: "",
            validated: true
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validForm = this.validForm.bind(this);
    }

    validForm() {
        return (
            this.state.email.length > 0 &&
            this.state.first_name.length > 0 &&
            this.state.last_name.length > 0 &&
            this.state.username.length > 0 &&
            this.state.password.length > 0 &&
            this.state.password === this.state.confirmPassword
        );
    }

    async handleSubmit(event) {
        this.props.handleRegister(
            this.state.email,
            this.state.first_name,
            this.state.last_name,
            this.state.username,
            this.state.password
        )
    }


    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }


    render() {
        return (
            <StyledForm>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group md="4" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <br></br>
                        <Form.Control
                            controlId="validationCustom01"
                            type="email"
                            name="email"
                            required
                            value={this.state.email}
                            onChange={this.handleChange}
                            />
                    </Form.Group>

                    <Form.Group md="4"controlId="validationCustom02">
                        <Form.Label>First Name</Form.Label>
                        <br></br>
                        <Form.Control
                            type="first_name"
                            name="first_name"
                            required
                            value={this.state.first_name}
                            onChange={this.handleChange}
                            />
                    </Form.Group>

                    <Form.Group md="4"controlId="validationCustom03">
                        <Form.Label>Last Name</Form.Label>
                        <br></br>
                        <Form.Control
                            md="4" 
                            type="last_name"
                            name="last_name"
                            required
                            value={this.state.last_name}
                            onChange={this.handleChange}
                        />
                       
                    </Form.Group>

                    <Form.Group md="4"  controlId="validationCustomUsername">
                        <Form.Label>Username</Form.Label>
                        <br></br>
                        <Form.Control
                            controlId="validationCustom03"
                            type="username"
                            name="username"
                            required
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                     
                    </Form.Group>

                    <Form.Group md="4" controlId="validationCustom04">
                        <Form.Label>Password</Form.Label>
                        <br></br>
                        <Form.Control
                            type="password"
                            name="password"
                            required
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                       
                    </Form.Group>

                    <Form.Group md="4" controlId="validationCustom05">
                        <Form.Label>Confirm Password</Form.Label>
                        <br></br>
                        <Form.Control
                            type="password"
                            name="confirmPassword"
                            required
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <br></br>
                    <Button type="submit">Sign Up</Button>
                </Form>
            </StyledForm> 
        );
    }
}


export default Register;
