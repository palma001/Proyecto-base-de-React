/* eslint-disable react/prop-types */
import React from "react";
import { primary45 } from "../../utils/colors";
import Draggable from "react-draggable";

export default function DraggableSignature({ url, onEnd }) {
  const styles = {
    container: {
      position: "absolute",
      zIndex: 20,
      border: `2px solid ${primary45}`,
    },
    controls: {
      position: "absolute",
      right: 0,
      display: "inline-block",
      backgroundColor: primary45,
      touchAction: "none",
      // borderRadius: 4,
    },
    smallButton: {
      display: "inline-block",
      cursor: "pointer",
      padding: 4,
    },
  };
  return (
    <Draggable
      onStop={onEnd}
      defaultPosition={{ x: 200, y: 200 }}
      grid={[25, 25]}
      scale={1}
    >
      <div style={styles.container}>
        <img src={url} width={100} draggable={false} alt="img" />
      </div>
    </Draggable>
  );
}
