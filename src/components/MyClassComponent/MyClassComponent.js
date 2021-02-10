import React from 'react';

class MyClassComponent extends React.Component {
    state = { text: 'test text' }
    render() {
        return (
            <React.Fragment>
                <input type="text" value={this.state.text} onChange={this.handleChange} />
                <h1>{this.state.text}</h1>
            </React.Fragment>
        );
    }
    handleChange = (e) => {
        this.setState({
            text: e.target.value.toUpperCase()
        })
    }
}

export default MyClassComponent;