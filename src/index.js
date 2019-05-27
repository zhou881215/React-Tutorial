import React from "react";
import { render } from "react-dom";
import JSXBase from "./JSXBase";
import Elements from "./Elements";

const APP = [<JSXBase />, <Elements />];
// const APP = <div>Cram</div>;
render(APP, document.getElementById("root"));
