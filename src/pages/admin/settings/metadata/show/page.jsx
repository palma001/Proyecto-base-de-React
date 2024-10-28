/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { config } from "../../configs";
import { deleted, get, put } from "../../../../../libs/axios";
import { toast } from "sonner";
import QForm from "../../../../../components/Dynamic/QForm";
import Loading from "../../../../../components/ui/Loading";
import { FaPencil, FaTrash, FaX } from "react-icons/fa6";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function MetadataShow() {
  /**
   * Disclosure state
   * @type {useDisclosure}
   */
  const { isOpen, onOpen, onClose } = useDisclosure();
  /**
   * Get id from url
   * @type {string}
   */
  const { id, entity } = useParams();
  /**
   * Get config by entity
   * @type {TableConfigProps}
   */
  const configs = config[entity];
  /**
   * Get show details
   * @type {string}
   */
  const [form, setForm] = React.useState({
    ...configs.form,
    title: configs.showTitle,
    disable: true,
  });
  /**
   * Navigate to previous page
   */
  const navigation = useNavigate();
  /**
   * Data of table
   * @type {Array}
   */
  const [data, setData] = React.useState(null);
  /**
   * Data of table
   * @type {Array}
   */
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setData(null);
    getData();
  }, [id]);

  /**
   * Get data entity
   */
  async function getData() {
    try {
      setLoading(true);
      const { data, status, message } = await get(
        `admin/${configs.entity}/${id}`
      );
      if (!status) {
        toast.error(message);
        return;
      }
      setData(data);
    } catch (error) {
      toast, error(error.message);
    } finally {
      setLoading(false);
    }
  }
  /**
   * Handler data from form edit
   * @param {Object} data data from form
   * @returns {Promise<void>} response from axios
   */
  const handlerData = async (data) => {
    try {
      const response = await put(`admin/${configs.entity}`, id, {
        ...data,
        user_updated_id: 1,
      });
      if (response.status) {
        response.message = "Se ha modificado correctamente";
      }
      return response;
    } catch (error) {
      toast.error(error.message);
    }
  };
  /**
   * Handler data from form delete
   * @returns {Promise<void>} response from axios
   */
  const handlerDelete = async () => {
    try {
      setLoading(true);
      const response = await deleted(`admin/${configs.entity}`, id);
      if (response.status) {
        toast.success("Se ha eliminado correctamente");
        navigation(-1);
        return;
      }
      toast.error(response.message);
      return;
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(true);
    }
  };

  return (
    <>
      <div className="w-[330px] sm:w-[500px] md:w-[800px]">
        <div className="flex w-full justify-center gap-3">
          <Button
            variant="solid"
            color={form.disable ? "primary" : "warning"}
            className="text-white"
            isIconOnly
            onClick={() => {
              setForm({
                ...form,
                disable: !form.disable,
              });
            }}
          >
            {form.disable ? (
              <FaPencil className="size-4" />
            ) : (
              <FaX className="size-4" />
            )}
          </Button>
          <Button variant="solid" color="danger" isIconOnly onClick={onOpen}>
            <FaTrash className="size-4" />
          </Button>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <QForm
            formConfig={form}
            defaultValues={data}
            handlerData={handlerData}
          />
        )}
      </div>
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Confirmar
              </ModalHeader>
              <ModalBody>
                <p>¿Esta seguro que desea eliminar el registro?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="warning" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button
                  color="danger"
                  onPress={handlerDelete}
                  isLoading={loading}
                >
                  Eliminar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
