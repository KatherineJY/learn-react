import React from 'react';

import Header from './Header'
import Axios from './Axios'

class Home extends React.Component {

    constructor(props){
        super(props);        
        this.state={
          msg:'我是一个首页组件',
          title:'首页组件'
        }
    }

    getChildData = (result) => {
        alert(result);
    }

    render() {
        return (
          <div>        
            <Axios />
          </div>
        );
      }

}

export default Home;