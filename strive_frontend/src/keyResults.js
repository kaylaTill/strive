import React, { Suspense, createRef } from 'react';
import styled from 'styled-components';
import { Card, Button, ListGroup, Form, ButtonToolbar } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import _ from 'underscore';


const Container = styled.div`
    width: 1150px;
`;

class KeyResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleSearch(this.state.value);
        window.location.reload(false)
    }

   

    render() {
        const objectives = this.props.objectives
        return (
            <div>
                <ButtonToolbar>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group style={{ marginTop: '2rem' }} >
                            <Form.Control
                                name="value"
                                placeholder="Search.."
                                value={this.state.value}
                                onChange={this.handleChange}
                                style={{
                                    width: '20rem', height: '3rem',
                                    fontSize: '1rem', position: 'relative'
                                }} />
                        </Form.Group>
                    </Form>
                    <Button href={'/keyResults'} variant="outline-dark" size="sm" block
                        style={{ width: '10rem', position: 'relative',
                        height: '3rem', marginTop: '2rem', left: '40rem',
                        fontSize: '1rem', paddingTop: '10px'
                        }}>
                        Show All
                    </Button>
                </ButtonToolbar>
            
                <Container>
                    {objectives.map((obj) => (
                        <div>
                            <Card border="none" style={{ height: '10rem', marginTop: '3rem' }}>
                                <Card.Body style={{ color: '#000000', fontFamily: 'OCR A Std, monospace', textAlign: 'center' }}>
                                    <Card.Title>{obj.name}</Card.Title>
                                    <Card.Text>{obj.description}</Card.Text>
                                    <Card.Text>{obj.timeSpan}</Card.Text>
                                </Card.Body>
                            </Card>

                            <div style={{
                                color: '#000000',
                                fontFamily: 'OCR A Std, monospace',
                                marginTop: '3rem',
                                textAlign: 'center',
                                fontSize: '20px'
                            }}>Key Results</div>
                            <ListGroup border="dark" variant="flush">
                                <ListGroup.Item action border="dark" variant="light">I. {obj.keyResult1}</ListGroup.Item>
                                <ListGroup.Item action border="dark" variant="light">II. {obj.keyResult2}</ListGroup.Item>
                                <ListGroup.Item action border="dark" variant="light">III. {obj.keyResult3}</ListGroup.Item>
                                <ListGroup.Item action border="dark" variant="light">IV. {obj.keyResult4}</ListGroup.Item>
                                <ListGroup.Item action border="dark" variant="light">V. {obj.keyResult5}</ListGroup.Item>
                            </ListGroup>
                        </div>
                    ))}
                </Container>
            </div>
        )

    }
   
};

export default KeyResults;