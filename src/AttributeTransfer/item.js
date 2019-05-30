import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { item, index, onRemoveItem } = this.props;
    return (
      <li>
        {item}
        <button
          onClick={() => {
            onRemoveItem(index);
          }}
        >
          Remove
        </button>
      </li>
    );
  }
}
