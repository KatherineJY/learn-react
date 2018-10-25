import React, { Component } from 'react';

class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:""
        };
    }
    
    inputChange = (e) => {
        this.setState({
            username:e.target.value
        });
    }

    render() {
        return (
            <div>
                <input defaultValue={this.state.username} onChange={this.inputChange}/>
                {this.state.username}
            </div>
        );
    }
}

export default ToDoList;
