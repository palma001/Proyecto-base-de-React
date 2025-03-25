import leadRule from "./rules/leadRule";

interface Lead {
  name?: string;
  last_name?: string;
  phone_number?: string;
  description?: string;
  company_name?: string;
  country?: string;
  status?: string;
}

/**
 * Config table of lead entity
 * @type {TableConfigProps}
 */
export const tableLeadConfig = {
  defaultPagination: {
    pageIndex: 0,
    pageSize: 20,
  },
  link: "leads",
  columns: [
    {
      header: "Nombre",
      accessorKey: "name",
      accessorFn: (row: Lead) => row.name || "-",
    },
    {
      header: "Apellido",
      accessorKey: "last_name",
      accessorFn: (row: Lead) => row.last_name || "-",
    },
    {
      header: "Teléfono",
      accessorKey: "phone_number",
      accessorFn: (row: Lead) => row.phone_number || "-",
    },
    {
      header: "Descripción",
      accessorKey: "description",
      accessorFn: (row: Lead) => row.description || "-",
    },
    {
      header: "Nombre de la empresa",
      accessorKey: "company_name",
      accessorFn: (row: Lead) => row.company_name || "-",
    },
    {
      header: "País",
      accessorKey: "country",
      accessorFn: (row: Lead) => row.country || "-",
    },
    {
      header: "Estado",
      accessorKey: "status",
      accessorFn: (row: Lead) => {
        if (row.status === "pending") {
          return "Pendiente";
        }
        if (row.status === "inProgress") {
          return "En progreso";
        }
        if (row.status === "completed") {
          return "Completado";
        }
        return "-";
      },
    },
  ],
};

/**
 * Config form of lead entity
 * @type {FormConfigProps}
 */
export const formLeadConfig = {
  title: "lead",
  formSchema: leadRule,
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
      name: "last_name",
      label: "Apellido",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa el apellido",
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
      name: "description",
      label: "Descripción",
      type: "text",
      required: false,
      component: "q-input",
      placeholder: "Ingresa la descripción",
      filter: false
    },
    {
      name: "company_name",
      label: "Nombre de la empresa",
      type: "text",
      required: false,
      component: "q-input",
      placeholder: "Ingresa el nombre de la empresa",
      filter: false
    },
    {
      name: "country",
      label: "País",
      type: "text",
      required: false,
      component: "q-input",
      placeholder: "Ingresa el país",
      filter: false,
      notEditable: true
    },
    {
      name: "status",
      label: "Estado",
      type: "text",
      required: false,
      component: "q-select",
      options: [
        { label: "Pendiente", value: "pending" },
        { label: "En progreso", value: "inProgress" },
        { label: "Completado", value: "completed" }
      ],
      placeholder: "Ingresa el estado",
      filter: true
    }
  ],
};
