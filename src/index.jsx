import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));
import './styles/global.css'

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);