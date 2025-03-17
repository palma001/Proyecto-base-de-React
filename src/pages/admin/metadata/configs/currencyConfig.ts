import currencyRule from "./rules/currencyRule";

/**
 * Config table of warehouse entity
 * @type {TableConfigProps}
 */
export const tableCurrencyConfig = {
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
      header: "Símbolo",
      accessorKey: "symbol",
    },
    {
      header: "Código ISO",
      accessorKey: "iso_code",
    }
  ],
};
/**
 * Config form of warehouse entity
 * @type {FormConfigProps}
 */
export const formCurrencyConfig = {
  title: "Moneda",
  formSchema: currencyRule,
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
      name: "symbol",
      label: "Símbolo",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar el Símbolo",
      filter: true
    },
    {
      name: "iso_code",
      label: "Código ISO",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar el código ISO",
      filter: true
    },
  ],
};
