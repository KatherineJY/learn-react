import React, { Component } from "react";

class ReactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "react form",
      name: "",
      sex: "1",
      city: "",
      citys: ["BeiJing", "ShangHai", "ShenZhen"],
      hobby: [
        {
          title: "sleep",
          checked: true
        },
        {
          title: "eat",
          checked: false
        },
        {
          title: "coding",
          checked: true
        }
      ],
      info: ""
    };
  }

  handelSubmit = e => {
    e.preventDefault();
    console.log(this.state.name);
  };

  handelName = e => {
    this.setState({
      name: e.target.value
    });
  };

  handelSex = e => {
    this.setState({
      sex: e.target.value
    });
  };

  handelCity = e => {
    this.setState({
      city: e.target.value
    });
  };

  handelHobby = (key) => {
    let hobby = this.state.hobby;
    hobby[key].checked = !hobby[key].checked;
    this.setState({
        hobby:hobby
    })
  }

  handelInfo = (e) =>{
      this.setState({
          info:e.target.value
      })
  }

  render() {
    return (
      <div>
        {this.state.msg}

        <form>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handelName}
          />
          Boy
          <input
            type="radio"
            value="1"
            checked={this.state.sex === "1"}
            onChange={this.handelSex}
          />
          Girl
          <input
            type="radio"
            value="2"
            checked={this.state.sex === "2"}
            onChange={this.handelSex}
          />
          citys
          <select value={this.state.city} onChange={this.handelCity}>
            {this.state.citys.map((value, key) => {
              return <option key={key}>{value}</option>;
            })}
          </select>
          hobbies
          {this.state.hobby.map((value, key) => {
            return (
              <span key={key}>
                <input type="checkbox" checked={value.checked} onChange={this.handelHobby.bind(this,key)} />
                {value.title}
              </span>
            );
          })}
          <textarea value={this.state.info} onChange={this.handelInfo} />

          <input type="submit" value="submit" onClick={this.handelSubmit} />
        </form>
      </div>
    );
  }
}

export default ReactForm;
