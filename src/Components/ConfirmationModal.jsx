// ConfirmationModal Component
const ConfirmationModal = ({
  message = "Are you sure?",
  onConfirm,
  onCancel,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  confirmButtonStyle = "bg-[#00ABE4] text-white",
  cancelButtonStyle = "bg-red-500 text-white",
}) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-[#3C4D71] rounded-lg p-6 w-80">
      <p className="text-center text-lg font-semibold mb-4 text-white">{message}</p>
      <div className="flex justify-around mt-4">
        <button onClick={onCancel} className={`px-4 py-2 rounded-lg ${cancelButtonStyle}`}>
          {cancelLabel}
        </button>
        <button onClick={onConfirm} className={`px-4 py-2 rounded-lg ${confirmButtonStyle}`}>
          {confirmLabel}
        </button>
      </div>
    </div>
  </div>
);

export default ConfirmationModal;
