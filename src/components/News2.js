import React, { Component } from 'react';

class News extends Component {
    
    constructor (props) {
        //父子组件传值
        super(props);

        //define data
        this.state = {
            userinfo:'zhangsan'
        }
    }

    render() {
        return(
            <div>
                <h2>{this.state.userinfo}</h2>
                <ul>
                    <li>this is a list</li>
                    <li>this is a list</li>
                    <li>this is a list</li>
                    <li>this is a list</li>
                </ul>
            </div>
        );
    }

}

export default News;