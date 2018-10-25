import React, { Component } from "react";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          title: "录制ionic",
          checked: true
        },
        {
          title: "录制nodejs",
          checked: false
        },
        {
          title: "录制egg.js",
          checked: true
        },
        {
          title: "录制vue",
          checked: false
        }
      ]
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
      localStorage.setItem('todolist',JSON.stringify(this.state.list));
    }
  };

  deleteData = key => {
    let tempList = this.state.list;
    tempList.splice(key, 1);
    this.setState({
      list: tempList
    });
    //store data
    localStorage.setItem('todolist',JSON.stringify(this.state.list));
  };

  checkboxChange = key => {
    let tempList = this.state.list;
    tempList[key].checked = !tempList[key].checked;
    this.setState({
      list: tempList
    });
    //store data
    localStorage.setItem('todolist',JSON.stringify(this.state.list));
  };

  //页面加载就会触发
  componentDidMount(){
    //获取缓存数据
    let templist = JSON.parse(localStorage.getItem('todolist'));
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
