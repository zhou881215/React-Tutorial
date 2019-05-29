import React from "react";
import { render } from "react-dom";
import JSXBase from "./JSXBase";
import Elements from "./Elements";
import Control from "./Control";

const APP = [<JSXBase />, <Elements />, <Control />];
// const APP = <div>Cram</div>;
render(APP, document.getElementById("root"));
