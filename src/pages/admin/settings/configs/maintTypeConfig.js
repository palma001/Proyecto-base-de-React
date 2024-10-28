import maintTypeRule from "./rules/maintTypeRule";

/**
 * Config table of warehouse entity
 * @type {TableConfigProps}
 */
export const tableMaintTypeConfig = {
  defaultPagination: {
    pageIndex: 0,
    pageSize: 20,
  },
  link: "maint-types",
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
export const formMaintTypeConfig = {
  title: "Agregar tipo de mantenimiento",
  formSchema: maintTypeRule,
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
