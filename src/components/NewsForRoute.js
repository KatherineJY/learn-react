import React, { Component } from "react";
import {Link} from 'react-router-dom';



class NewsForRoute extends Component {
  constructor(props) {
    super(props);
    
    this.state = {  

        list:[

            {
                aid:'11',
                title:'我是新闻1111'
            },
            {
                aid:'222',
                title:'我是新闻222'
            },
            {
                aid:'3',
                title:'我是新闻333'
            },
            {
                aid:'4',
                title:'我是新闻4444'
            }
        ]
    };
  }

  render() {
    return (
      <ul>
        {this.state.list.map((value, key) => {
          return (
              <li key={key}>
                  <Link to={`/content/${value.aid}`}>{value.title}</Link>
              </li>
          );
        })}
      </ul>
    );
  }
}

export default NewsForRoute;
