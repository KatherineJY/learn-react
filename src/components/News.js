import React from 'react';
import pic from '../assests/images/1.jpg'

class News extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            msg:'news',
            list:['1111','222','333'],
            list2:[<h2>I am h2</h2>,<h2>I am h2</h2>,<h2>I am h2</h2>],
            list3:[
                {title:"news1"},
                {title:"news2"},
                {title:"news3"},
            ]
        }
    }

    render(){

        let lResult = this.state.list.map((value,key)=>{
            return <li key={key}>{value}</li>;
        })

        return(
            <div>
                {this.state.msg}
                <img src={pic} alt=""></img>
                <img src={ require("../assests/images/1.jpg")} alt=""></img>
                <hr/>

                {/* {this.state.list2} */}

                {
                    lResult
                }

                {
                    this.state.list3.map((value,key)=>{
                        return (<li key={key}>{value.title}</li>);
                    })
                }
            </div>
        )
    }
}

export default News;