import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state={
            msg:'this is a header'
        }
    }
    

    render() {
        return (
            <div>
                <h2>from Father:{this.props.title}</h2>
                This is a header component
                <button onClick={this.props.news.getChildData.bind(this,'from child')}>send data to father</button>
            </div>
        );
    }
}

export default Header;