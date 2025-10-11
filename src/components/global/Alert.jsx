

const variantClasses = {
  success: "bg-green-100 text-green-700 border-green-500",
  error: "bg-red-100 text-red-700 border-red-500",
  warning: "bg-yellow-100 text-yellow-700 border-yellow-500",
  info: "bg-blue-100 text-blue-700 border-blue-500",
};

const Alert = ({ type = "info", message }) => {
  return (
    <div className={`p-3 border-l-4 rounded-md ${variantClasses[type]} `}>
      {message}
    </div>
  );
};

export default Alert;
