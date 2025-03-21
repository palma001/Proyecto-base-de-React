/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useDropzone } from "react-dropzone";

export default function Drop({ onLoaded, children }: any) {
  const onDrop = React.useCallback((acceptedFiles: any) => {
    onLoaded(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/png": [".png", ".jpg", ".jpeg"] },
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {children}
    </div>
  );
}
