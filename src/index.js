import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"; //our bundled component //app is highest component
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
); //reactDOM takes two argument, App component and a entry point/root point in index.html

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
