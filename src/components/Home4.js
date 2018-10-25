import React from 'react';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            msg:"cc"
        }

        //this.getMsg = this.getMsg.bind(this);
    }

    run(){
        alert("I am a fun function");
    }
 
    getData(){
        alert(this.state.msg);
    }

    getMsg=()=>{
        alert(this.state.msg);
    }

    setMsg = (newMsg)=>{
        this.setState({
            msg:newMsg
        })
    }

    render() {
        return(
            <div>
                <h2>{this.state.msg}</h2>
                <button onClick={this.run}>Run function</button>
                <button onClick={this.getData.bind(this)}>Get data</button>
                <button onClick={this.getMsg}>Get msg</button>
                <button onClick={this.setMsg.bind(this,'nnn')}>Set msg</button>
            </div>
        )
    }
}

export default Home;