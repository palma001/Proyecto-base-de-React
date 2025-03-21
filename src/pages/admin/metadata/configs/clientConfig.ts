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
      header: "Email",
      accessorKey: "email",
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
    {
      header: "Empresa",
      accessorKey: "company",
      // accessorFn: (row: any) => row.role?.name,
    }
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
    },
    {
      name: "company",
      label: "Empresa",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa la empresa",
      filter: true
    }
  ],
};
