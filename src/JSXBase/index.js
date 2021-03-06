import React from "react";
import "./style.css";

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
  },
  {
    id: 3,
    title: "沈梦辰晒婚纱照",
    new: false,
    hot: "33万"
  },
  {
    id: 4,
    title: "恋爱4个月胖50近",
    new: true,
    hot: "32万"
  },
  {
    id: 5,
    title: "郭麒麟初中早恋",
    new: false,
    hot: "25万"
  }
];

function JSXBase() {
  return (
    <div className="wrapper">
      <div className="search-title-box">
        <h5 className="search-title">JSX-Base 搜索热点</h5>
        <span className="refresh">换一换</span>
      </div>
      <ul className="top-list-container">
        {topList.map((item, index) => {
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

export default JSXBase;
