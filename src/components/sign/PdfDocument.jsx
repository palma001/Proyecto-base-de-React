/* eslint-disable react/prop-types */
import { useCallback, useState } from "react";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import React from "react";
import PagingControl from "./PagingControl";
import SigModal from "./SigModal";
import { Button } from "@nextui-org/react";
import { FaBackspace, FaCheck, FaDownload } from "react-icons/fa";
import FileSaver from "file-saver";
import {
  FaBackward,
  FaRotate,
  FaRotateLeft,
  FaUpload,
  FaXmark,
} from "react-icons/fa6";
import { isMobile } from "react-device-detect";
import { Directory, Filesystem } from "@capacitor/filesystem";

import { FileOpener } from "@capacitor-community/file-opener";
import { toast } from "sonner";
import { base64ToBlob } from "../../utils/Utils";
import { post } from "../../libs/axios";
import { AuthContext } from "../../context/auth-context";
import { getFileAsBlob } from "../../utils/commons";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resizeObserverOptions = {};

const maxWidth = 800;

export default function PdfDocument({
  file,
  contract,
  setPageDetails,
  handlerPageNum,
  setSignatureURL,
  setSign,
  fileName,
  clear,
  children,
  goBack,
}) {
  const [containerRef, setContainerRef] = useState(null);
  const [containerWidth, setContainerWidth] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNum, setPageNum] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const { session } = React.useContext(AuthContext);
  const [signature, setSignature] = useState(null);

  React.useEffect(() => {
    checkFilePermissions();
  }, []);

  React.useEffect(() => {
    setSignatureURL(signature);
  }, [setSignatureURL, signature]);

  const checkFilePermissions = async () => {
    try {
      const permissionStatus = await Filesystem.checkPermissions();
      if (permissionStatus.publicStorage === "granted") {
        setPermissionGranted(true);
      } else {
        const requestPermissionStatus = await Filesystem.requestPermissions();
        setPermissionGranted(
          requestPermissionStatus.publicStorage === "granted"
        );
      }
    } catch (error) {
      console.error("Error al verificar o solicitar permisos:", error);
    }
  };

  const onResize = useCallback((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setTotalPages(nextNumPages);
  }

  async function uploadFile() {
    try {
      setIsLoading(true);
      const fileConverted = await base64ToBlob(file, fileName);
      const formData = new FormData();
      formData.append("contractable_type", "App\\Models\\Patient");
      formData.append("contractable_id", session.user.id);
      formData.append("contract_id", contract.id);
      formData.append("user_created_id", session.user.id);
      formData.append("path", `patients/${session.user.id}/contracts`);
      formData.append("file", fileConverted);
      const { data } = await post("contractables", formData);
      downloadFile(data.file);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const downloadMobile = async (fileSigned) => {
    if (permissionGranted) {
      const result = await Filesystem.writeFile({
        path: fileName,
        directory: Directory.Documents,
        recursive: true,
        data: fileSigned,
      });
      toast.success(
        `Archivo cargado exitosamente, nombre del archivo: ${fileName}`,
        {
          action: {
            label: "Abrir",
            onClick: () => openFile(result.uri),
          },
        }
      );
    } else {
      await checkFilePermissions();
      uploadFile(file, `Firmado-${fileName}`);
    }
  };

  async function downloadFile(data) {
    try {
      const fileSigned = await getFileAsBlob(data.full_url, fileName);
      if (isMobile) {
        downloadMobile(fileSigned);
      } else {
        FileSaver.saveAs(fileSigned, fileName);
        toast.success(
          `Archivo cargado exitosamente, nombre del archivo: ${fileName}`
        );
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const openFile = async (url) => {
    if (!url) return;
    setIsLoading(true);
    try {
      const fileOpenerOptions = {
        filePath: url,
        contentType: "application/pdf",
        openWithDefault: true,
      };
      await FileOpener.open(fileOpenerOptions);
    } catch (e) {
      console.log("Error opening file", e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      ref={setContainerRef}
      className="w-full p-4 flex justify-center items-center bg-gray-700 gap-3 relative"
    >
      <div className="md:flex-col flex gap-2 fixed bottom-4 right-4 z-10">
        <SigModal setSignatureURL={setSignature} />
        {signature && (
          <>
            <Button
              isIconOnly
              size="sm"
              color="success"
              className="text-white"
              onClick={() => {
                setSign();
                setSignature(null);
              }}
            >
              <FaCheck className="w-4 h-4" />
            </Button>
            <Button
              isIconOnly
              size="sm"
              color="danger"
              className="text-white"
              onClick={() => {
                setSignature(null);
                clear();
              }}
            >
              <FaXmark className="w-4 h-4" />
            </Button>
          </>
        )}
        {!signature && (
          <Button
            isIconOnly
            size="sm"
            color="danger"
            className="text-white"
            onClick={goBack}
          >
            <FaRotateLeft className="w-4 h-4" />
          </Button>
        )}
        <Button
          isLoading={isLoading}
          isIconOnly
          size="sm"
          color="secondary"
          onClick={() => {
            uploadFile(file, fileName);
          }}
        >
          <FaUpload className="w-4 h-4" />
        </Button>
        {file && totalPages > 1 && (
          <div className="flex md:flex-col items-center gap-1">
            <PagingControl
              pageNum={pageNum}
              setPageNum={(page) => {
                setPageNum(page);
                handlerPageNum(page);
              }}
              totalPages={totalPages}
            />
          </div>
        )}
      </div>
      <div className="bg-white py-1 flex rounded-md">
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          className="flex rounded-md"
        >
          <Page
            pageNumber={pageNum + 1}
            width={
              containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth
            }
            onLoadSuccess={setPageDetails}
          />
          {children}
        </Document>
      </div>
    </div>
  );
}
