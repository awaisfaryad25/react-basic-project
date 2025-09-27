import React from "react";

const RadioGroup = ({ options = [], value, onChange, name, className = "" }) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {options.map((opt, i) => (
        <label key={i} className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name={name}
            value={opt.value || opt}
            checked={value === (opt.value || opt)}
            onChange={() => onChange(opt.value || opt)}
            className="w-4 h-4 accent-pink-500"
          />
          {opt.label || opt}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
