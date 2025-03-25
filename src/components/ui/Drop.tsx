<<<<<<< HEAD
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function Drop({ onLoaded, children }) {
  const onDrop = useCallback((acceptedFiles) => {
    onLoaded(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
=======
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useDropzone } from "react-dropzone";

export default function Drop({ onLoaded, children }: any) {
  const onDrop = React.useCallback((acceptedFiles: any) => {
    onLoaded(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
>>>>>>> subscription/master
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
