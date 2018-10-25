import React from 'react';

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username:''
        }
    }

    inputChanged = ()=>{
        let val = this.refs.username.value;
        this.setState({
            username:val
        })
    }

    getInput = () =>{
        alert(this.state.username);
    }

    inputKeyUp = (event) => {
        alert(event.keyCode);
    }

    render() {
        return (
            <div>
                I am a List;
                {/* <input ref="username" onChange={this.inputChanged}/> */}
                <input ref="username" onKeyUp={this.inputKeyUp}/>
                <button onClick={this.getInput}>get data in input</button>
            </div>
        );
    }
}

export default List;