import React from "react";
import Person from "./person";

const personInfo = {
  name: "Cram",
  age: 30,
  sex: "Male",
  figure: {
    weight: 160,
    height: 175
  },
  hobby: ["Reading", "Coding", "Shopping"],
  salary: 1000
};

const AttributeCheck = () => <Person {...personInfo} />;

export { AttributeCheck }; // 用es6普通导出, 接收时改个名字
