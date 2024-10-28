import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Button, Input, Textarea } from "@nextui-org/react";
import { MdDelete } from "react-icons/md";
import { IoIosSave } from "react-icons/io";

import { Select, SelectItem } from "@nextui-org/react";
import { FaCircleArrowLeft } from "react-icons/fa6";

import { toast } from "sonner";
import { useNavigate  } from "react-router-dom";

export default function Odm() {
  const navigate = useNavigate();
  const typeSelect = [
    { key: "1", label: "Preventivo" },
    { key: "2", label: "Correctivo" },
    { key: "3", label: "Proyecto" },
    { key: "4", label: "PM" },
    { key: "5", label: "Servicio" },
    { key: "6", label: "Predictivo" },
  ];

  const prioritySelect = [
    { key: "1", label: "Normal" },
    { key: "2", label: "Urgencia" },
    { key: "3", label: "Emergencia" },
  ];

  const tecSelect = [
    { key: "1", label: "PLD3-V-401" },
    { key: "2", label: "PLD3-V-402" },
    { key: "3", label: "PLD3-V-403" },
    { key: "4", label: "PLD3-V-404" },
    { key: "5", label: "PLD3-V-405" },
    { key: "6", label: "PLD3-V-431" },
    { key: "7", label: "PLD3-V-432" },
    { key: "8", label: "PLD3-V-433" },
  ];

  const statusSelect = [
    { key: "1", label: "Por planificar" },
    { key: "2", label: "Por programar" },
    { key: "3", label: "Emitida en sabana" },
    { key: "4", label: "En ejecucion" },
    { key: "5", label: "Reprogramada" },
    { key: "6", label: "Culminado" },
  ];

  const rncSelect = [
    { key: "1", label: "Espera recursos propios" },
    { key: "2", label: "Espera recursos externos" },
    { key: "3", label: "Espera materiales" },
    { key: "4", label: "Espera personal" },
    { key: "5", label: "Criterio operacional" },
    { key: "6", label: "Trabajo emergencia" },
    { key: "7", label: "Condiciones atmosfericas" },
    { key: "8", label: "Sin acceso" },
  ];

  const departamentSelect = [
    { key: "1", label: "Balancines" },
    { key: "2", label: "Civil_Ambiente" },
    { key: "3", label: "Eléctrico" },
    { key: "4", label: "Instrumento" },
    { key: "5", label: "Mecánica" },
    { key: "6", label: "Operaciones" },
    { key: "7", label: "Taladro" },
    { key: "8", label: "Transporte" },
  ];

  return (
    <>
      <div className="w-full h-screen flex justify-center items-start p-1">
        <Card className="w-screen max-w-[800px] p-4">
          <CardHeader>
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
            <h1 className="text-2xl font-bold">Orden de mantenimiento</h1>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                variant=""
                label="Nro de ODM"
                placeholder="Ingresa el número de ODM"
              />
              <Select label="Tipo de ODM" placeholder="Ingresa el tipo de ODM">
                {typeSelect.map((type) => (
                  <SelectItem key={type.key}>{type.label}</SelectItem>
                ))}
              </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select label="Prioridad" placeholder="Ingresa la prioridad">
                {prioritySelect.map((type) => (
                  <SelectItem key={type.key}>{type.label}</SelectItem>
                ))}
              </Select>
              <Input
                type="text"
                variant=""
                label="Aviso"
                placeholder="Ingresa el aviso"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                variant=""
                label="Area"
                placeholder="Ingresa la area"
              />
              <Input
                type="text"
                variant=""
                label="Locacion"
                placeholder="Ingresa la locacion"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                label="Objetivo Técnico"
                placeholder="Ingresa el objetivo técnico"
              >
                {tecSelect.map((type) => (
                  <SelectItem key={type.key}>{type.label}</SelectItem>
                ))}
              </Select>
              <Input
                type="text"
                variant=""
                label="Impacto"
                placeholder="Ingresa el impacto"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select label="Estatus" placeholder="Ingresa el estatus">
                {statusSelect.map((type) => (
                  <SelectItem key={type.key}>{type.label}</SelectItem>
                ))}
              </Select>
              <Input
                type="text"
                variant=""
                label="Accion requerida"
                placeholder="Ingresa la accion requerida"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                variant=""
                label="Clase actividad"
                placeholder="Ingresa la clase actividad"
              />
              <Select
                label="Departamento"
                placeholder="Ingresa el departamento"
              >
                {departamentSelect.map((type) => (
                  <SelectItem key={type.key}>{type.label}</SelectItem>
                ))}
              </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                variant=""
                label="Responsable"
                placeholder="Ingresa el responsable"
              />
              <Select label="RNC" placeholder="Ingresa el RNC">
                {rncSelect.map((type) => (
                  <SelectItem key={type.key}>{type.label}</SelectItem>
                ))}
              </Select>
            </div>
            <div className="grid grid-cols-1 w-full">
              <Textarea
                label="Comentario RNC"
                placeholder="Ingresa el comentario RNC"
                className="w-full"
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
