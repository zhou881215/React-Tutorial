import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor() {
    console.log(`2.constructor`);
    super();
  }

  componentWillMount() {
    console.log(`2.componentWillMount`);
  }

  render() {
    console.log(`2.render`);
    const { count } = this.props;
    return (
      <>
        <h4>Old Child Life Cycle</h4>
        <div>{`child count：${count}`}</div>
      </>
    );
  }

  componentDidMount() {
    console.log(`2.componentDidMount`);
  }

  componentWillReceiveProps(nextProps) {
    // 这时可以发送ajax,
    // 也可以setState（接收的nextProps是父组件传入的新的props）
    // 但是官方不建议；而且在16.3版本后也移除了
    console.log(`2.componentWillReceiveProps`);
  }

  shouldComponentUpdate() {
    console.log(`2.shouldComponentUpdate?`);
    return true;
  }

  componentWillUpdate() {
    console.log(`2.componentWillUpdate`);
  }

  componentDidUpdate() {
    console.log(`2.componentDidUpdate`);
  }

  componentWillUnmount() {
    console.log(`2.componentWillUnmount`);
  }
}
