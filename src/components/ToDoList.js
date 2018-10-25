import React, { Component } from 'react';

class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list:[

            ]
        };
    }

    addData = () => {
        //alert(this.refs.title.value);
        let tempList = this.state.list;
        tempList.push(this.refs.title.value);
        this.refs.title.value="";
        this.setState({
            list:tempList
        })
    }
    
    deleteData = (key) => {
        let tempList = this.state.list;
        tempList.splice(key,1);
        this.setState({
            list:tempList
        })
    }

    render() {
        return (
            <div>
                <h2>Todolist</h2>

                <input ref="title"/><button onClick={this.addData}>Add</button>

                <ul>
                    {
                        this.state.list.map((value,key) => {
                            return (
                                <li key={key}>
                                    {value}
                                    <button onClick={this.deleteData.bind(this,key)}>Delete</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ToDoList;
