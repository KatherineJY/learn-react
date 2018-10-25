import React, { Component } from 'react';

import PropTypes from 'prop-types'

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
             </div>
        );
    }
}

Header.defaultProps = {
    title:'title'
}

Header.PropTypes = {
    title:PropTypes.string
}

export default Header;