import bankAccountRule from "./rules/bankAccountRule";

/**
 * Config table of warehouse entity
 * @type {TableConfigProps}
 */
export const tableBankAccountConfig = {
  defaultPagination: {
    pageIndex: 0,
    pageSize: 20,
  },
  link: "bankAccountes",
  columns: [
    {
      header: "Empresa",
      accessorKey: "company",
    },
    {
      header: "Banco",
      accessorKey: "bank",
    },
    {
      header: "Numero de cuenta",
      accessorKey: "account_number",
    },
    {
      header: "Tipo de cuenta",
      accessorKey: "account_type",
    }
  ],
};
/**
 * Config form of warehouse entity
 * @type {FormConfigProps}
 */
export const formBankAccountConfig = {
  title: "bankAccount",
  formSchema: bankAccountRule,
  fields: [
    {
      name: "company",
      label: "Empresa",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa la empresa",
      filter: true
    },
    {
      name: "bank",
      label: "Banco",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa el banco",
      filter: true
    },
    {
      name: "account_number",
      label: "Numero de cuenta",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa el numero de cuenta",
      filter: true
    },
    {
      name: "account_type",
      label: "Tipo de cuenta",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa el tipo de cuenta",
      filter: true
    }
  ],
};
