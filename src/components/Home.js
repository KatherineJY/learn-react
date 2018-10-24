import React, { Component } from 'react';

class Home extends Component{

    constructor() {

        super();
        
        //define data
        this.state = {
            name:'Kat',
            age:'40',
            userinfo:{
                username:"itying"
            }
        } 
    }

    render(){
        return (
            <div>
                <p>name:{this.state.name}</p>
                <p>age:{this.state.age}</p>
                <p>userinfo:{this.state.userinfo.username}</p>
            </div>
        );
    }
}

export default Home;