

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative min-w-[300px]">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black">
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
