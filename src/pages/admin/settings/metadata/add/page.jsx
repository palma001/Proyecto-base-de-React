import { useParams } from "react-router-dom";
import { config } from "../../configs";
import QForm from "../../../../../components/Dynamic/QForm";
import { post } from "../../../../../libs/axios";
import { toast } from "sonner";

export default function MetadataAdd() {
  /**
   * Get id from entity
   * @type {string}
   */
  const { entity } = useParams();
  /**
   * Get config by entity
   * @type {FormConfigProps}
   */
  const configs = config[entity];
  /**
   * Handler form data
   * @param {Object} data save form data
   * @returns {Promise<void>} response from axios
   */
  const handlerData = async (data) => {
    try {
      const response = await post(`admin/${configs.entity}`, {
        ...data,
        user_created_id: 1,
      });
      if (response.status) {
        response.message = "Se ha guardado correctamente";
      }
      return response;
    } catch (error) {
      toast(error.message, "error");
    }
  };
  return (
    <div className="w-[330px] sm:w-[500px] md:w-[800px]">
      <QForm formConfig={configs.form} handlerData={handlerData} />
    </div>
  );
}
