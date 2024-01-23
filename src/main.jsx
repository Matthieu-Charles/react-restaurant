import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ConfettiProvider } from "./utils/context/ConfettiContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfettiProvider>
      <App />
    </ConfettiProvider>
  </React.StrictMode>
);
