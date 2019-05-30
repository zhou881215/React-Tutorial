import React, { Component } from "react";
import { Consumer } from "./context";

export default class TodoItem extends Component {
  render() {
    const { item, index } = this.props;
    return (
      <Consumer>
        {({ onRemoveItem }) => (
          <li>
            {item}
            <button
              onClick={() => {
                onRemoveItem(index);
              }}
            >
              Remove
            </button>
            <div>
              Consumer组件接收传递的属性，组件内部需要一个函数，参数为Provider传递过来的对象
            </div>
          </li>
        )}
      </Consumer>
    );
  }
}
