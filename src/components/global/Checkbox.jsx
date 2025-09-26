import React from "react";

const variantClasses = {
  default: "accent-pink-500",
  outline:
    "appearance-none w-4 h-4 border-2 border-pink-500 rounded-sm checked:bg-pink-500 checked:border-pink-500",
  filled:
    "appearance-none w-4 h-4 bg-gray-200 border-2 border-gray-400 rounded-sm checked:bg-pink-500 checked:border-pink-500",
  rounded:
    "appearance-none w-4 h-4 border-2 border-pink-500 rounded-full checked:bg-pink-500 checked:border-pink-500",
};

const Checkbox = ({ label, checked, onChange, variant = "default", className = "", ...props }) => {
  return (
    <label className={`flex items-center gap-2 cursor-pointer ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={`w-4 h-4 transition-all duration-200 ${variantClasses[variant]}`}
        {...props}
      />
      {label && <span>{label}</span>}
    </label>
  );
};

export default Checkbox;
