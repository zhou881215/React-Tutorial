import React, { Component } from "react";
import Child from "./Child";

// 16.3版本以后移除了componentWillMount、componentWillReceiveProps、componentWillUpdate
// 编辑时版本为16.8.6，预计在17版本将不能再用这三个生命周期 --> 现阶段新的老的都能用
export default class NewLifeCycle extends Component {
  static defaultProps = {};
  static propTypes = {};
  constructor() {
    console.log(`3.constructor`);
    super();
    this.state = {
      count: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    // 替代componentWillReceiveProps，将接收到的props值可以赋给state --> 也是不建议，但是比之前的更安全了
    // 第一次挂载就会执行，所有安全
    console.log(`3.getDerivedStateFromProps`, props, state);
    return { w: 100 }; // 必须有返回值, 此时返回的值就会被自动设置到state里面
  }

  render() {
    // 只是用来渲染，不要发送ajax,也不要setState
    console.log(`3.render`);
    const { count } = this.state;
    return (
      <>
        <h4>New Life Cycle</h4>
        <div>
          {`count：${count}`} <button onClick={this.onClick}>Add count</button>
        </div>
        <Child count={count} />
      </>
    );
  }

  componentDidMount() {
    // 最好的地方：可以发用ajax,setState,初始化时推荐在此时用
    console.log(`3.componentDidMount`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 可以优化性能：react只知道props或state有变化，而不知道是否真的改变了（也许一个数值加了0）
    // 如果不拦截，总是会重新render,组件里面的子组件也会render.虽然react是改变虚拟DOM,但也是改变了会消耗性能
    // 所有需要拦截下
    console.log(`3.shouldComponentUpdate?`);
    return !(nextState.count === this.state.count);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 更新前获得快照
    console.log(`3.getSnapshotBeforeUpdate`);
    return { a: 1 }; // 必须有返回值
    // 有这个生命周期就必须有componentDidUpdate，这个返回的值会给componentDidUpdate的第三个参数
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log(`3.componentDidUpdate`, snapShot);
  }

  onClick = () => {
    let { count } = this.state;
    this.setState({
      count: (count += 1)
    });
  };
}
