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

    render() {
        return(
            <div>
                <button onClick={this.run}>Run function</button>
                <button onClick={this.getData.bind(this)}>Get data</button>
                <button onClick={this.getMsg}>Get msg</button>
            </div>
        )
    }
}

export default Home;