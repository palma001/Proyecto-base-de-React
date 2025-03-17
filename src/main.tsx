import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import AuthLayout from "./layouts/AuthLayout";
import "./index.css";
import { ROUTES } from "./routes/routes";
import LoginPage from "./pages/auth/loginPage";
import RegisterPage from "./pages/auth/registerPage";
import Home from "./pages/landing/home";
import Stores from "./pages/landing/stores";
import ForgotPasswordPage from "./pages/auth/forgotPasswordPage";
import { Provider } from "./provider";
import DASHBOARD from "./pages/admin/home/page";
import AdminLayout from "./pages/admin/layout";
import Metadata from "./pages/admin/metadata/page";
import MetadataAdd from "./pages/admin/metadata/add/page";
import MetadataShow from "./pages/admin/metadata/show/page";
import Profile from "./pages/profile/page";
import "./i18n";
import { Toaster } from "sonner";

const domNode = document.getElementById("root");

if (domNode) {
  const root = ReactDOM.createRoot(domNode);

  try {
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <Provider>
            <Routes>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.STORES} element={<Stores />} />
              <Route path={ROUTES.ADMIN} element={<AdminLayout />}>
                <Route path={ROUTES.DASHBOARD} element={<DASHBOARD />} />
                <Route path={ROUTES.ADMIN_METADATA} element={<Metadata />} />
                <Route
                  path={ROUTES.ADMIN_METADATA_ADD}
                  element={<MetadataAdd />}
                />
                <Route path={ROUTES.PROFILE} element={<Profile />} />
                <Route
                  path={ROUTES.ADMIN_METADATA_SHOW}
                  element={<MetadataShow />}
                />
              </Route>
              <Route path={ROUTES.AUTH} element={<AuthLayout />}>
                <Route path={ROUTES.LOGIN} element={<LoginPage />} />
                <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
                <Route
                  path={ROUTES.FORGOT_PASSWORD}
                  element={<ForgotPasswordPage />}
                />
              </Route>
            </Routes>
            <Toaster />
          </Provider>
        </BrowserRouter>
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Error en la renderización:", error);
  }
} else {
  console.error("El nodo raíz no se encontró en el DOM.");
}
