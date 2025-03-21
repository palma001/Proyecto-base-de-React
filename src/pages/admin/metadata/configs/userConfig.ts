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
      accessorKey: "last_name",
    },
    {
      header: "Nombre de usuario",
      accessorKey: "username",
    },
    {
      header: "Teléfono",
      accessorKey: "phone_number",
    },
    {
      header: "Dirección",
      accessorKey: "address",
    },
    {
      header: "Documento",
      accessorKey: "document_number",
    },
  ],
};
/**
 * Config form of warehouse entity
 * @type {FormConfigProps}
 */
export const formUserConfig = {
  title: "usuario",
  formSchema: userRule,
  fields: [
    {
      name: "email",
      label: "Correo",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa el correo",
      filter: true
    },
    {
      name: "name",
      label: "Nombre",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa el nombre",
      filter: true
    },
    {
      name: "last_name",
      label: "Apellido",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa el apellido",
      filter: true
    },
    {
      name: "username",
      label: "Nombre de usuario",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa el nombre de usuario",
      filter: true
    },
    {
      name: "phone_number",
      label: "Teléfono",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa el teléfono",
      filter: true
    },
    {
      name: "address",
      label: "Dirección",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa la dirección",
      filter: true
    },
    {
      name: "document_number",
      label: "Documento",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa el documento",
      filter: true
    }
  ],
};
