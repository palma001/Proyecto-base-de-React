import maintLevelRule from "./rules/maintLevelRule";

/**
 * Config table of warehouse entity
 * @type {TableConfigProps}
 */
export const tableMaintLevelConfig = {
  defaultPagination: {
    pageIndex: 0,
    pageSize: 20,
  },
  link: "main-levels",
  columns: [
    {
      header: "Id",
      accessorKey: "id",
    },
    {
      header: "Nombre",
      accessorKey: "name",
    },
  ],
};
/**
 * Config form of warehouse entity
 * @type {FormConfigProps}
 */
export const formMaintLevelConfig = {
  title: "Agregar nivel de mantenimiento",
  formSchema: maintLevelRule,
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
      name: "maint_type_id",
      label: "Tipo de mantenimiento",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar el tipo de mantenimiento",
    },
  ],
};
