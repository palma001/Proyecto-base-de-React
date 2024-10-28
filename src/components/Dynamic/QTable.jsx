/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  //   ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
// import { DefaultPagination } from "@/types/table";
// import { useRouter } from "next/navigation";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

export default function QTable({
  columns,
  data,
  headerClass,
  onRowClick,
  defaultPagination = { pageIndex: 0, pageSize: 20 },
}) {
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      pagination: defaultPagination,
    },
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  const isPar = (numero) => {
    if (typeof numero !== "number") {
      return console.error("El valor introducido no es un número");
    }
    return numero % 2 === 0;
  };

  return (
    <>
      <Table
        className={headerClass}
        selectionMode="single"
        aria-label="expand row"
      >
        <TableHeader className={headerClass}>
          {table.getHeaderGroups().map((group) => {
            return group.headers.map((header) => {
              return (
                <TableColumn key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableColumn>
              );
            });
          })}
        </TableHeader>
        <TableBody emptyContent={"No rows to display."} aria-label="expand row">
          {data.length === 0
            ? []
            : table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="cursor-pointer"
                  aria-label="expand row"
                  onClick={() => {
                    if (onRowClick) onRowClick(row.original);
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
        </TableBody>
      </Table>
      <div className="flex justify-end py-3">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-white">
          <span>Registros por páginas:</span>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-15 px-2 py-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <span>
            {table.getState().pagination.pageIndex + 1} de{" "}
            {table.getPageCount()}
          </span>
          {table.getPageCount() > 1 && (
            <div className="flex gap-1">
              <Button
                isIconOnly
                size="sm"
                onClick={() => table.firstPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <MdKeyboardDoubleArrowLeft className="h-4 w-3" />
              </Button>
              <Button
                isIconOnly
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <MdKeyboardArrowLeft className="h-4 w-3" />
              </Button>
              <Button
                isIconOnly
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <MdKeyboardArrowRight className="h-4 w-3" />
              </Button>
              <Button
                isIconOnly
                size="sm"
                onClick={() => table.lastPage()}
                disabled={!table.getCanNextPage()}
              >
                <MdKeyboardDoubleArrowRight className="h-4 w-3" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
