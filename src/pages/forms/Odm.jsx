import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";

import { useNavigate } from "react-router-dom";

function Odm() {
  const navigate = useNavigate();
  return (
    <>
      <div className="sm:max-w-[800px] max-w-[80vw]">
        <Table aria-label="Example static collection table" className="mb-4">
          <TableHeader>
            <TableColumn>Nro de ODM</TableColumn>
            <TableColumn>Tipo de ODM</TableColumn>
            <TableColumn>Prioridad</TableColumn>
            <TableColumn>Aviso</TableColumn>
            <TableColumn>Area</TableColumn>
            <TableColumn>Locacion</TableColumn>
            <TableColumn>Objetivo Técnico</TableColumn>
            <TableColumn>Impacto</TableColumn>
            <TableColumn>Estatus</TableColumn>
            <TableColumn>Accion requerida</TableColumn>
            <TableColumn>Clase actividad</TableColumn>
            <TableColumn>Departamento</TableColumn>
            <TableColumn>Responsable</TableColumn>
            <TableColumn>RNC</TableColumn>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className="text-center">-</TableCell>
              <TableCell className="text-center">-</TableCell>
              <TableCell className="text-center">-</TableCell>
              <TableCell className="text-center">-</TableCell>
              <TableCell className="text-center">-</TableCell>
              <TableCell className="text-center">-</TableCell>
              <TableCell className="text-center">-</TableCell>
              <TableCell className="text-center">-</TableCell>
              <TableCell className="text-center">-</TableCell>
              <TableCell className="text-center">-</TableCell>
              <TableCell className="text-center">-</TableCell>
              <TableCell className="text-center">-</TableCell>
              <TableCell className="text-center">-</TableCell>
              <TableCell className="text-center">-</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="w-full flex justify-end">
        <Button
          color="primary"
          onClick={() => {
            navigate("/admin/management/form/odm/add");
          }}
        >
          Agregar
        </Button>
      </div>
    </>
  );
}

export default Odm;
