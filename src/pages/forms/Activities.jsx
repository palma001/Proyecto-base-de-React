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

function Activities() {
  const navigate = useNavigate();

  return (
    <>
      <div className="sm:max-w-[800px] max-w-[80vw]">
        <Table aria-label="Example static collection table" className="mb-4">
          <TableHeader>
            <TableColumn>Nro de ODM</TableColumn>
            <TableColumn>Responsable</TableColumn>
            <TableColumn>Recurso adicional</TableColumn>
            <TableColumn>workticket</TableColumn>
            <TableColumn>Accion requerida</TableColumn>
            <TableColumn>Clase actividad</TableColumn>
            <TableColumn>Departamento</TableColumn>
            <TableColumn>RNC</TableColumn>
            <TableColumn>Comentario RNC</TableColumn>
            <TableColumn>Estatus</TableColumn>
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
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="w-full flex justify-end">
        <Button
          color="primary"
          onClick={() => {
            navigate("/admin/management/form/activities/add");
          }}
        >
          Agregar
        </Button>
      </div>
    </>
  );
}

export default Activities;
