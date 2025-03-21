import buyerRule from "./rules/buyerRule";

/**
 * Config table of warehouse entity
 * @type {TableConfigProps}
 */
export const tableBuyerConfig = {
  defaultPagination: {
    pageIndex: 0,
    pageSize: 20,
  },
  link: "buyers",
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
      header: "Observaciones",
      accessorKey: "observations",
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
export const formBuyerConfig = {
  title: "comprador",
  formSchema: buyerRule,
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
      name: "observations",
      label: "Observaciones",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa las observaciones",
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
