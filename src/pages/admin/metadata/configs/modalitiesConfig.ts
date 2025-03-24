import modalitiesRule from "./rules/modalitiesRule";

/**
 * Config table of warehouse entity
 * @type {TableConfigProps}
 */
export const tableModalitiesConfig = {
  defaultPagination: {
    pageIndex: 0,
    pageSize: 20,
  },
  link: "modalities",
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
      header: "Duración",
      accessorKey: "duration",
    },
    {
      header: "Descuento",
      accessorKey: "discount",
    },
  ],
};
/**
 * Config form of warehouse entity
 * @type {FormConfigProps}
 */
export const formModalitiesConfig = {
  title: "Agregar modalidad",
  formSchema: modalitiesRule,
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
      name: "duration",
      label: "Duración",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar el duration",
    },
    {
      name: "discount",
      label: "Descuento",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar el descuento",
    },
  ],
};
