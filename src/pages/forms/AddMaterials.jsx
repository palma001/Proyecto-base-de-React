import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Button, Input } from "@nextui-org/react";
import { MdDelete } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import { FaCircleArrowLeft } from "react-icons/fa6";

import { toast } from "sonner";

import { useNavigate  } from "react-router-dom";

export default function Materials() {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-screen flex justify-center items-start p-1">
        <Card className="w-screen max-w-[800px] p-4">
          <CardHeader className="">
          <Button
              className="bg-primary mr-3"
              isIconOnly
              variant="shadow"
              onClick={() => {
                navigate(-1);
              }}
            >
              <FaCircleArrowLeft color="white" size={20} />
            </Button>
            <h1 className="text-2xl font-bold">Materiales por actividad</h1>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                variant=""
                label="ID lista"
                placeholder="Ingresa el ID"
              />
              <Input
                type="text"
                variant=""
                label="Actividad"
                placeholder="Ingresa la actividad"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                variant=""
                label="Código"
                placeholder="Ingresa el código"
              />
              <Input
                type="text"
                variant=""
                label="Nombre material"
                placeholder="Ingresa el nombre del material"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                variant=""
                label="Unidad"
                placeholder="Ingresa la unidad"
              />
              <Input
                type="text"
                variant=""
                label="Cantidad"
                placeholder="Ingresa la cantidad"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                variant=""
                label="Condición"
                placeholder="Ingresa la condición"
              />
              <Input
                type="text"
                variant=""
                label="Nombre origen"
                placeholder="Ingresa el origen"
              />
            </div>

            <div className="flex justify-end gap-2">
              <Button
                className="col-span-1 p-4"
                color="primary"
                onClick={() => toast.success("Guardado satisfactoriamente")}
              >
                Guardar <IoIosSave />
              </Button>
              <Button
                className="col-span-1 p-4"
                color="danger"
                onClick={() => {
                  navigate(-1);
                }}
              >
                Cancelar <MdDelete />
              </Button>
              
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
