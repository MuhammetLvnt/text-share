import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { LangContextProvider } from "./contexts/LangContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LangContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </LangContextProvider>
  </BrowserRouter>
);
