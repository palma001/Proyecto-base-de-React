import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <>
      <title>Auth | Tienda</title>
      <div className="h-screen grid grid-cols-5 gap- font-poppins">
        <div className="bg-[url('/image/bg_quanto.jpeg')] bg-cover bg-center bg-no-repeat col-span-3 flex flex-col justify-center shadow-lg gap-5 relative">
        </div>
        <div className="flex flex-col py-20 col-span-2 gap-5 relative">
          <div className="flex gap-2 items-center justify-center text-quanto font-semibold">
            <img src="/image/quanto.svg" alt="quanto tienda online" />
            Quanto
          </div>
          {/* <div className="w-[80%] mx-auto">
            <h3 className="text-xl font-bold">Bienvenido de nuevo</h3>
          </div> */}
          <div className="w-[80%] mx-auto">
            <Outlet />
          </div>
          <div className="absolute bottom-0 mb-10 text-center w-full">
          Powered by <span className="text-stone-700">Qbits Technologies</span>
        </div>
        </div>
      </div>
    </>
  )
}