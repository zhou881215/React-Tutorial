import React, { Component } from "react";
import InputBox from "./inputBox";
import TodoList from "./list";
import { Provider } from "./context"; // Provider 属性提供者

export default class AttributeTransfer extends Component {
  state = {
    list: [],
    value: ""
  };

  onChangeValue = e => {
    const value = e.target.value;
    this.setState({
      value
    });
  };

  onAddItem = () => {
    const { list, value } = this.state;
    if (!value) return;
    this.setState({
      list: [...list, value],
      value: ""
    });
  };

  onRemoveItem = index => {
    const { list } = this.state;
    list.splice(index, 1);
    this.setState({
      list
    });
  };

  render() {
    const { list, value } = this.state;
    return (
      <Provider value={{ onRemoveItem: this.onRemoveItem }}>
        {/*Provider组件传递属性，需要把传递的属性封成对象放入value里 */}
        <div>Attribute Transfer Props: TodoList</div>
        <div>
          数据单向流，子组件不能直接修改父组件传入的prors。
          所以把父组件方法传入子组件，子组件调用也就是父组件会执行：自己改变自己的state
        </div>
        <div>
          但是如果组件层级深，通过props传太麻烦了，React提供Context:
          React.createContext();
          16版本以后才有;Provider组件传递属性，需要把传递的属性封成对象放入value里
        </div>
        <InputBox
          value={value}
          onChangeValue={this.onChangeValue}
          onAddItem={this.onAddItem}
        />
        <TodoList list={list} />
      </Provider>
    );
  }
}
