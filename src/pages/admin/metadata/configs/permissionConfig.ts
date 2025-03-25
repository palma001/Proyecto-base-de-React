import permissionRule from "./rules/permissionRule";

/**
 * Config table of warehouse entity
 * @type {TableConfigProps}
 */
export const tablePermissionConfig = {
  defaultPagination: {
    pageIndex: 0,
    pageSize: 20,
  },
  link: "permissions",
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
export const formPermissionConfig = {
  title: "permiso",
  formSchema: permissionRule,
  fields: [
    {
      name: "name",
      label: "Nombre del permiso",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa el nombre",
      filter: true
    },
  ],
};
