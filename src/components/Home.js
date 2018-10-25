import React from 'react';

import Header from './Header'

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
            
  
              <Header title={this.state.title} />
              这是首页组件的内容
              
                
          </div>
        );
      }

}

export default Home;