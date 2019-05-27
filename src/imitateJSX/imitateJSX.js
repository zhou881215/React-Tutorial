// 模拟React渲染jsx过程
const React = {
  createElement: (type, props, ...children) => ({
    type,
    props,
    children
  })
};

const App = (
  <div id="test" title="Name">
    Cram
    <span id="aa" title="face">
      Smile
      <span id="aa" title="face">
        Haha <p>aaa</p>
      </span>
    </span>
  </div>
);

const render = (vNode, container) => {
  if (typeof vNode === "string") {
    // 文本节点插入父节点后返回
    const text = document.createTextNode(vNode);
    container.appendChild(text);
    return;
  }
  const { type, props, children } = vNode;
  const ele = document.createElement(type);
  for (let key in props) {
    if (!key.startsWith("__")) {
      ele.setAttribute(key, props[key]);
    }
  }
  children.forEach(item => {
    render(item, ele);
  });
  container.appendChild(ele);
};

render(App, document.getElementById("root"));
