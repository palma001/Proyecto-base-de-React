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
      <title>Quote | Inicio de sesión</title>
      <div className="mt-10 w-[100wh] flex justify-center items-center">
        <div className="text-center  grid w-full max-w-md flex-col gap-4 rounded-large bg-content1 pb-10 pt-6 shadow-small">
          <span className={title({ color: "violet" })}>Quote</span>
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
            className="text-quanto"
          >
            &nbsp;Quote
          </a>
        </span>
      </div>
    </>
  );
}
