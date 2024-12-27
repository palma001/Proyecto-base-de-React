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
      <title>Bingo Online</title>
      <div className="h-[calc(100vh-200px)] w-[100wh] flex justify-center items-center">
        {/* <div className="bg-[url('/image/bg_quanto.jpeg')] hidden bg-cover bg-center bg-no-repeat md:col-span-3 sm:flex flex-col justify-center shadow-lg gap-5 relative"></div> */}
        <div className="text-center  grid w-full max-w-md flex-col gap-4 rounded-large bg-content1 pb-10 pt-6 shadow-small">
          <span className={title({ color: "violet" })}>Bingo online</span>
          <Outlet />
        </div>
      </div>
      <div className="absolute bottom-5 left-0 right-0 flex justify-center items-center gap-2 text-default-500 text-sm">
        Powered by
        <span className="text-stone-700">
          <a
            href="https://site.qbitsinc.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-quanto"
          >
            &nbsp;Bingo online
          </a>
        </span>
      </div>
    </>
  );
}
