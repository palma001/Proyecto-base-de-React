import { Button } from "@nextui-org/react";
import { Link } from "react-router";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

export default function App() {
  return (
    <div className="w-full flex justify-center p-10 mt-20">
      <div className="max-w-[1466px] bg-[#D8DBEC] rounded-3xl w-[80vw] p-6 sm:p-10">
        <div className="flex justify-center w-full bg-black-500">

        <div className=" top-20 flex flex-col items-center justify-center gap-4 w-full">
          <p className="text-quantoDark font-light text-xl text-center">EXPANDE TUS HORIZONTES DESDE AHORA</p>
          <p className="text-[#231D4F] font-bold text-5xl text-center mb-4">Solicita más información</p>
          <p className="text-[#231D4F] font-normal text-md text-center max-w-2xl mb-10">Quanto es una aplicación desarrollada por Qbits Inc. Encuentra esta y otras soluciones tecnológicas en nuestra página oficial.</p>
          <Button variant='solid' className='bg-quanto text-white rounded-full w-32 mb-10'>Contáctanos</Button>
          <p className="text-[#231D4F] font-normal text-base text-center mb-10">© 2025 Qbits Technologies Inc.</p>
          <div className="flex flex-col sm:flex-row gap-5 w-full justify-between items-center max-w-4xl">
            <img src="/image/qbits_logo.png" alt="qbits logo" className="w-32" />
            <Link to='#' className="font-semibold">Términos y condiciones</Link>
            <Link to='#' className="font-semibold">Política de privacidad</Link>
            <div className="flex gap-4">
              <Button as={Link} to='#' isIconOnly className="rounded-full bg-transparent border-1 border-slate-400"><FaLinkedinIn className="text-xl text-quantoDark" /></Button>
              <Button as={Link} to='#' isIconOnly className="rounded-full bg-transparent border-1 border-slate-400"><FaInstagram className="text-xl text-quantoDark" /></Button>
              <Button as={Link} to='#' isIconOnly className="rounded-full bg-transparent border-1 border-slate-400"><FaFacebookF className="text-xl text-quantoDark" /></Button>
              <Button as={Link} to='#' isIconOnly className="rounded-full bg-transparent border-1 border-slate-400"><FaYoutube className="text-xl text-quantoDark" /></Button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
