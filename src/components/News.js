import React from 'react';
import pic from '../assests/images/1.jpg'

class News extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            msg:'news',
        }
    }

    render(){
        return(
            <div>
                {this.state.msg}
                <img src={pic} alt=""></img>
                <img src={ require("../assests/images/1.jpg")} alt=""></img>
                
            </div>
        )
    }
}

export default News;