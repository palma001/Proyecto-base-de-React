import rolRule from "./rules/rolRule";

/**
 * Config table of warehouse entity
 * @type {TableConfigProps}
 */
export const tableRolConfig = {
  defaultPagination: {
    pageIndex: 0,
    pageSize: 20,
  },
  link: "roles",
  columns: [
    {
      header: "Nombre",
      accessorKey: "name",
    },
    {
      header: "Permisos",
      accessorKey: "permissions",
    }
  ],
};
/**
 * Config form of warehouse entity
 * @type {FormConfigProps}
 */
export const formRolConfig = {
  title: "rol",
  formSchema: rolRule,
  fields: [
    {
      name: "name",
      label: "Nombre del rol",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa el nombre",
      filter: true
    },
    {
      name: "permissions",
      label: "Permisos",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa los permisos",
      filter: true
    }
  ],
};
