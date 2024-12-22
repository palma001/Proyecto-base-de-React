import Navbar from "./Navbar";
import Footer from "./Footer";
import StoreCard from "./StoreCard";
import { Button, Input } from "@nextui-org/react";
import { MdOutlineFilterList } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { FaStar } from "react-icons/fa";


export default function stores() {
  return (
    <>
      <title>Tiendas | Quanto</title>
      <Navbar />

      <div className="flex flex-col items-center justify-center w-full my-16 p-5 gap-2">
        <p className="max-w-3xl w-full font-bold text-xl">
          Descubre más tiendas
        </p>
        <div className="max-w-3xl w-full flex flex-col justify-between items-center mb-5 sm:flex-row gap-5"> 
            <div className="flex gap-2 flex-wrap">
                <Button className="rounded-full font-semibold bg-quanto text-white" size="sm">Comida</Button>
                <Button className="rounded-full font-semibold bg-gray-100" size="sm">Ropa</Button>
                <Button className="rounded-full font-semibold bg-gray-100" size="sm">Ferreteria</Button>
                <Button className="rounded-full font-semibold bg-gray-100" size="sm">Electrónica</Button>
            </div>
            <div>
                <Button className="rounded-full font-semibold bg-quanto text-white"> <MdOutlineFilterList size={22}/> Filtros</Button>
            </div>
        </div>
        <div className="max-w-2xl w-full flex justify-between items-center  ">
            <Input placeholder="Buscar tienda" endContent={<IoMdSearch className="text-gray-500 cursor-pointer" size={25}/>} radius="full"></Input>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full my-16 p-5">
        <p className="max-w-4xl w-full font-bold text-3xl flex gap-3">
          <FaStar className="text-yellow-400"/> Tiendas destacadas
        </p>
        <div className="grid max-w-4xl grid-cols-1 sm:grid-cols-4 gap-5 mt-10 mb-16">
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
        </div>
        <p className="max-w-4xl w-full font-bold text-3xl">
          También te pueden interesar
        </p>

        <div className="grid max-w-4xl grid-cols-1 sm:grid-cols-4 gap-5 mt-10">
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
        </div>
      </div>

      <Footer />
    </>
  );
}
