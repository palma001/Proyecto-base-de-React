import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Button, Input, Textarea } from "@nextui-org/react";
import { MdDelete } from "react-icons/md";
import { IoIosSave } from "react-icons/io";

import { Select, SelectItem } from "@nextui-org/react";
import { FaCircleArrowLeft } from "react-icons/fa6";

import { toast } from "sonner";

import { useNavigate } from "react-router-dom";

export default function Activities() {
  const navigate = useNavigate();
  const statusSelect = [
    { key: "1", label: "Por planificar" },
    { key: "2", label: "Por programar" },
    { key: "3", label: "Emitida en sabana" },
    { key: "4", label: "En ejecucion" },
    { key: "5", label: "Reprogramada" },
    { key: "6", label: "Culminado" },
  ];

  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full h-screen flex justify-center items-start p-1"
      >
        <Card className="w-screen max-w-[800px] p-4">
          <CardHeader>
            <Button
              className="bg-primary mr-3"
              isIconOnly
              variant="shadow"
              onClick={() => {
                navigation(-1);
              }}
            >
              <FaCircleArrowLeft color="white" size={20} />
            </Button>
            <h1 className="text-2xl font-bold">Actividades por ODM</h1>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                label="Actividad"
                name="id"
                onChange={handleChange}
                placeholder="Ingresa el ID de la actividad"
              />
              <Input
                type="text"
                label="ODM"
                name="odm"
                onChange={handleChange}
                placeholder="Ingresa el ID del ODM"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                label="Departamento"
                name="departament"
                onChange={handleChange}
                placeholder="Ingresa el departamento"
              />
              <Input
                type="text"
                label="Responsable"
                name="responsable"
                onChange={handleChange}
                placeholder="Ingresa el responsable"
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <Input
                type="text"
                label="Recurso adicional"
                name="recurso"
                onChange={handleChange}
                placeholder="Ingresa un recurso adicional"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                label="workticket"
                name="workticket"
                onChange={handleChange}
                placeholder="Ingresa el workticket"
              />
              <Select label="Estatus" placeholder="Ingresa el estatus">
                {statusSelect.map((type) => (
                  <SelectItem key={type.key}>{type.label}</SelectItem>
                ))}
              </Select>
            </div>
            <div className="grid grid-cols-1 w-full">
              <Textarea
                label="Descripción de la actividad"
                placeholder="Ingresa una descripción"
                className="w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                label="Duración"
                name="duracion"
                onChange={handleChange}
                placeholder="Ingresa la duración"
              />
              <Input
                type="text"
                label="Duración real"
                name="duracion_real"
                onChange={handleChange}
                placeholder="Ingresa la duración real"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="date"
                label="Inicio estimado"
                name="inicio_estimado"
                onChange={handleChange}
                placeholder="Ingresa el inicio estimado"
              />
              <Input
                type="date"
                label="Inicio real"
                name="inicio_real"
                onChange={handleChange}
                placeholder="Ingresa el inicio real"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="date"
                label="Fin programado"
                name="fin_programado"
                onChange={handleChange}
                placeholder="Ingresa el fin programado"
              />
              <Input
                type="date"
                label="Fin real"
                name="fin_real"
                onChange={handleChange}
                placeholder="Ingresa el fin real"
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
      </form>
    </>
  );
}
