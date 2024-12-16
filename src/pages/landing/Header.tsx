import { Button, Link } from "@nextui-org/react";

export default function App() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center min-h-[300px]">
        <div className="max-w-5xl w-full ">
          <p className="text-3xl font-medium text-quanto">
            Tu tienda ahora en la web
          </p>
          <p className="text-4xl font-bold mb-2">Vende como y Quanto quieras</p>
          <p className="text-xl font-medium text-gray-500">
            de forma, rápida y sencilla
          </p>
          <div className="flex gap-3 mt-5">
            <Button
              as={Link}
              href="#"
              variant="bordered"
              className="rounded-full border-quanto text-quanto"
            >
              Prueba un mes gratis
            </Button>
            <Button
              as={Link}
              href="#"
              variant="solid"
              className="rounded-full bg-quanto text-white"
            >
              Ver suscripciones
            </Button>
          </div>
        </div>
      </div>
      <img src="/image/header.png" alt="Quanto" />
    </>
  );
}
