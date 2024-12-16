import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <>
      <title>Auth | Tienda</title>
      <div className="h-screen grid grid-cols-5 gap- font-poppins">
        <div className="bg-[url('/image/bg_quanto.jpeg')] hidden bg-cover bg-center bg-no-repeat md:col-span-3 sm:flex flex-col justify-center shadow-lg gap-5 relative">
        </div>
        <div className="flex flex-col col-span-5 md:col-span-2 py-20 gap-4 relative">
          <div className="flex gap-2 items-center justify-center text-quanto font-semibold">
            <img src="/image/quanto.svg" alt="quanto tienda online" />
            Quanto
          </div>
          {/* <div className="w-[80%] mx-auto">
            <h3 className="text-xl font-bold">Bienvenido de nuevo</h3>
          </div> */}
          <div className="w-[90%] md:max-w-[80%] mx-auto">
            <Outlet />
          </div>
          <div className="absolute bottom-0 mb-5 text-center w-full text-sm">
            Powered by
            <span className="text-stone-700">
              <a
                href="https://site.qbitsinc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-quanto">
                &nbsp;Qbits Technologies
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}