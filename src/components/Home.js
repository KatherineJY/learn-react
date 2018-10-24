import React from 'react';

import '../assests/css/index.css'

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            msg : 'I am a Home',
            title: 'I am a component',
            color: 'red'
        }
    }

    render() {
        return(
            <div>
                <h2>{this.state.msg}</h2>
                <div title={this.state.title}>I am a div </div>
                <div className={this.state.color}>I am a red div </div>            
            </div>
        )
    }
}

export default Home;