import React, { Suspense, createRef } from 'react';
import styled from 'styled-components';
import { Card, Button, ListGroup, Form, ButtonToolbar, Collapse } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import _ from 'underscore';
import { relative } from 'path';


const Container = styled.div`
    width: 1150px;
`;

class KeyResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
            kr1open: false,
            kr2open: false,
            kr3open: false,
            kr4open: false,
            kr5open: false
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
    }

   

    render() {
        const objectives = this.props.objectives
        console.log(objectives[0].key_results.keyResult1[2].status)
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
                         
                        // {

                        //     // GET ALL KR TASKS
                        //     var task1 = 
                        //     var task2 = obj.key_results.keyResult1[1].task
                        //     var task3 = obj.key_results.keyResult1[1].task
                        //     var task4 = obj.key_results.keyResult1[1].task
                        //     var task5 = obj.key_results.keyResult1[1].task

                        //     // GET ALL KR STATUS
                        //     var status1 = 
                        //     var status2 = 
                        //     var status3 = obj.key_results.keyResult1[2].status
                        //     var status4 = obj.key_results.keyResult1[2].status
                        //     var status5 = obj.key_results.keyResult1[2].status
                        // }
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
                                <div>
                                    <ListGroup.Item 
                                        onMouseEnter={(() => this.setState({ kr1open: !this.state.kr1open }))}
                                        onMouseLeave={(() => this.setState({ kr1open: !this.state.kr1open }))}
                                        aria-controls="keyresult-collapse-text"
                                        aria-expanded={this.state.kr1open}
                                        action border="dark" variant="light">
                                            I. {obj.key_results.keyResult1[0].name}
                                    </ListGroup.Item>
                                    
                                    <Collapse in={this.state.kr1open}>
                                        <div id="keyresult-collapse-text">
                                            <div>Tasks</div> 

                                            <div>{obj.key_results.keyResult1[1].task.map((item) => (
                                                <div>- {item}</div>
                                            ))}</div>
                                            <Button>Add Task</Button>

                                            <div>Completed: {String(obj.key_results.keyResult1[2].status)}</div> 
                                        </div>
                                    </Collapse>
                                </div>

                                <div>
                                    <ListGroup.Item 
                                        onMouseEnter={(() => this.setState({ kr2open: !this.state.kr2open }))}
                                        onMouseLeave={(() => this.setState({ kr2open: !this.state.kr2open }))}
                                        aria-controls="keyresult-collapse-text"
                                        aria-expanded={this.state.kr2open}
                                        action border="dark" variant="light">
                                            I. {obj.key_results.keyResult2[0].name}
                                    </ListGroup.Item>

                                    <Collapse in={this.state.kr2open}>
                                        <div id="keyresult-collapse-text">
                                            <div>Tasks</div>

                                            <div>{obj.key_results.keyResult2[1].task.map((item) => (
                                                <div>- {item}</div>
                                            ))}</div>
                                            <Button>Add Task</Button>

                                            <div>Completed: {String(obj.key_results.keyResult2[2].status)}</div>
                                        </div>
                                    </Collapse>
                                </div>


                                <div>
                                    <ListGroup.Item 
                                        onMouseEnter={(() => this.setState({ kr3open: !this.state.kr3open }))}
                                        onMouseLeave={(() => this.setState({ kr3open: !this.state.kr3open }))}
                                        aria-controls="keyresult-collapse-text"
                                        aria-expanded={this.state.kr3open}
                                        action border="dark" variant="light">
                                            I. {obj.key_results.keyResult3[0].name}
                                    </ListGroup.Item>

                                    <Collapse in={this.state.kr3open}>
                                        <div id="keyresult-collapse-text">
                                            <div>Tasks</div>

                                            <div>{obj.key_results.keyResult3[1].task.map((item) => (
                                                <div>- {item}</div>
                                            ))}</div>
                                            <Button>Add Task</Button>

                                            <div>Completed: {String(obj.key_results.keyResult3[2].status)}</div>
                                        </div>
                                    </Collapse>
                                </div>
                                
                                <div>
                                    <ListGroup.Item 
                                        onMouseEnter={(() => this.setState({ kr4open: !this.state.kr4open }))}
                                        onMouseLeave={(() => this.setState({ kr4open: !this.state.kr4open }))}
                                        aria-controls="keyresult-collapse-text"
                                        aria-expanded={this.state.kr4open}
                                        action border="dark" variant="light">
                                            I. {obj.key_results.keyResult3[0].name}
                                    </ListGroup.Item>

                                    <Collapse in={this.state.kr4open}>
                                        <div id="keyresult-collapse-text">
                                            <div>Tasks</div>

                                            <div>{obj.key_results.keyResult4[1].task.map((item) => (
                                                <div>- {item}</div>
                                            ))}</div>
                                            <Button>Add Task</Button>

                                            <div>Completed: {String(obj.key_results.keyResult4[2].status)}</div>
                                        </div>
                                    </Collapse>
                                </div>


                                <div>
                                    <ListGroup.Item 
                                        onMouseEnter={(() => this.setState({ kr5open: !this.state.kr5open }))}
                                        onMouseLeave={(() => this.setState({ kr5open: !this.state.kr5open }))}
                                        aria-controls="keyresult-collapse-text"
                                        aria-expanded={this.state.kr5open}
                                        action border="dark" variant="light">
                                            I. {obj.key_results.keyResult3[0].name}
                                    </ListGroup.Item>

                                    <Collapse in={this.state.kr5open}>
                                        <div id="keyresult-collapse-text">
                                            <div>Tasks</div>

                                            <div>{obj.key_results.keyResult5[1].task.map((item) => (
                                                <div>- {item}</div>
                                            ))}</div>
                                            <Button>Add Task</Button>

                                            <div>Completed: {String(obj.key_results.keyResult5[2].status)}</div>
                                        </div>
                                    </Collapse>
                                </div>

                            </ListGroup>
                        </div>
                    ))}
                </Container>
            </div>
        )

    }
   
};

export default KeyResults;