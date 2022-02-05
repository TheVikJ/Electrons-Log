import React from "react";

function Subheader({ children, className }) {
  return (
    <h2
      className={`font-medium text-xl md:text-2xl text-slate-900 text-center pt-14 ${className}`}
    >
      <span className={"py-2 px-3 rounded-lg bg-slate-100"}>{children}</span>
    </h2>
  );
}

export default Subheader;
