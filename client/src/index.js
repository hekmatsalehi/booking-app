import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContexProvider } from "./contex/AuthContex";
import { SearchContexProvider } from "./contex/SearchContex";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContexProvider>
      <SearchContexProvider>
        <App />
      </SearchContexProvider>
    </AuthContexProvider>
  </React.StrictMode>
);
