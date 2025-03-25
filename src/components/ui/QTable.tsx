/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  cn,
} from "@heroui/react";
import {
  FaArrowDown,
  FaArrowUp,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import { useState } from "react";

export const QTable = ({
  columns,
  data,
  headerClass,
  bodyClass,
  className,
  onRowClick,
  actions,
  defaultPagination = {
    pageIndex: 0,
    pageSize: 20,
  },
}: any) => {
  const [sorting, setSorting]: any = useState([]);
  const iconsSorting: any = {
    default: null,
    asc: <FaArrowUp size={15} />,
    desc: <FaArrowDown size={15} />,
  };
  const table: any = useReactTable({
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
  return (
    <>
      <Table isStriped className={className} aria-label="arial-label">
        {table.getHeaderGroups().map((group: any) => (
          <TableHeader
            className={headerClass}
            key={group.id}
            aria-label="arial-label"
          >
            {group.headers.map((header: any) => (
              <TableColumn
                aria-label={header.id}
                key={header.id}
                onClick={header.column.getToggleSortingHandler()}
              >
                <div className="flex justify-start items-center cursor-pointer">
                  <>{header.column.columnDef.header}</>
                  {header.column.getIsSorted() && (
                    <span className="ml-1">
                      {iconsSorting[header.column.getIsSorted() || "default"]}
                    </span>
                  )}
                </div>
              </TableColumn>
            ))}
            {actions ? (
              <TableColumn>Acciones</TableColumn>
            ) : (
              <TableColumn> </TableColumn>
            )}
          </TableHeader>
        ))}

        {data?.length ? (
          <TableBody className={bodyClass}>
            {table.getRowModel().rows.map((row: any) => (
              <TableRow
                key={row.id}
                aria-label="arial-label"
                className={cn("cursor-pointer h-2")}
                onClick={() => {
                  if (onRowClick) onRowClick(row.original);
                }}
              >
                {row.getVisibleCells().map((cell: any) => (
                  <TableCell key={cell.id} aria-label="arial-label">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
                {actions ? (
                  <TableCell>{actions(row.original)}</TableCell>
                ) : (
                  <TableCell aria-label="arial-label"> </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
        )}
      </Table>

      <div className="flex justify-end items-center px-8 py-2 ">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-white">
          <span>Records per page:</span>
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
                variant="bordered"
                size="sm"
                type="button"
                aria-label="arial-label"
                isIconOnly
                onPress={() => table.firstPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <FaChevronLeft className="h-4 w-3" />
              </Button>
              <Button
                variant="bordered"
                size="sm"
                type="button"
                isIconOnly
                aria-label="Primera página"
                onPress={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <FaChevronLeft className="h-4 w-3" />
              </Button>
              <Button
                variant="bordered"
                size="sm"
                type="button"
                isIconOnly
                aria-label="Primera página"
                onPress={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <FaChevronRight className="h-4 w-3" />
              </Button>
              <Button
                variant="bordered"
                size="sm"
                type="button"
                aria-label="Primera página"
                isIconOnly
                onPress={() => table.lastPage()}
                disabled={!table.getCanNextPage()}
              >
                <FaChevronRight className="h-4 w-3" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default QTable;
