import React from "react";
import { render } from "react-dom";
import "./index.css";
import JSXBase from "./JSXBase";
import Elements from "./Elements";
import Control from "./Control";
import UnControl from "./UnControl";
import { AttributeCheck as AttrCheck } from "./AttributeCheck";
import AttributeTransfer from "./AttributeTransfer";

const APP = [
  <JSXBase />,
  <hr className="hr" />,
  <Elements />,
  <hr className="hr" />,
  <Control />,
  <hr className="hr" />,
  <UnControl />,
  <hr className="hr" />,
  <AttrCheck />,
  <hr className="hr" />,
  <AttributeTransfer />
];

render(APP, document.getElementById("root"));
