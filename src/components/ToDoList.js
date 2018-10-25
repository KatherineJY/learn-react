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

  addData = () => {
    //alert(this.refs.title.value);
    let tempList = this.state.list;
    tempList.push({
      title: this.refs.title.value,
      checked: false
    });
    this.refs.title.value = "";
    this.setState({
      list: tempList
    });
  };

  deleteData = key => {
    let tempList = this.state.list;
    tempList.splice(key, 1);
    this.setState({
      list: tempList
    });
  };

  checkboxChange = (key) => {
      let tempList = this.state.list;
      tempList[key].checked = !tempList[key].checked;
      this.setState({
          list:tempList
      })
  }

  render() {
    return (
      <div>
        <h2>Todolist</h2>
        <input ref="title" />
        <button onClick={this.addData}>Add</button>
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
