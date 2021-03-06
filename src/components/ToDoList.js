import React, { Component } from "react";

import storage from '../model/storage'

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  addData = (e) => {
    //alert(this.refs.title.value);
    if (e.keyCode == 13) {
      let tempList = this.state.list;
      tempList.push({
        title: this.refs.title.value,
        checked: false
      });
      this.refs.title.value = "";
      this.setState({
        list: tempList
      });

      //store data
      storage.set('todolist',this.state.list);
    }
  };

  deleteData = key => {
    let tempList = this.state.list;
    tempList.splice(key, 1);
    this.setState({
      list: tempList
    });
    //store data
    storage.set('todolist',this.state.list)
  };

  checkboxChange = key => {
    let tempList = this.state.list;
    tempList[key].checked = !tempList[key].checked;
    this.setState({
      list: tempList
    });
    //store data
    storage.set('todolist',this.state.list)
  };

  //页面加载就会触发
  componentDidMount(){
    //获取缓存数据
    let templist = storage.get("todolist");
    if(templist){
        this.setState({
            list:templist
        })
    }

  }

  render() {
    return (
      <div>
        <h2>Todolist</h2>
        <input ref="title" onKeyUp={this.addData} />
        <br />
        To Do
        <ul>
          {this.state.list.map((value, key) => {
            if (!value.checked) {
              return (
                <li key={key}>
                  <input
                    type="checkbox"
                    checked={value.checked}
                    onChange={this.checkboxChange.bind(this, key)}
                  />
                  {value.title}
                  <button onClick={this.deleteData.bind(this, key)}>
                    Delete
                  </button>
                </li>
              );
            } else return "";
          })}
        </ul>
        Has Finished
        <ul>
          {this.state.list.map((value, key) => {
            if (value.checked) {
              return (
                <li key={key}>
                  {value.title}
                  <button onClick={this.deleteData.bind(this, key)}>
                    Delete
                  </button>
                </li>
              );
            } else return "";
          })}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
