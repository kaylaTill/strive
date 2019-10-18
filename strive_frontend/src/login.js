import React from "react";
import { FormGroup, FormControl, Form, Button } from "react-bootstrap";
import styled from 'styled-components';

const StyledForm = styled.form`
    font-size: 15px;
    font-family: OCR A Std, monospace;
    padding: 60px;
    align: center;
    text-align: center;
`;

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }
        this.validForm = this.validForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    validForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    };

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    };


    async handleSubmit(event) {
        event.preventDefault();
        this.props.handleLogin(
            this.state.username,
            this.state.password
        )

    }


    render() {
        return (
            <StyledForm onSubmit={this.handleSubmit} >
                <FormGroup controlId="username">
                    <Form.Label>Username</Form.Label>
                    <br></br>
                    <FormControl
                        type="username"
                        name="username"
                        required
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </FormGroup>

                <FormGroup controlId="password">
                    <Form.Label>Password</Form.Label>
                    <br></br>
                    <FormControl
                        type="password"
                        name="password"
                        required
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <br></br>
                <Button type="submit">Log in</Button>
            </StyledForm>
        );
    }

};

export default Login;