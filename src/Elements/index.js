import React from "react";
import FunctionElement from "./ElementFunction";
import ClassElement from "./ElementClass";

const topList = [
  {
    id: 0,
    title: "老年人才用9键",
    new: true,
    hot: "46万"
  },
  {
    id: 1,
    title: "人贩子张维平死刑",
    new: true,
    hot: "44万"
  },
  {
    id: 2,
    title: "全国冻哭预警地图",
    new: false,
    hot: "35万"
  }
];

function Elements() {
  return (
    <>
      <FunctionElement list={topList} />
      <ClassElement />
    </>
  );
}

export default Elements;
