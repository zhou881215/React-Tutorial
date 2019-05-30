import React, { Component } from "react";

export default class AttributeTransfer extends Component {
  render() {
    const { value, onChangeValue, onAddItem } = this.props;
    return (
      <div>
        <input type="text" value={value} onChange={onChangeValue} />
        <button onClick={onAddItem}>ClickAdd</button>
      </div>
    );
  }
}
