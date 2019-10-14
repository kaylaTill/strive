import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class UserHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: {}
        }
    }

    componentDidMount() {
        axios.get('/quote')
            .then(({ data }) => {
                this.setState({
                    quote: {
                        quote_text: data.quote_text,
                        quote_author: data.quote_author
                    }
                })
            })
    }


    render() {
        return (
            <div>
                <div>{`${this.state.quote.quote_text}`}</div>
                <div>{`- ${this.state.quote.quote_author}`}</div>
            </div>

        );
    }
}

export default UserHomePage;