import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Person extends Component {
  // 默认属性
  static defaultProps = {
    name: "Zhou",
    age: 20
  };
  // 属性校验 npm install --save prop-types
  // https://github.com/facebook/prop-types
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    sex: PropTypes.oneOf(["Male", "Female"]),
    figure: PropTypes.objectOf(PropTypes.number),
    hobby: PropTypes.arrayOf(PropTypes.string),
    salary: (props, propName, componentName) => {
      if (props[propName] < 10000) {
        return new Error(
          `${componentName}组件的${propName}属性出错 --> 属性校验出错只是抛出错误给开发者，不影响页面渲染`
        );
      }
    }
  };
  render() {
    const { name, age, sex, figure, hobby, salary } = this.props;

    return (
      <>
        <div>{`${name}'s Personal Data`}</div>
        <div>Age: {age}</div>
        <div>Sex: {sex}</div>
        <div>Stature: {figure.height}cm</div>
        <div>Weight: {figure.weight / 2} kg</div>
        <div>Hobbies: {hobby.map(item => `${item} / `)}</div>
        <div>Salary: {salary} / Monthly</div>
      </>
    );
  }
}
