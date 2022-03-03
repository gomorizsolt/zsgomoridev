import React, { HTMLAttributes } from "react";

const Button: React.FC<HTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
}) => (
  <button
    className={`group relative inline-block px-4 py-2 font-medium ${className}`}
  >
    <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-slate-300 transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
    <span className="absolute inset-0 h-full w-full border-2 border-slate-300 bg-slate-800 group-hover:bg-slate-900"></span>
    <span className="relative text-slate-300 group-hover:text-slate-200">
      {children}
    </span>
  </button>
);

export default Button;
