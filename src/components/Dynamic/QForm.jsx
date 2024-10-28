/* eslint-disable react/prop-types */
import { useState } from "react";
import Form from "./Form";
import { Button } from "@nextui-org/react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function QForm({
  formConfig,
  handlerData,
  handlerChangeValue,
  defaultValues,
}) {
  /**
   * Loading form
   * @type {boolean}
   */
  const [isLoading, setIsLoading] = useState(false);
  /**
   * Navigate to previous page
   */
  const navigation = useNavigate();
  /**
   * Loading callback
   * @param {string} message
   * @param {boolean} status
   * @param {Function} callback
   */
  const loadingCallback = (message, status, callback) => {
    if (!status) {
      showError(message);
    }
    setIsLoading(false);
    if (callback) callback();
  };

  const showError = (message) => {
    if (typeof message === "string") {
      toast.error(message);
      return;
    }
    for (const key in message) {
      if (message[key]) {
        message[key].forEach((mg) => {
          toast.error(mg);
        });
      }
    }
  };

  /**
   * Handler submit form
   * @param {Object} data
   */
  const handlerSubmit = async (data) => {
    setIsLoading(true);
    const response = await handlerData(data);
    if (!response.status) {
      loadingCallback(response.message, response.status);
    } else {
      loadingCallback(response.message, "success", () => {
        navigation(-1);
        toast.success(response.message);
      });
    }
  };

  return (
    <div className="grid gap-3">
      <div className="flex items-center justify-start gap-2">
        <Button
          className="bg-primary"
          isIconOnly
          variant="shadow"
          onClick={() => {
            navigation(-1);
          }}
        >
          <FaCircleArrowLeft color="white" size={20} />
        </Button>
        <h2 className="uppercase py-3 text-lg font-semibold">
          {formConfig.title}
        </h2>
      </div>
      <Form
        config={formConfig}
        handlerSubmit={handlerSubmit}
        loading={isLoading}
        defaultValues={defaultValues}
        handlerChangeValue={(data) => {
          if (handlerChangeValue) handlerChangeValue(data);
        }}
      />
    </div>
  );
}
