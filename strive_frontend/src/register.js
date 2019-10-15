import React from "react";
import { FormGroup, FormControl, Form, Button} from "react-bootstrap";
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
            confirmPassword: ""
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
        event.preventDefault();

        if (!this.validForm()) {
            alert('Sorry not a valid form!')
        } else {
            this.props.handleRegister(
                this.state.email,
                this.state.first_name,
                this.state.last_name,
                this.state.username,
                this.state.password
            )
        }

    }


    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }


    render() {
        return (
            <StyledForm onSubmit={this.handleSubmit} >
                <FormGroup controlId="email">
                    <Form.Label>Email</Form.Label>
                    <br></br>
                    <FormControl
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                </FormGroup>

                <FormGroup controlId="first_name">
                    <Form.Label>First Name</Form.Label>
                    <br></br>
                    <FormControl
                        type="first_name"
                        name="first_name"
                        value={this.state.first_name}
                        onChange={this.handleChange}
                        />
                </FormGroup>

                <FormGroup controlId="last_name">
                    <Form.Label>Last Name</Form.Label>
                    <br></br>
                    <FormControl
                        type="last_name"
                        name="last_name"
                        value={this.state.last_name}
                        onChange={this.handleChange}
                    />
                </FormGroup>

                <FormGroup controlId="username">
                    <Form.Label>Username</Form.Label>
                    <br></br>
                    <FormControl
                        type="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </FormGroup>

                <FormGroup controlId="password">
                    <Form.Label>Password</Form.Label>
                    <br></br>
                    <FormControl
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </FormGroup>

                <FormGroup controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <br></br>
                    <FormControl
                        type="text"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <br></br>
                <Button type="submit">Sign Up</Button>
            </StyledForm> 
        );
    }
}


export default Register;
