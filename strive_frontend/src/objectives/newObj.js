import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class NewObjective extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            timeSpan: "",
            description: "",
            keyResult1: "",
            keyResult2: "",
            keyResult3: "",
            keyResult4: "",
            keyResult5: ""
        }
        this.handleOBJ = this.handleOBJ.bind(this);
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


    async handleOBJ(event) {
        event.preventDefault();
        this.props.handleSubmit(
            this.state.name,
            this.state.description,
            this.state.timeSpan,
            this.state.keyResult1,
            this.state.keyResult2,
            this.state.keyResult3,
            this.state.keyResult4,
            this.state.keyResult5
        )
        window.location.href = '/objectives';
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }


    render() {
        return (
        <div>
        <Form onSubmit={this.handleOBJ} style={{
            position: 'relative',
            left: '17rem',
            align: 'center',
            textAlign: 'center',
            fontSize: '20px',
            fontFamily: 'OCR A Std, monospace'
        }}> 
            <Form.Row>
                <Form.Group style={{ marginTop: '2rem' }} >
                    <Form.Label style={{ fontSize: '20px' }} >Objective Name</Form.Label>
                    <br></br>
                    <Form.Control 
                        type="text"
                        placeholder="Objective Name"
                        name="name"
                        required
                        value={this.state.name}
                        onChange={this.handleChange} 
                        style={{ width: '40rem', height: '3rem'
                        , fontSize: '1rem', position: 'relative' }}
                    />
                </Form.Group>

                <Form.Group style={{ marginTop: '2rem' }}>
                    <Form.Label style={{ fontSize: '20px' }}>Objective Description</Form.Label>
                    <br></br>
                    <Form.Control 
                        type="text"
                        placeholder="Objective Description"
                        name="description"
                        required
                        value={this.state.description}
                        onChange={this.handleChange} 
                        variant="outline-dark" size="lg" block
                        style={{ width: '40rem', height: '3rem', fontSize: '1rem',position: 'relative' }} />
                </Form.Group>


        
                <Form.Group style={{ marginTop: '2rem' }} >
                    <Form.Label style={{ fontSize: '20px' }}>Time Span</Form.Label>
                    <br></br>
                    <Form.Control as="select" 
                        name="timeSpan"
                        required
                        value={this.state.timeSpan}
                        onChange={this.handleChange} 
                        style={{ width: '40rem', height: '3rem',
                        fontSize: '1rem', position: 'relative' }}
                        >
                        <option>Select a TimeSpan for your OKR</option>
                        <option>3 Month Objective</option>
                        <option>6 Month Objective</option>
                        <option>9 Month Objective</option>
                        <option>12 Month Objective</option>
                    </Form.Control >
                </Form.Group>
        
                <Form.Group style={{ marginTop: '2rem' }} >
                    <Form.Label style={{ fontSize: '20px' }}>Key Result One</Form.Label>
                    <br></br>
                    <Form.Control placeholder="First Priority" 
                        name="keyResult1"
                        required
                        value={this.state.keyResult1}
                        onChange={this.handleChange} 
                        style={{ width: '40rem', height: '3rem',
                        fontSize: '1rem', position: 'relative' }}/>
                </Form.Group>

        
                <Form.Group style={{ marginTop: '2rem' }} >
                    <Form.Label style={{ fontSize: '20px' }}>Key Result Two</Form.Label>
                    <br></br>
                    <Form.Control 
                        placeholder="Second Priority"
                        name="keyResult2"
                        required
                        value={this.state.keyResult2}
                        onChange={this.handleChange}
                        style={{ width: '40rem', height: '3rem', 
                        fontSize: '1rem', position: 'relative' }}
                        />
                </Form.Group>
        
                <Form.Group style={{ marginTop: '2rem' }} >
                    <Form.Label style={{ fontSize: '20px' }}>Key Result Three</Form.Label>
                    <br></br>
                    <Form.Control 
                        placeholder="Third Priority" 
                        required
                        name="keyResult3"
                        value={this.state.keyResult3}
                        onChange={this.handleChange}
                        style={{ width: '40rem', height: '3rem', 
                        fontSize: '1rem', position: 'relative' }}/>
                </Form.Group>

        
                <Form.Group style={{ marginTop: '2rem' }} >
                    <Form.Label style={{ fontSize: '20px' }}>Key Result Four</Form.Label>
                    <br></br>
                    <Form.Control 
                        placeholder="Fourth Priority"
                        name="keyResult4"
                        value={this.state.keyResult4}
                        onChange={this.handleChange} 
                        style={{ width: '40rem', height: '3rem', 
                        fontSize: '1rem', position: 'relative' }}
                    />
                </Form.Group>

        
                <Form.Group style={{ marginTop: '2rem' }} >
                    <Form.Label style={{ fontSize: '20px' }}>Key Result Five</Form.Label>
                    <br></br>
                    <Form.Control 
                        placeholder="Fifth Priority"
                        name="keyResult5"
                        value={this.state.keyResult5}
                        onChange={this.handleChange} 
                        style={{ width: '40rem', height: '3rem', 
                        fontSize: '1rem', position: 'relative' }}
                    />
                </Form.Group>
            </Form.Row>

            <br></br>
            <Button type="submit" 
                variant="outline-dark" 
                size="lg" block
                style={{ width: '40rem', position: 'relative', marginBottom: '2rem' }}>
                Submit
            </Button>
        </Form>
        </div>
        );
    }
};

export default NewObjective;