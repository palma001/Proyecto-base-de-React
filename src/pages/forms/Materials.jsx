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

function Materials() {
  const navigate = useNavigate();

  return (
    <>
      <div className="sm:max-w-[800px] max-w-[80vw]">
      <Table aria-label="Example static collection table" className="mb-4">
        <TableHeader>
          <TableColumn>ID lista</TableColumn>
          <TableColumn>Actividad</TableColumn>
          <TableColumn>Código</TableColumn>
          <TableColumn>Nombre material</TableColumn>
          <TableColumn>Unidad</TableColumn>
          <TableColumn>Cantidad</TableColumn>
          <TableColumn>Condición</TableColumn>
          <TableColumn>Nombre origen</TableColumn>
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
          </TableRow>
        </TableBody>
      </Table>
      </div>
      <div className="w-full flex justify-end">
        <Button
          color="primary"
          onClick={() => {
            navigate("/admin/management/form/materials/add");
          }}
        >
          Agregar
        </Button>
      </div>
    </>
  );
}

export default Materials;
