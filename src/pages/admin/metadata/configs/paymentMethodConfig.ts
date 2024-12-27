/* eslint-disable @typescript-eslint/no-explicit-any */
import paymentMethodRule from "./rules/paymentMethodRule";

/**
 * Config table of warehouse entity
 * @type {TableConfigProps}
 */
export const tablePaymentMethodConfig = {
  defaultPagination: {
    pageIndex: 0,
    pageSize: 20,
  },
  link: "payment-methods",
  columns: [
    {
      header: "Nombre",
      accessorKey: "name",
    },
    {
      header: "Moneda",
      accessorKey: "currency",
      accessorFn: (row: any) => row.currency?.name,
    }
  ],
};
/**
 * Config form of warehouse entity
 * @type {FormConfigProps}
 */
export const formPaymentMethodConfig = {
  title: "Método de pago",
  formSchema: paymentMethodRule,
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
      name: "currency_id",
      defaultValueField: "currency",
      label: "Moneda",
      required: true,
      component: "q-select",
      filter: true,
      labelValue: "name",
      selectedValue: "id",
      services: "admin/currencies",
    },
    {
      name: "data_fields",
      label: "Campos del método de pago",
      required: true,
      component: "q-json-field",
    }
  ],
};
