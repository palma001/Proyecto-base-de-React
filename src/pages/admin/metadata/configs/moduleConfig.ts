import moduleRule from "./rules/moduleRule";

/**
 * Config table of warehouse entity
 * @type {TableConfigProps}
 */
export const tableModuleConfig = {
  defaultPagination: {
    pageIndex: 0,
    pageSize: 20,
  },
  link: "modules",
  columns: [
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
export const formModuleConfig = {
  title: "módulo",
  formSchema: moduleRule,
  fields: [
    {
      name: "name",
      label: "Nombre del módulo",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa el nombre",
      filter: true
    }
  ],
};
