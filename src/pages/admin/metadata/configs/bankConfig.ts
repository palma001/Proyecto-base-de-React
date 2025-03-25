import bankRule from "./rules/bankRule";

/**
 * Config table of warehouse entity
 * @type {TableConfigProps}
 */
export const tableBankConfig = {
  defaultPagination: {
    pageIndex: 0,
    pageSize: 20,
  },
  link: "users",
  columns: [
    {
      header: "Nombre",
      accessorKey: "name",
    },
    {
      header: "Codigo",
      accessorKey: "code",
    }
  ],
};
/**
 * Config form of warehouse entity
 * @type {FormConfigProps}
 */
export const formBankConfig = {
  title: "Banco",
  formSchema: bankRule,
  fields: [
    {
      name: "name",
      label: "Nombre",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar el nombre",
      filter: true
    },
    {
      name: "code",
      label: "Codigo",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar el codigo",
      filter: true
    }
  ],
};
