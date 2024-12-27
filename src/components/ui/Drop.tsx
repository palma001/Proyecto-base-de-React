import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function Drop({ onLoaded, children }) {
  const onDrop = useCallback((acceptedFiles) => {
    onLoaded(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
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
