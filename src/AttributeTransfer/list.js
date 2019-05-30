import React, { Component } from "react";
import TodoItem from "./item";

export default class TodoList extends Component {
  render() {
    const { list, onRemoveItem } = this.props;
    return (
      <ul>
        {list.map((item, index) => (
          <TodoItem
            key={item + index}
            item={item}
            index={index}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </ul>
    );
  }
}
