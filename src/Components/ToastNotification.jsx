import { useEffect } from "react";

const ToastNotification = ({
  message,
  onClose,
  duration = 3000,
  closeButtonStyle = "text-red-600 absolute bottom-1 right-0 p-1",
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onClose, duration]);

  return (
    <div className="fixed bottom-5 right-5 bg-green-500 text-white py-2 px-4 rounded shadow-lg z-50 mr-4">
      <p>{message}</p>
      <button onClick={onClose} className={closeButtonStyle}>
        X
      </button>
    </div>
  );
};

export default ToastNotification;
