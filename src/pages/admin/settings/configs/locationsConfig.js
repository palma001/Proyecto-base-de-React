import locationRuleRule from "./rules/locationRuleRule";

/**
 * Config table of warehouse entity
 * @type {TableConfigProps}
 */
export const tableLocationConfig = {
  defaultPagination: {
    pageIndex: 0,
    pageSize: 20,
  },
  link: "locations",
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
export const formLocationConfig = {
  title: "Agregar ubicación",
  formSchema: locationRuleRule,
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
      name: "area_id",
      isRequired: true,
      component: "q-select",
      label: "Area",
      services: "admin/areas",
      labelValue: "name",
      selectedValue: "id",
    },
  ],
};
