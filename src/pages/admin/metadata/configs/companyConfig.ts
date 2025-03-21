import companyRule from "./rules/companyRule";

/**
 * Config table of warehouse entity
 * @type {TableConfigProps}
 */
export const tableCompanyConfig = {
  defaultPagination: {
    pageIndex: 0,
    pageSize: 20,
  },
  link: "companies",
  columns: [
    {
      header: "Nombre",
      accessorKey: "name",
    },
    {
      header: "RIF",
      accessorKey: "rif_number",
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
      header: "Representante legal",
      accessorKey: "legalAgent",
    }
  ],
};
/**
 * Config form of warehouse entity
 * @type {FormConfigProps}
 */
export const formCompanyConfig = {
  title: "compañia",
  formSchema: companyRule,
  fields: [
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
      name: "rif_number",
      label: "RIF",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa el RIF",
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
      name: "email",
      label: "Correo",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa el correo",
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
      name: "legalAgent",
      label: "Representante legal",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa el representante legal",
      filter: true
    },
    {
      name: "logo",
      label: "Logo",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa el logo",
      filter: true
    },
    {
      name: "stamp",
      label: "Sello",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa el sello",
      filter: true
    }
  ],
};
