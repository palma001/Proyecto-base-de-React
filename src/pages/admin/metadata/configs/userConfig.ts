import userRule from "./rules/userRule";

interface User {
  name: string;
  last_name: string;
  email: string;
  username: string;
  role_id: number;
  role?: {
    name: string;
  };
}

/**
 * Config table of warehouse entity
 * @type {TableConfigProps}
 */
export const tableUserConfig = {
  defaultPagination: {
    pageIndex: 0,
    pageSize: 20,
  },
  link: "users",
  columns: [
    {
      header: "Nombre",
      accessorKey: "name",
      accessorFn: (row: User) => row.name || "-",
    },
    {
      header: "Apellido",
      accessorKey: "last_name",
      accessorFn: (row: User) => row.last_name || "-",
    },
    {
      header: "Correo electrónico",
      accessorKey: "email",
      accessorFn: (row: User) => row.email || "-",
    },
    {
      header: "Nombre de usuario",
      accessorKey: "username",
      accessorFn: (row: User) => row.username || "-",
    },
    {
      header: "Rol",
      accessorKey: "role_id",
      accessorFn: (row: User) => row.role?.name || "-",
    },
  ],
};
/**
 * Config form of warehouse entity
 * @type {FormConfigProps}
 */
export const formUserConfig = {
  title: "usuario",
  formSchema: userRule,
  fields: [
    {
      name: "email",
      label: "Correo",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa el correo",
      filter: true,
    },
    {
      name: "name",
      label: "Nombre",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa el nombre",
      filter: true,
    },
    {
      name: "last_name",
      label: "Apellido",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa el apellido",
      filter: true,
    },
    {
      name: "username",
      label: "Nombre de usuario",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresa el nombre de usuario",
      filter: true,
    },
    {
      name: "password",
      label: "Contraseña",
      type: "password",
      required: true,
      component: "q-input",
      placeholder: "Ingresa la contraseña",
      filter: true,
    },
    {
      name: "role_id",
      label: "Rol",
      type: "select",
      required: true,
      component: "q-select",
      placeholder: "Selecciona un rol",
      filter: true,
    },
  ],
};
