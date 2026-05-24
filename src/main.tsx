/** @jsxRuntime classic */
// @ts-ignore: Ignore missing react-dom type declarations in this environment
import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
// @ts-ignore: Side-effect CSS import without type declarations
import "./styles/index.css";

ReactDOM.render(<App/>, document.getElementById("root"));