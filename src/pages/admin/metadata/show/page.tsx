/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useNavigate, useParams } from "react-router";
import { config } from "../configs";
import { toast } from "sonner";
import QForm from "../../../../components/ui/QForm";
import Loading from "../../../../components/ui/Loading";
import { FaPencil, FaTrash, FaX } from "react-icons/fa6";
import NotFoundPage from "../../../404/page";
import { api } from "../../../../libs/axios";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Breadcrumbs,
  BreadcrumbItem,
} from "@heroui/react";

export default function MetadataShow() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  /**
   * Extracts the `id` and `entity` parameters from the URL.
   * @type {{ id: string, entity: string }}
   */
  const { id, entity }: any = useParams();

  /**
   * Configuration for the current entity.
   * @type {TableConfigProps | undefined}
   */
  const configs = config[entity];

  /**
   * State for the form configuration.
   * @type {Object}
   */
  const [form, setForm] = React.useState({
    ...configs?.form,
    title: configs?.showTitle,
    disable: true,
  });

  /**
   * State for storing the fetched entity data.
   * @type {any | null}
   */
  const [data, setData] = React.useState(null);

  /**
   * Indicates whether the data is being loaded.
   * @type {boolean}
   */
  const [loading, setLoading] = React.useState(false);

  /**
   * Indicates whether the form submission is in progress.
   * @type {boolean}
   */
  const [loadingForm, setLoadingForm] = React.useState(false);

  /**
   * Prevents redundant API calls.
   * @type {React.MutableRefObject<boolean>}
   */
  const isFetching = React.useRef(false);

  React.useEffect(() => {
    if (configs && id) {
      fetchData();
    }
  }, [id, configs]);

  /**
   * Fetches the data for the current entity by ID.
   * @returns {Promise<void>}
   */
  const fetchData = async () => {
    if (isFetching.current) return;

    isFetching.current = true;
    try {
      setLoading(true);
      const { data } = await api.get(`${configs?.services}/${id}`);
      setData(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
      isFetching.current = false;
    }
  };

  /**
   * Handles form submission for editing the entity.
   * @param {Object} data The form data to submit.
   * @returns {Promise<void>}
   */
  const handlerData = async (data: any) => {
    try {
      setLoadingForm(true);
      data.append("_method", "put");
      await api.post(`${configs?.services}/${id}`, data);
      toast.success("Successfully updated the record");
      navigate(-1);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setLoadingForm(false);
    }
  };

  /**
   * Handles the deletion of the entity.
   * @returns {Promise<void>}
   */
  const handlerDelete = async () => {
    try {
      setLoading(true);
      await api.delete(`${configs?.services}/${id}`);
      toast.success("Successfully deleted the record");
      navigate(-1);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!configs) return <NotFoundPage />;

  return (
    <div className="grid justify-center">
      <Breadcrumbs className="mb-3" size="lg">
        <BreadcrumbItem onPress={() => navigate(-1)}>
          {configs.tableTitle}
        </BreadcrumbItem>
        <BreadcrumbItem>Details of {configs.form.title}</BreadcrumbItem>
      </Breadcrumbs>
      <div className="w-[330px] sm:w-[500px] md:w-[800px] grid gap-2 pb-4">
        <div className="flex w-full justify-center gap-3">
          <Button
            variant="solid"
            color={form.disable ? "primary" : "warning"}
            className="text-white"
            isIconOnly
            onPress={() => {
              setForm((prev: any) => ({ ...prev, disable: !prev.disable }));
            }}
          >
            {form.disable ? (
              <FaPencil className="size-4" />
            ) : (
              <FaX className="size-4" />
            )}
          </Button>
          <Button variant="solid" color="danger" isIconOnly onPress={onOpen}>
            <FaTrash className="size-4" />
          </Button>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <QForm
            config={form}
            defaultValues={data}
            handlerSubmit={handlerData}
            loading={loadingForm}
          />
        )}
      </div>
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Confirm</ModalHeader>
              <ModalBody>
                <p>Are you sure you want to delete this record?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="warning" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="danger"
                  onPress={handlerDelete}
                  isLoading={loading}
                >
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
