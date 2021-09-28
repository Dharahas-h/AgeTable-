import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);
