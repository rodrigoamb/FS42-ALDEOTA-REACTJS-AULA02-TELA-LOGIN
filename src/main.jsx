import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import FuncionariosPage from "./pages/FuncionariosPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/funcionarios" element={<FuncionariosPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
