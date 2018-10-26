import React, { Component } from "react";

import axios from "axios";

class Axios extends Component {
  constructor(props) {
    super(props);
    this.state = {
        list:[]
    };
  }

  getData=()=> {
    //get data through axios
    let api ='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';   //接口后台允许了跨域

    axios
      .get(api)
      .then((response)=> {
        this.setState({
            list:response.data.result
        })
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h2>use axios</h2>
        <button onClick={this.getData}>get data from server api</button>
        <ul>
            {
                this.state.list.map((value,key)=>{
                    return <li key={key}>{value.title}</li>
                })
            }
        </ul>
      </div>
    );
  }
}

export default Axios;