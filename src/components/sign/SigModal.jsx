/* eslint-disable react/prop-types */
import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { FaPencil } from "react-icons/fa6";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function SigModal({ setSignatureURL }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const sigRef = useRef(null);

  return (
    <>
      <Button
        onPress={onOpen}
        isIconOnly
        size="sm"
        color="warning"
        className="text-white"
      >
        <FaPencil className="w-4 h-4" />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom-center"
        scrollBehavior="outside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Firma</ModalHeader>
              <ModalBody>
                <div
                  className="flex items-center justify-center"
                  style={{
                    border: "1px solid #000",
                  }}
                >
                  <SignatureCanvas
                    velocityFilterWeight={1}
                    ref={sigRef}
                    canvasProps={{
                      width: 380,
                      height: 200,
                      className: "sigCanvas",
                    }}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose}>
                  Cancelar
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    setSignatureURL(sigRef?.current?.toDataURL());
                    onClose();
                  }}
                >
                  Confirmar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
