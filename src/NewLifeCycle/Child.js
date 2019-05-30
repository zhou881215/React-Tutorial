import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor() {
    console.log(`4.constructor`);
    super();
    this.state = {
      count: 0
    };
  }
  static getDerivedStateFromProps(props, state) {
    // 必须有返回值
    console.log(`4.getDerivedStateFromProps`);
    return null;
  }

  render() {
    console.log(`4.render`);
    const { count } = this.props;
    return (
      <>
        <h4>New Child Life Cycle</h4>
        <div>{`child count：${count}`}</div>
      </>
    );
  }

  componentDidMount() {
    console.log(`4.componentDidMount`);
  }

  shouldComponentUpdate() {
    console.log(`4.shouldComponentUpdate?`);
    return true;
  }

  getSnapshotBeforeUpdate() {
    // 更新前获得快照
    // 必须有返回值
    console.log(`4.getSnapshotBeforeUpdate`);
    return null;
  }

  componentDidUpdate() {
    console.log(`4.componentDidUpdate`);
  }
}
