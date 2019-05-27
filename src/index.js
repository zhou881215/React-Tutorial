import React from "react";
import { render } from "react-dom";

const Element = (
  <>
    <div>
      <h5>搜索热点</h5>
      <span>换一换</span>
    </div>
    <ul>
      <li>
        <div>
          <span>1</span>
          <span>大厦的哈山东省</span>
          <span>新</span>
        </div>
        <div>47万</div>
      </li>
    </ul>
  </>
);

render(Element, document.getElementById("root"));
