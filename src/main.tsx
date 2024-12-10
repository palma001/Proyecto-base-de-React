import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import AuthLayout from "./layouts/AuthLayout";
import App from "./pages/App";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={'inicio de la app'} />

        <Route path="authentication" element={<AuthLayout />}>
          <Route path="login" element={<App />} />
          <Route path="register" element={'registro'} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
