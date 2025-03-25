import Navbar from "../components/Landing/Navbar";
import { title } from "../components/primitives";
import { Navigate, Outlet } from "react-router";
import { authenticationStore } from "../stores/authorization";

export default function AuthLayout() {
  const { session } = authenticationStore();

  if (session) return <Navigate to="/admin/home" />;

  return (
    <>
      <Navbar />
      <title>Subscription | Inicio de sesión</title>
      <div className="mt-10 flex justify-center items-center p-3">
        <div className="text-center grid w-full max-w-md flex-col gap-4 rounded-large bg-content1 px-3 pb-10 pt-6 shadow-small">
          <span className={title({ color: "blue" })}>Subscription</span>
          <Outlet />
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 text-default-500 text-sm h-[100px]">
        Powered by
        <span className="text-stone-700">
          <a
            href="https://site.qbitsinc.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500"
          >
            Qbits Inc
          </a>
        </span>
      </div>
    </>
  );
}
