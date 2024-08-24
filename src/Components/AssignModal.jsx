import React from "react";

const Modal = ({ isOpen, onClose, onAssign }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-96 p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Assign Technician</h2>

        {/* Dropdown List */}
        <label htmlFor="taskDropdown" className="block mb-2">
          Select Technician:
        </label>
        <select
          id="taskDropdown"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        >
          <option value="task1">Mr. Kamal</option>
          <option value="task2">Mr. Aamal</option>
          <option value="task3">Mr. Namal</option>
        </select>

        {/* Assign Button */}
        <button
          onClick={onAssign}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Assign
        </button>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="ml-4 bg-gray-500 text-white px-4 py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
