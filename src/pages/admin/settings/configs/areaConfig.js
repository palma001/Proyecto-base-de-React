import areaRule from "./rules/areaRule";

/**
 * Config table of warehouse entity
 * @type {TableConfigProps}
 */
export const tableRoadConfig = {
  defaultPagination: {
    pageIndex: 0,
    pageSize: 20,
  },
  link: "arras",
  columns: [
    {
      header: "Id",
      accessorKey: "id",
    },
    {
      header: "Nombre",
      accessorKey: "name",
    },
  ],
};
/**
 * Config form of warehouse entity
 * @type {FormConfigProps}
 */
export const formRoadConfig = {
  title: "Agregar area",
  formSchema: areaRule,
  fields: [
    {
      name: "name",
      label: "Nombre",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar el nombre",
    },
    {
      name: "zone_id",
      label: "Zona",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar la Zona",
    },
  ],
};
