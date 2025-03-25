import productRule from "./rules/productRule";

/**
 * Config table of warehouse entity
 * @type {TableConfigProps}
 */
export const tableProductConfig = {
  defaultPagination: {
    pageIndex: 0,
    pageSize: 20,
  },
  link: "products",
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
      header: "Descripción",
      accessorKey: "description",
    },
    {
      header: "Url",
      accessorKey: "url",
    },
    {
      header: "Usuario",
      accessorKey: "product_id",
    },
    {
      header: "Logo",
      accessorKey: "logo",
    },
  ],
};
/**
 * Config form of warehouse entity
 * @type {FormConfigProps}
 */
export const formProductConfig = {
  title: "Agregar producto",
  formSchema: productRule,
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
      name: "description",
      label: "Descripción",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar la descripción",
    },
    {
      name: "url",
      label: "Url",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar la url",
    },
    {
      name: "product_id",
      label: "Usuario",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar el usuario",
    },
    {
      name: "logo",
      label: "Logo",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar el logo",
    },
  ],
};
