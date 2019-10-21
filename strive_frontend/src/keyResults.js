import React, { Suspense, createRef } from 'react';
import styled from 'styled-components';
import KeyResult from './keyResult.js';
import { Card, Button, ListGroup, Form, ButtonToolbar, Collapse } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import _ from 'underscore';
import axios from 'axios';


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
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleSearch(this.state.value);
    }


    render() {
        const objectives = this.props.objectives;
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
                        fontSize: '1rem', paddingTop: '3px'
                        }}>
                        Show All
                    </Button>
                </ButtonToolbar>
            
                <Container>
                    {objectives.map((obj) => {
                        var displayKRS = []
                        displayKRS.push(
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
                            </div>
                        )
                        
                        var keyresults = obj.key_results;
                        for (let i = 1; i <= 5; i ++) {
                            displayKRS.push(<KeyResult keyresults={keyresults} index={i}/>)
                            console.log(keyresults[String(i)]);
                        }  
                        return displayKRS;
                    })}
                </Container>
        </div>
    )}

                            /* <div style={{
                                color: '#000000',
                                fontFamily: 'OCR A Std, monospace',
                                marginTop: '3rem',
                                textAlign: 'center',
                                fontSize: '20px'
                            }}>Key Results</div>

                            <ListGroup border="dark" variant="flush">
                                <div>
                                    <ListGroup.Item 
                                        onClick={(() => this.setState({ kr1open: !this.state.kr1open }))}
                                        aria-controls="keyresult-collapse-text"
                                        aria-expanded={this.state.kr1open}
                                        action border="dark" variant="light">
                                            I. {obj.key_results["0"][0].name}
                                    </ListGroup.Item>
                                    
                                    <Collapse in={this.state.kr1open}>
                                        <div id="keyresult-collapse-text">
                                            <div style={{ fontFamily: 'OCR A Std, monospace', fontSize: '20px', textAlign: 'center'}}>Tasks</div> 

                                            <div>{obj.key_results["0"][1].task.map((item) => (
                                                <div style={{fontSize: '12px', textAlign: 'center'}}>- {item}</div>
                                            ))}</div>
                                            <Button variant="outline-dark" size="lg" block
                                                style={{
                                                    width: '10rem', position: 'relative',
                                                    height: '2rem', marginTop: '2rem', left: '31rem',
                                                    fontSize: '1rem', paddingTop: '3px'
                                                }}>
                                            Add Task</Button>

                                            <div style={{ fontFamily: 'OCR A Std, monospace', fontSize: '15px', textAlign: 'center'}}>Mark as Complete: {String(obj.key_results.keyResult1[2].status)}</div> 
                                        </div>
                                    </Collapse> */}
                                {/* </div> */}
{/* 
                                <div>
                                    <ListGroup.Item 
                                        onClick={(() => this.setState({ kr2open: !this.state.kr2open }))}
                                        aria-controls="keyresult-collapse-text"
                                        aria-expanded={this.state.kr2open}
                                        action border="dark" variant="light">
                                            II. {obj.key_results.keyResult2[0].name}
                                    </ListGroup.Item>

                                    <Collapse in={this.state.kr2open}>
                                        <div id="keyresult-collapse-text">
                                            <div style={{ fontFamily: 'OCR A Std, monospace', fontSize: '20px', textAlign: 'center'}}>Tasks</div>

                                            <div>{obj.key_results.keyResult2[1].task.map((item) => (
                                                <div style={{fontSize: '12px', textAlign: 'center'}}>- {item}</div>
                                            ))}</div>
                                            <Button variant="outline-dark" size="lg" block
                                                aria-controls="task-collapse-text"
                                                onClick={(() => this.setState({kr2Taskopen: !this.state.kr2Taskopen}))}
                                                style={{
                                                    width: '10rem', position: 'relative',
                                                    height: '2rem', marginTop: '2rem', left: '31.5rem',
                                                    fontSize: '1rem', paddingTop: '3px'
                                                }}>
                                                Add Task
                                            </Button>

                                            <Collapse in={this.state.kr2Taskopen}>
                                                <div id="task-collapse-text">
                                                    <Form onSubmit={this.handleTaskAddition(2)}>
                                                        <Form.Control
                                                            name="taskVal"
                                                            placeholder="Task"
                                                            value={this.state.taskVal}
                                                            onChange={this.handleChange}
                                                            style={{
                                                                width: '20rem', height: '2rem',
                                                                fontSize: '1rem', left: '26.5rem',
                                                                marginTop: '4rem', position: 'relative', 
                                                                textAlign: 'center'
                                                            }}/>

                                                        <Button  variant="outline-dark" size="lg" block
                                                            type="submit"
                                                            style={{
                                                                width: '8rem', position: 'relative',
                                                                height: '25px', marginTop: '10px', left: '32.5rem',
                                                                fontSize: '10px', paddingTop: '3px'}}>
                                                            Add
                                                        </Button>
                                                    </Form>
                                                </div>
                                            </Collapse>

                                            <div style={{ fontFamily: 'OCR A Std, monospace', fontSize: '15px', textAlign: 'center', paddingTop: '15px'}}>Mark as Complete: {String(obj.key_results.keyResult2[2].status)}</div>
                                        </div>
                                    </Collapse>
                                </div>


                                <div>
                                    <ListGroup.Item 
                                        onClick={(() => this.setState({ kr3open: !this.state.kr3open }))}
                                        aria-controls="keyresult-collapse-text"
                                        aria-expanded={this.state.kr3open}
                                        action border="dark" variant="light">
                                            III. {obj.key_results.keyResult3[0].name}
                                    </ListGroup.Item>

                                    <Collapse in={this.state.kr3open}>
                                        <div id="keyresult-collapse-text">
                                            <div style={{ fontFamily: 'OCR A Std, monospace', fontSize: '20px', textAlign: 'center'}}>Tasks</div>

                                            <div>{obj.key_results.keyResult3[1].task.map((item) => (
                                                <div style={{fontSize: '12px', textAlign: 'center'}}>- {item}</div>
                                            ))}</div>
                                            <Button variant="outline-dark" size="lg" block
                                                style={{
                                                    width: '10rem', position: 'relative',
                                                    height: '2rem', marginTop: '2rem', left: '31rem',
                                                    fontSize: '1rem', paddingTop: '3px'
                                                }}>
                                                Add Task</Button>

                                            <div style={{ fontFamily: 'OCR A Std, monospace', fontSize: '15px', textAlign: 'center', paddingTop: '15px'}}>Mark as Complete: {String(obj.key_results.keyResult3[2].status)}</div>
                                        </div>
                                    </Collapse>
                                </div>
                                
                                <div>
                                    <ListGroup.Item 
                                        onClick={(() => this.setState({ kr4open: !this.state.kr4open }))}
                                        aria-controls="keyresult-collapse-text"
                                        aria-expanded={this.state.kr4open}
                                        action border="dark" variant="light">
                                            IV. {obj.key_results.keyResult3[0].name}
                                    </ListGroup.Item>

                                    <Collapse in={this.state.kr4open}>
                                        <div id="keyresult-collapse-text">
                                            <div style={{ fontFamily: 'OCR A Std, monospace', fontSize: '20px', textAlign: 'center'}}>Tasks</div>

                                            <div>{obj.key_results.keyResult4[1].task.map((item) => (
                                                <div style={{fontSize: '12px', textAlign: 'center'}}>- {item}</div>
                                            ))}</div>
                                            <Button variant="outline-dark" size="lg" block
                                                style={{
                                                    width: '10rem', position: 'relative',
                                                    height: '2rem', marginTop: '2rem', left: '31rem',
                                                    fontSize: '1rem', paddingTop: '3px'
                                                }}>
                                                Add Task</Button>

                                            <div style={{ fontFamily: 'OCR A Std, monospace', fontSize: '15px', textAlign: 'center', paddingTop: '15px'}}>Mark as Complete: {String(obj.key_results.keyResult4[2].status)}</div>
                                        </div>
                                    </Collapse>
                                </div>


                                <div>
                                    <ListGroup.Item 
                                        onClick={(() => this.setState({ kr5open: !this.state.kr5open }))}
                                        aria-controls="keyresult-collapse-text"
                                        aria-expanded={this.state.kr5open}
                                        action border="dark" variant="light">
                                            V. {obj.key_results.keyResult3[0].name}
                                    </ListGroup.Item>

                                    <Collapse in={this.state.kr5open}>
                                        <div id="keyresult-collapse-text">
                                            <div style={{ fontFamily: 'OCR A Std, monospace', fontSize: '20px', textAlign: 'center'}}>Tasks</div>

                                            <div>{obj.key_results.keyResult5[1].task.map((item) => (
                                                <div style={{ fontSize: '12px', textAlign: 'center'}}>- {item}</div>
                                            ))}</div>
                                            <Button variant="outline-dark" size="lg" block
                                                style={{
                                                    width: '10rem', position: 'relative',
                                                    height: '3rem', marginTop: '2rem', left: '31rem',
                                                    fontSize: '1rem', paddingTop: '3px'
                                                }}
                                            > Add Task</Button>
                                            <div style={{ fontFamily: 'OCR A Std, monospace', fontSize: '15px', textAlign: 'center', paddingTop: '15px'}}>Mark as Complete: {String(obj.key_results.keyResult5[2].status)}</div>
                                        </div>
                                    </Collapse>
                                </div> */}
                            {/* </ListGroup>
                        </div>
                    ))}
                </Container>
            </div>
        )

    } */
   
};

export default KeyResults;