import React, { useState } from "react";

const Tooltip = ({
  children,
  content,
}: {
  children: React.ReactNode;
  content: React.ReactNode;
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="absolute z-10 px-4 py-2 text-sm text-white justify-center bg-black rounded-md bottom-full mb-2 transition-opacity duration-300 opacity-100">
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
