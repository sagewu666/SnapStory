import React from "react";
import ReactDOM from "react-dom/client";
import App from "../App"; // 注意这里是 .. 不是 .

import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
