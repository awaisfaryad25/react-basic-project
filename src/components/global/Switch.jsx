import React from "react";

const Switch = ({ checked, onChange }) => {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 
        ${checked ? "bg-pink-500" : "bg-gray-400"}`}
    >
      <div
        className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 
          ${checked ? "translate-x-6" : "translate-x-0"}`}
      />
    </button>
  );
};

export default Switch;
