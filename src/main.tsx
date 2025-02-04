import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Asegúrate de que se ha importado correctamente
import App from "./App";
import "./theme.css";

// Crear el root con createRoot
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Asegúrate de que BrowserRouter está envolviendo a tu aplicación */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
