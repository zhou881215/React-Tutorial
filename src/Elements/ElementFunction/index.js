import React from "react";
import "./style.css";
// 函数组件没有this,也没有生命周期
function FunctionElement(props) {
  const { list } = props;
  // console.log(props);
  // console.log(this);
  return (
    <div className="wrapper">
      <div className="search-title-box">
        <h5 className="search-title">函数组建：没有this, 没有生命周期</h5>
        <span className="refresh">换一换</span>
      </div>
      <ul className="top-list-container">
        {list.map((item, index) => {
          const indexStyle = {};
          switch (index) {
            case 0:
              indexStyle.backgroundColor = "#f54545";
              break;
            case 1:
              indexStyle.backgroundColor = "#ff8547";
              break;
            case 2:
              indexStyle.backgroundColor = "#ffac38";
              break;
            default:
              break;
          }
          return (
            <li className="top-title" key={item.id}>
              <div>
                <span className="hot-index" style={indexStyle}>
                  {++index}
                </span>
                <span className="topic-title">{item.title}</span>
                {item.new && <span className="topic-new">新</span>}
              </div>
              <div className="hot-degree">{item.hot}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FunctionElement;
