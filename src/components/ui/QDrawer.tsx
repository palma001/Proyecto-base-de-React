/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { FaFilter, FaFilterCircleXmark } from "react-icons/fa6";
import { useNavigate } from "react-router";
import QFormFilter from "./QFormFilter";

export default function QDrawer({
  children,
  config,
  handlerData,
  loadingForm,
}: any) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const navigate = useNavigate();
  const { tableTitle } = config;
  return (
    <main className="px-4 w-ful">
      <div className="flex items-baseline justify-between border-b border-gray-200 p-2">
        <h1 className="text-3xl font-bold tracking-tight ">{tableTitle}</h1>

        <div className="flex items-center gap-2">
          <Button
            color="primary"
            isIconOnly
            onPress={() => {
              navigate("add");
            }}
          >
            <BiPlus size={20} />
          </Button>
          <Button
            type="button"
            isIconOnly
            color="secondary"
            onPress={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          >
            <span className="sr-only">Filters</span>
            {mobileFiltersOpen ? (
              <FaFilterCircleXmark aria-hidden="true" className="size-5" />
            ) : (
              <FaFilter aria-hidden="true" className="size-5" />
            )}
          </Button>
        </div>
      </div>

      <section aria-labelledby="products-heading" className="p-2 mt-2">
        <div className="grid grid-cols-1 gap-x-4 gap-y-10 lg:grid-cols-12">
          <div
            className={`${
              mobileFiltersOpen ? "lg:col-span-9" : "lg:col-span-12"
            }`}
          >
            {children}
          </div>
          {/* Filters */}
          <div
            className={`hidden ${
              mobileFiltersOpen &&
              "lg:block w-full shadow-small rounded-lg dark:bg-slate-900 lg:col-span-3"
            }`}
          >
            <QFormFilter
              config={config.form}
              loading={loadingForm}
              handlerSubmit={(data: any) => {
                if (handlerData) handlerData(data);
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
