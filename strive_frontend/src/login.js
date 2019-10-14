import React from "react";

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
    }

    validForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    };



    render() {
        return (
            <StyledForm>
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
                <br></br>

                <Button type="submit">Sign Up</Button>
            </StyledForm>
        );
    }

}



export default Login