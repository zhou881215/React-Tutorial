import React, { Component } from "react";

export default class ControlElem extends Component {
  taskA = React.createRef(); // 16.3后才有

  state = {
    list: []
  };

  handleAdd = e => {
    const name = e.target.name;
    let taskText = "";
    const { list } = this.state;
    if (name === "taskA") {
      taskText = `TaskA:${this[name].current.value}`;
      this[name].current.value = "";
    } else if (name === "taskB") {
      taskText = `TaskB:${this[name].value}`;
      this[name].value = "";
    }
    this.setState({
      list: [...list, taskText]
    });
  };

  render() {
    const { list } = this.state;
    return (
      <>
        <div>UnControl Element：非受控组件，通过操作DOM的形式来操作值</div>
        <div>
          TaskA:
          <input type="text" ref={this.taskA} />
          {/* 16.3 版本之后用这种形式 */}
          <button name="taskA" onClick={this.handleAdd}>
            添加A任务
          </button>
        </div>
        <div>
          TaskB:
          <input type="text" ref={dom => (this.taskB = dom)} />
          {/* 16.3 版本之前用这种形式 */}
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
