/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "@nextui-org/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function PagingControl({ totalPages, pageNum, setPageNum }) {
  return (
    <>
      <Button
        disabled={pageNum - 1 === -1}
        isIconOnly
        onClick={() => setPageNum(pageNum - 1)}
        size="sm"
        color="primary"
      >
        <FaChevronLeft />
      </Button>
      <div className="bg-primary text-white rounded-md p-1 text-[15px]">
        {pageNum + 1}/{totalPages}
      </div>
      <Button
        disabled={pageNum + 1 > totalPages - 1}
        isIconOnly
        onClick={() => setPageNum(pageNum + 1)}
        size="sm"
        color="primary"
      >
        <FaChevronRight />
      </Button>
    </>
  );
}
