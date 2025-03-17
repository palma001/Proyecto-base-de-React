/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useNavigate, useParams } from "react-router";
import { config } from "../configs";
import QForm from "../../../../components/ui/QForm";
import { toast } from "sonner";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import NotFoundPage from "../../../404/page";
import { api } from "../../../../libs/axios";

export default function MetadataAdd() {
  /**
   * Navigate to other page
   */
  const navigate = useNavigate();
  /**
   * Get id from entity
   * @type {string}
   */
  const { entity }: any = useParams();

  const [loadingForm, setLoadingForm] = React.useState(false);
  /**
   * Get config by entity
   * @type {FormConfigProps}
   */
  const configs = config[entity];
  /**
   * Handler data from form
   * @param {FormData} data
   * @returns
   */
  const handlerData = async (data: any) => {
    try {
      setLoadingForm(true);
      data.append("type", entity);
      await api.post(configs?.services, data);
      toast.success("Se ha guardado correctamente");
      navigate(-1);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setLoadingForm(false);
    }
  };

  if (!configs) return <NotFoundPage />;

  return (
    <div className="px-4">
      <div className="grid justify-center">
        <Breadcrumbs className="mb-4" size="lg">
          <BreadcrumbItem onPress={() => navigate(-1)}>
            {configs.tableTitle}
          </BreadcrumbItem>
          <BreadcrumbItem>Agregar {configs.form.title}</BreadcrumbItem>
        </Breadcrumbs>
        <div className="w-[330px] sm:w-[500px] md:w-[800px] grid gap-2 pb-4">
          <QForm
            config={configs.form}
            handlerSubmit={handlerData}
            loading={loadingForm}
          />
        </div>
      </div>
    </div>
  );
}
