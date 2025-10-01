
const variantClasses = {
  primary: "border-2 border-[#FBA8C3] focus:border-pink-500",
  outline: "border border-gray-400 focus:border-black",
  underline: "border-0 border-b-2 border-gray-400 focus:border-pink-500 rounded-none",
};

const Input = ({
  variant = "primary",
  className = "",
  ...props
}) => {
  return (
    <input
      {...props}
      className={`w-full py-2 px-4 mb-2 rounded-lg focus:outline-0 transition-all duration-200 
        ${variantClasses[variant]} 
        ${className}`}
    />
  );
};

export default Input;
