import React from "react";
import clsx from "clsx";

const Tooltip = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "absolute px-1 py-px bg-green-100 rounded text-green-400 text-sm font-medium",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Tooltip;
