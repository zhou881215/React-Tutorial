import React, { Component } from "react";
import Child from "./Child";

// 16.3版本以后移除了componentWillMount、componentWillReceiveProps、componentWillUpdate
// 编辑时版本为16.8.6，预计在17版本将不能再用这三个生命周期 --> 现阶段新的老的都能用
export default class LifeCycle extends Component {
  static defaultProps = {};
  static propTypes = {};
  constructor() {
    console.log(`1.constructor`);
    super();
    this.state = {
      count: 0
    };
  }

  componentWillMount() {
    // 这时可以发送ajax,但是官方不建议，在constructor里面也能发送；而且在16.3版本后也移除了
    console.log(`1.componentWillMount`);
  }

  render() {
    // 只是用来渲染，不要发送ajax,也不要setState
    console.log(`1.render`);
    const { count } = this.state;
    return (
      <>
        <h4>Old Life Cycle</h4>
        <div>
          {`count：${count}`} <button onClick={this.onClick}>Add count</button>
        </div>
        <Child count={count} />
        {/* {!count ? <Child count={count} /> : ""} */}
      </>
    );
  }

  componentDidMount() {
    // 最好的地方：可以发用ajax,setState,初始化时推荐在此时用
    console.log(`1.componentDidMount`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 可以优化性能：react只知道props或state有变化，而不知道是否真的改变了（也许一个数值加了0）
    // 如果不拦截，总是会重新render,组件里面的子组件也会render.虽然react是改变虚拟DOM,但也是改变了会消耗性能
    // 所有需要拦截下

    console.log(`1.shouldComponentUpdate?`);
    // 询问组件是否要更新：
    // 1.true走后面的生命周期；
    return !(nextState.count === this.state.count);

    // 2.false不再走,但是state还是改变了的
    // let { count } = this.state;
    // console.log(count);
    // return false;
  }

  componentWillUpdate() {
    // 不能setState,会死循环；此时再发送ajax也没必要，数据在初始化时拿
    console.log(`1.componentWillUpdate`);
  }

  componentDidUpdate() {
    // 不能setState,会死循环；此时再发送ajax也没必要，数据在初始化时拿
    console.log(`1.componentDidUpdate`);
  }

  onClick = () => {
    let { count } = this.state;
    this.setState({
      count: (count += 1)
    });
  };
}
