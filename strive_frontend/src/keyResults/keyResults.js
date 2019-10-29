import React from 'react';
import styled from 'styled-components';
import KeyResult from './keyResult.js';
import { Card, Button, Form, ButtonToolbar } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import _ from 'underscore';


const Container = styled.div`
    width: 1150px;
`;



class KeyResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
            skip: 0
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
                            </div>
                        )
                        var keyresults = obj.key_results;
                        var objIndex = objectives.indexOf(obj);
                        var progress = obj.progress;
                
                        for(let i in keyresults) {
                            displayKRS.push(<KeyResult removeKey={this.removeKey} keyresults={keyresults} index={Number(i)} objectiveId={objIndex} objectiveProgress={progress}/>)
                        }
                        return displayKRS;
                    })}
                </Container>
        </div>
    )}
};

export default KeyResults;