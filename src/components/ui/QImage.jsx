/* eslint-disable react/prop-types */
import React from "react";

function QImage({ src, alt, width = 500, height = 500, className, style }) {
  return (
    <img
      width={width}
      height={height}
      src={src}
      alt={alt}
      className={className}
      style={style}
    />
  );
}

export default QImage;
