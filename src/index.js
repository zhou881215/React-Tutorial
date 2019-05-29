import React from "react";
import { render } from "react-dom";
import "./index.css";
import JSXBase from "./JSXBase";
import Elements from "./Elements";
import Control from "./Control";
import UnControl from "./UnControl";

const APP = [
  <JSXBase />,
  <hr className="hr" />,
  <Elements />,
  <hr className="hr" />,
  <Control />,
  <hr className="hr" />,
  <UnControl />
];
// const APP = <div>Cram</div>;
render(APP, document.getElementById("root"));
