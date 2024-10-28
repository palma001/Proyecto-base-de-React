import userRule from "./rules/userRule";

/**
 * Config table of warehouse entity
 * @type {TableConfigProps}
 */
export const tableUserConfig = {
  defaultPagination: {
    pageIndex: 0,
    pageSize: 20,
  },
  link: "users",
  columns: [
    {
      header: "Id",
      accessorKey: "id",
    },
    {
      header: "Nombre",
      accessorKey: "name",
    },
    {
      header: "Apellido",
      accessorKey: "lastname",
    },
    {
      header: "Cédula",
      accessorKey: "document_id",
    },
    {
      header: "Número de teléfono",
      accessorKey: "phone_number",
    },
    {
      header: "Nombre de usuario",
      accessorKey: "username",
    },
  ],
};
/**
 * Config form of warehouse entity
 * @type {FormConfigProps}
 */
export const formUserConfig = {
  title: "Agregar usuario",
  formSchema: userRule,
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
      name: "lastname",
      label: "Apellido",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar el apellido",
    },
    {
      name: "document_id",
      label: "Cédula",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar la cédula",
    },
    {
      name: "phone_number",
      label: "Número de teléfono",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar el número de teléfono",
    },
    {
      name: "username",
      label: "Nombre de usuario",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar el nombre de usuario",
    },
  ],
};
