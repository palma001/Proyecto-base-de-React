import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./tailwind.css";
import "./i18n";
import { Toaster } from 'sonner'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="min-h-screen">
        <RouterProvider router={router} fallbackElement={<>Loading</>} />
        <Toaster richColors closeButton position="top-center" />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
