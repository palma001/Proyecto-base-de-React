import zoneRule from "./rules/zoneRule";

/**
 * Config table of warehouse entity
 * @type {TableConfigProps}
 */
export const tableZoneConfig = {
  defaultPagination: {
    pageIndex: 0,
    pageSize: 20,
  },
  link: "zones",
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
export const formZoneConfig = {
  title: "Agregar zona",
  formSchema: zoneRule,
  fields: [
    {
      name: "name",
      label: "Nombre",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar el nombre",
    },
  ],
};
