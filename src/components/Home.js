import React from 'react';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            msg:'I am a home component',
            username:'normal username'
        }
    }

    run = (event)=>{
        // alert(this.state.msg);
        // console.log(event);
        alert(event.target);
        event.target.style.background='red';
    }

    inputChanged = (event)=>{
        this.setState({
            username : event.target.value
        });
    }

    render() {
        return(
            <div>
                {this.state.msg}
                <br/>
                {this.state.username}
                <button onClick ={this.run}>event object</button>
                <br/>
                <input onChange={this.inputChanged}/>
                <button>get data in input</button>
            </div>
        )
    }

}

export default Home;