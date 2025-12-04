import React from "react";
import ReactDOM from "react-dom/client";
import App from "../App"; // 因为你的 App.tsx 在根目录

import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
