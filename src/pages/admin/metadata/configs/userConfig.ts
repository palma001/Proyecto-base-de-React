/* eslint-disable @typescript-eslint/no-explicit-any */
import userRule from "./rules/userRule";

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
      header: "Id",
      accessorKey: "id",
    },
    {
      header: "Nombre",
      accessorKey: "name",
    },
    {
      header: "Número de teléfono",
      accessorKey: "phone_number",
    },
    {
      header: "Nombre de usuario",
      accessorKey: "username",
    },
    {
      header: "Correo electrónico",
      accessorKey: "email",
    },
    {
      header: "Rol",
      accessorKey: "role",
      accessorFn: (row: any) => row?.role?.name || "-",
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
      name: "name",
      label: "Nombre",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar el nombre",
      filter: true
    },
    {
      name: "phone_number",
      label: "Número de teléfono",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar el número de teléfono",
    },
    {
      name: "username",
      label: "Nombre de usuario",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar el nombre de usuario",
    },
    {
      name: "email",
      label: "Correo electrónico",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar el correo electrónico",
    },
    {
      name: "password",
      label: "Contraseña",
      type: "password",
      required: true,
      component: "q-input",
      placeholder: "Ingresar la contraseña",
    },
  ],
};
