import planRule from "./rules/planRule";

/**
 * Config table of warehouse entity
 * @type {TableConfigProps}
 */
export const tablePlanConfig = {
  defaultPagination: {
    pageIndex: 0,
    pageSize: 20,
  },
  link: "plans",
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
      header: "Código",
      accessorKey: "code",
    },
    {
      header: "Descripción",
      accessorKey: "description",
    },
    {
      header: "Precio",
      accessorKey: "price",
    },
  ],
};
/**
 * Config form of warehouse entity
 * @type {FormConfigProps}
 */
export const formPlanConfig = {
  title: "Agregar plan",
  formSchema: planRule,
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
      name: "code",
      label: "Código",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar el código",
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
      name: "price",
      label: "Precio",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar el precio",
    },
  ],
};
