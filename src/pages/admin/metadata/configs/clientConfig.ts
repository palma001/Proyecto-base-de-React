import clientRule from "./rules/clientRule";

/**
 * Config table of warehouse entity
 * @type {TableConfigProps}
 */
export const tableClientConfig = {
  defaultPagination: {
    pageIndex: 0,
    pageSize: 20,
  },
  link: "clients",
  columns: [
    {
      header: "Nombre",
      accessorKey: "name",
    },
    {
      header: "Apellido",
      accessorKey: "lastname",
    },
    {
      header: "Correo electrónico",
      accessorKey: "email",
    },
    {
      header: "Número de teléfono",
      accessorKey: "phone_number",
    },
  ],
};
/**
 * Config form of warehouse entity
 * @type {FormConfigProps}
 */
export const formClientConfig = {
  title: "cliente",
  formSchema: clientRule,
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
      name: "email",
      label: "Correo electrónico",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar el correo electrónico",
    },
    {
      name: "phone_number",
      label: "Número de teléfono",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar el número de teléfono",
    },
  ],
};
