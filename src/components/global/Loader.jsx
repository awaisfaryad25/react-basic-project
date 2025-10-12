import React from "react";

const sizeClasses = {
  sm: "w-4 h-4 border-2",
  md: "w-6 h-6 border-4",
  lg: "w-10 h-10 border-4",
  xl: "w-16 h-16 border-[6px]",
};

const Loader = ({ size = "md", className = "" }) => {
  return (
    <div
      className={`${sizeClasses[size]} border-gray-300 border-t-pink-500 rounded-full animate-spin ${className}`}
    />
  );
};

export default Loader;
