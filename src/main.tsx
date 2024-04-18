import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BudetProvider } from "./context/budget.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BudetProvider>
      <App />
    </BudetProvider>
  </React.StrictMode>
);
