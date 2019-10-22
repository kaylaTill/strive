import React, { Suspense} from 'react';
import styled from 'styled-components';
import { Card, Button, ListGroup, Form, ButtonToolbar, Collapse, InputGroup } from 'react-bootstrap';
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
            disable: false,
            taskData: [],
            open: false,
            KRindex: this.props.index,
            objectiveId: this.props.objectiveId + 1
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleTaskAddition = this.handleTaskAddition.bind(this);
        this.addProgress = this.addProgress.bind(this);
    }

    componentDidMount() {
        axios.post('getTask', {
            KRindex: this.state.KRindex,
            objectiveId: this.state.objectiveId
        })
        .then(({data}) => {
            this.setState({
                taskData: data
            })
        })
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
            window.location.href ='/keyResults'

        })
        .catch((err) => {
            console.log(err);
        })
    }

    addProgress() {
        axios.post('/addProgress',{
            objectiveId: this.state.objectiveId,
            currentProgress: this.props.objectiveProgress
        })
            .then(() => {
                window.location.href = '/progress'
            })
            .catch((err) => {
                console.log(err);
            })

    }



    render() {
        const { keyresults } = this.props;
        const i = this.state.KRindex;
        const romanNumeral = {'0': 'I', '1': 'II', '2': 'III', '3': 'IV', '4': 'V'};
        return(
            <div>
                <ListGroup.Item
                    onClick={(() => this.setState({ open: !this.state.open }))}
                    aria-controls="keyresult-collapse-text"
                    aria-expanded={this.state.open}
                    action border="dark" variant="light"
                    style={{textAlign: 'center'}}>
                    {keyresults[String(i)][0].name}
                </ListGroup.Item>

                <Collapse in={this.state.open}>
                    <div id="keyresult-collapse-text">
                        <div style={{ fontFamily: 'OCR A Std, monospace', height: '3rem', fontSize: '18px', textAlign: 'center' }}>Tasks</div>

                        <ListGroup>
                            {this.state.taskData.map((taskObj, index) => (
                                <ListGroup.Item style={{ fontSize: '15px', textAlign: 'center' }}>{romanNumeral[String(index)]}.        {taskObj.task}</ListGroup.Item>
                            ))}
                        </ListGroup>

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
                                            fontSize: '1rem', left: '27rem',
                                            marginTop: '4rem', position: 'relative',
                                            textAlign: 'center', fontFamily: 'OCR A Std, monospace'
                                        }} />

                                    <Button variant="outline-dark" size="lg" block
                                        type="submit"
                                        style={{
                                            width: '8rem', position: 'relative',
                                            height: '25px', marginTop: '10px', left: '33rem',
                                            fontSize: '10px', paddingTop: '3px', fontFamily: 'OCR A Std, monospace'
                                        }}>
                                        Add
                                    </Button>
                                </Form>
                            </div>
                        </Collapse>
               
                        <Form onSubmit={(() => console.log('submitedd'))}>
                            <Form.Check
                                style={{
                                    width: '20rem', position: 'relative',
                                    height: '2rem',
                                    marginTop: '2rem',
                                    marginBottom: '2rem',
                                    fontFamily: 'OCR A Std, monospace',
                                    fontSize: '1rem', left: '28.5rem',
                                }}
                                onClick={this.addProgress}
                                id={`complete`}
                                label={`Mark ${keyresults[String(i)][0].name} as Completed`}
                            />
                        </Form>
                    </div>
                </Collapse>
            </div>
        )
    }

}



export default KeyResult;