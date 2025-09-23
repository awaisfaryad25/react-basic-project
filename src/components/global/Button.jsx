import React from "react";

const variantClasses = {
  primary: "w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg border-2 border-transparent transition-all duration-300 hover:text-blue-500 hover:bg-white hover:border-blue-500",
  outline: "border px-3 py-1 uppercase text-sm text-[var(--text-secondary)] hover:!text-[var(--bg-color)] hover:!bg-[var(--bg-transparent)] hover:!border-[var(--text-secondary)]",
  outlineDashed: "bg-transparent rounded border border-dotted border-[var(--text-ternary)]/30 px-2 py-1 text-xs text-[var(--text-ternary)] uppercase font-[300] mt-3 mr-2 hover:!text-[var(--bg-color)] hover:!bg-[var(--bg-transparent)] hover:!border-[var(--text-secondary)]",
};

const activeClasses = {
  primary: "!text-white !bg-[var(--text-primary)]",
  outline: "!text-white !border-[var(--text-primary)] bg-[var(--text-primary)]",
  outlineDashed: "!text-white !border-solid !border-[var(--text-primary)] !bg-[var(--text-primary)]",
};

const Button = ({
  label = "",
  variant = "primary",
  onClick,
  type = "button",
  disabled = false,
  className = "",
  active = false,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex justify-center items-center transition-colors duration-300 cursor-pointer
        ${variantClasses[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${active ? activeClasses[variant] : ""}
        ${className}
      `}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
