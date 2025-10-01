import React from "react";

const Loader = ({ size = "6", className = "" }) => {
  return (
    <div
      className={`w-${size} h-${size} border-4 border-gray-300 border-t-pink-500 rounded-full animate-spin ${className}`}
    />
  );
};

export default Loader;
