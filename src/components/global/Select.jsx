import React from "react";

const variantClasses = {
  primary: "border-2 border-[#FBA8C3] focus:border-pink-500",
  outline: "border border-gray-400 focus:border-black",
  underline: "border-0 border-b-2 border-gray-400 focus:border-pink-500 rounded-none",
};

const Select = ({ variant = "primary", className = "", options = [], ...props }) => {
  return (
    <select
      {...props}
      className={`w-full py-2 px-4 mb-2 rounded-lg bg-white focus:outline-0 transition-all duration-200
        ${variantClasses[variant]} 
        ${className}`}
    >
      {options.map((opt, index) => (
        <option key={index} value={opt.value || opt}>
          {opt.label || opt}
        </option>
      ))}
    </select>
  );
};

export default Select;
