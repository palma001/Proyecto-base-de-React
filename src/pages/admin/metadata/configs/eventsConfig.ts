/* eslint-disable @typescript-eslint/no-explicit-any */
import eventRule from "./rules/eventRule";

const status: any = {
  draft: "Borrador",
  published: "Publicado",
  archived: "Archivado",
  private: "Privado",
};

/**
 * Config table of warehouse entity
 * @type {TableConfigProps}
 */
export const tableEventConfig = {
  defaultPagination: {
    pageIndex: 0,
    pageSize: 20,
  },
  link: "posts",
  columns: [
    {
      header: "Titulo",
      accessorKey: "title",
    },
    {
      header: "Sub titulo",
      accessorKey: "sub_title",
    },
    {
      header: "Autor",
      accessorKey: "author",
    },
    {
      header: "Estado",
      accessorKey: "status",
      accessorFn: (row: any) => status[row.status],
    },
    {
      header: "Destacado",
      accessorKey: "is_featured",
      accessorFn: (row: any) => (row.is_featured ? "Si" : "No"),
    },
  ],
};
/**
 * Config form of warehouse entity
 * @type {FormConfigProps}
 */
export const formEventConfig = {
  title: "evento",
  formSchema: eventRule,
  fields: [
    {
      name: "title",
      label: "Titulo",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar el titulo",
      filter: true,
    },
    {
      name: "author",
      label: "Autor",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar el autor",
      filter: true,
    },
    {
      name: "sub_title",
      label: "Sub titulo",
      type: "text",
      required: true,
      component: "q-input",
      placeholder: "Ingresar el sub titulo",
      filter: true,
    },
    {
      name: "published_at",
      label: "Fecha del evento",
      type: "date",
      required: true,
      component: "q-input",
      placeholder: "Ingresar la fecha del evento",
      filter: true,
    },
    {
      name: "status",
      label: "Status",
      required: true,
      component: "q-select",
      filter: true,
      options: [
        { label: "Borrador", value: "draft" },
        { label: "Publicar", value: "published" },
        { label: "Archivado", value: "archived" },
        { label: "Privado", value: "private" },
      ],
    },
    {
      name: "is_featured",
      label: "Destacado",
      component: "q-select",
      filter: true,
      options: [
        { label: "Si", value: 1 },
        { label: "No", value: 0 },
      ],
    },
    {
      name: "body",
      label: "Descripción",
      type: "text",
      required: true,
      component: "q-textarea",
      placeholder: "Ingresar el descripción",
      filter: true,
    },
    {
      name: "image",
      label: "Imagen del evento",
      component: "q-dropzone",
    },
  ],
};
