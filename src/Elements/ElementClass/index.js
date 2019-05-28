import React, { Component } from "react";

class ClassElement extends Component {
  // es7语法
  state = {
    inValue: "",
    list: []
  };

  onChange = e => {
    this.setState({
      inValue: e.target.value
    });
  };

  onAdd = () => {
    const { inValue, list } = this.state;
    this.setState({
      inValue: "",
      list: [...list, inValue]
    });
  };

  onRemove = index => {
    const { list } = this.state;
    list.splice(index, 1);
    this.setState({
      list
    });
  };

  render() {
    const { inValue, list } = this.state;
    return (
      <>
        <div>TodoList: 类组建</div>
        <div>
          <input type="text" value={inValue} onChange={this.onChange} />
          <button onClick={this.onAdd}>ADD</button>
        </div>
        <ul>
          {list.map((item, index) => (
            <li key={item + index}>
              {item} <button onClick={() => this.onRemove(index)}>X</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ClassElement;
