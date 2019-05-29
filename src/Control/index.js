import React, { Component } from "react";

export default class ControlElem extends Component {
  state = {
    taskA: "",
    taskB: "",
    list: []
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleAdd = e => {
    const name = e.target.name;
    let taskText = this.state[name];
    if (!taskText) {
      return;
    }
    const { list } = this.state;
    if (name === "taskA") {
      taskText = `TaskA:${taskText}`;
    } else if (name === "taskB") {
      taskText = `TaskB:${taskText}`;
    }
    this.setState({
      list: [...list, taskText],
      [name]: ""
    });
  };

  render() {
    const { taskA, taskB, list } = this.state;
    return (
      <>
        <div>受控与非受控一般都是表单元素</div>
        <div>Control Element：受控组件，受状态控制的组件</div>
        <div>
          TaskA:
          <input
            name="taskA"
            type="text"
            value={taskA}
            onChange={this.handleChange}
          />
          <button name="taskA" onClick={this.handleAdd}>
            添加A任务
          </button>
        </div>
        <div>
          TaskB:
          <input
            name="taskB"
            type="text"
            value={taskB}
            onChange={this.handleChange}
          />
          <button name="taskB" onClick={this.handleAdd}>
            添加B任务
          </button>
        </div>
        <ul>
          {list.map((item, index) => (
            <li key={item + index}>{item}</li>
          ))}
        </ul>
      </>
    );
  }
}
