import React from "react";

const Checkbox = ({ label, checked, onChange, className = "", ...props }) => {
  return (
    <label className={`flex items-center gap-2 cursor-pointer ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 accent-pink-500"
        {...props}
      />
      {label && <span>{label}</span>}
    </label>
  );
};

export default Checkbox;
