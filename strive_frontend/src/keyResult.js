import React, { Suspense} from 'react';
import styled from 'styled-components';
import { Card, Button, ListGroup, Form, ButtonToolbar, Collapse } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import _ from 'underscore';
import axios from 'axios';
import KeyResults from './keyResults';


class KeyResult extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
            taskVal: "",
            taskOpen: false,
            open: false,
            KRindex: this.props.index,
            objectiveId: this.props.objectiveId + 1
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleTaskAddition = this.handleTaskAddition.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }


    handleTaskAddition(event) {
        event.preventDefault()
        axios.post('/addTask', {
            task: this.state.taskVal,
            KRindex: this.state.KRindex,
            objectiveId: this.state.objectiveId
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        const { keyresults } = this.props;
        const i = this.state.KRindex;
        return(
            <div>
                <ListGroup.Item
                    onClick={(() => this.setState({ open: !this.state.open }))}
                    aria-controls="keyresult-collapse-text"
                    aria-expanded={this.state.open}
                    action border="dark" variant="light">
                    {keyresults[String(i)][0].name}
                </ListGroup.Item>

                <Collapse in={this.state.open}>
                    <div id="keyresult-collapse-text">
                        <div style={{ fontFamily: 'OCR A Std, monospace', fontSize: '20px', textAlign: 'center' }}>Tasks</div>

                        <ul>
                            {keyresults[String(i)][1].task.map((item) => (
                                <li style={{ fontSize: '12px', textAlign: 'center' }}>- {item}</li>
                            ))}
                        </ul>

                        <Button variant="outline-dark" size="lg" block
                            aria-controls="task-collapse-text"
                            onClick={(() => this.setState({ taskOpen: !this.state.taskOpen }))}
                            style={{
                                width: '10rem', position: 'relative',
                                height: '2rem', marginTop: '2rem', left: '31.5rem',
                                fontSize: '1rem', paddingTop: '3px'
                            }}>
                            Add Task
                            </Button>

                        <Collapse in={this.state.taskOpen}>
                            <div id="task-collapse-text">
                                <Form onSubmit={this.handleTaskAddition}>
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
                                        }} />

                                    <Button variant="outline-dark" size="lg" block
                                        type="submit"
                                        style={{
                                            width: '8rem', position: 'relative',
                                            height: '25px', marginTop: '10px', left: '32.5rem',
                                            fontSize: '10px', paddingTop: '3px'
                                        }}>
                                        Add
                                    </Button>
                                </Form>
                            </div>
                        </Collapse>
                        <div style={{ fontFamily: 'OCR A Std, monospace', fontSize: '15px', textAlign: 'center', paddingTop: '15px' }}>Mark as Complete: {String(keyresults[String(i)][2].status)}</div>
                    </div>
                </Collapse>
            </div>
        )
    }

}



export default KeyResult;