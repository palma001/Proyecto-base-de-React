import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import AuthLayout from "./layouts/AuthLayout";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import { ROUTES } from "./routes/routes";
import LoginPage from "./pages/auth/loginPage";
import RegisterPage from "./pages/auth/registerPage";
import Home from "./pages/landing/home";
import ForgotPasswordPage from "./pages/auth/forgotPasswordPage";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <Routes>

          <Route path={ROUTES.HOME} element={<Home />} />

          <Route path={ROUTES.AUTH} element={<AuthLayout />}>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
            <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  </StrictMode>
);
