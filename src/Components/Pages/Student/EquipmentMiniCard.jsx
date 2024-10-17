import React, { useState } from "react";
import axios from "axios";

const EquipmentMiniCard = ({ equipmentData }) => {
  const [error, setError] = useState(null);
  const [boxExpanded, setBoxExpanded] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleReserveEquipment = async () => {
    if (!startDate || !endDate) {
      setError("Please select both start and end dates.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/student/reservations",
        {
          equipmentId: equipmentData.equipmentId,
          startDate,
          endDate,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );

      console.log("Reservation successful", response);
      setError(null);
      alert("Reservation confirmed!");
      setShowConfirmation(false); // Close the modal on success
    } catch (error) {
      console.error("Error reserving equipment:", error);
      setError("Failed to reserve the equipment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleStartDateChange = (e) => {
    const selectedStartDate = e.target.value;
    setStartDate(selectedStartDate);

    if (endDate && endDate <= selectedStartDate) {
      setEndDate(""); // Reset end date
      setError("End date must be greater than start date.");
    } else {
      setError(null);
    }
  };

  const handleEndDateChange = (e) => {
    const selectedEndDate = e.target.value;
    setEndDate(selectedEndDate);

    if (selectedEndDate <= startDate) {
      setError("End date must be greater than start date.");
    } else {
      setError(null);
    }
  };

  const handleCancel = () => {
    setShowConfirmation(false); // Close confirmation modal
  };

  const handleReserveClick = () => {
    if (!startDate || !endDate) {
      setError("Please select both start and end dates.");
      return;
    }

    setShowConfirmation(true); // Show confirmation modal before reservation
  };

  const handleConfirm = () => {
    handleReserveEquipment(); // Call reserve function on confirmation
  };

  return (
    <div className="p-4">
      <div onClick={() => setBoxExpanded(!boxExpanded)}>
        {error && <p className="text-red-500">{error}</p>}
        <div
          className={`w-[397px] ${
            boxExpanded ? "h-[320px]" : "h-[138px]"
          } bg-[#3C4D71] flex-col flex items-center justify-center cursor-pointer rounded-[20px] transition-height duration-300 ease-in-out`}
        >
          <div className="flex-row flex items-center cursor-pointer text-white">
            <div className="w-[150px]">
              <img src={equipmentData.imageUrl} alt="equipment" />
            </div>
            <div className="flex flex-col justify-center text-[20px] text-left ml-4">
              <p className="font-semibold">{equipmentData.name}</p>
              <p>Model: {equipmentData.model}</p>
              <p>Lab: {equipmentData.labName}</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            {boxExpanded && (
              <>
                <div className="mt-4 flex-row flex items-center justify-center">
                  <div className="mr-4 flex-col flex items-center justify-center">
                    <label className="text-white">START DATE</label>
                    <input
                      type="date"
                      className="ml-2 p-3 text-white border-none rounded bg-[#3C4D71] shadow-lg shadow-[#252f46]"
                      value={startDate}
                      onChange={handleStartDateChange}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                  <div className="mr-4 flex-col flex items-center justify-center">
                    <label className="text-white">END DATE</label>
                    <input
                      type="date"
                      className="ml-2 p-3 text-white border-none rounded bg-[#3C4D71] shadow-lg shadow-[#252f46]"
                      value={endDate}
                      onChange={handleEndDateChange}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReserveClick(); // Trigger reservation confirmation
                  }}
                  className="mt-4 p-2 bg-blue-500 text-white rounded"
                >
                  Reserve Equipment
                </button>
              </>
            )}
          </div>

          {/* Confirmation Modal */}
          {showConfirmation && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-[#3C4D71] p-2 rounded-lg shadow-lg text-center">
                <p className="text-white mb-4">Are you sure you want to reserve this equipment?</p>
                <div className="flex justify-center">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded mr-4"
                    onClick={handleConfirm} // Confirm reservation
                    disabled={loading}
                  >
                    {loading ? "Reserving..." : "Yes"}
                  </button>
                  <button
                    className="bg-[#03ADE5] px-4 py-2 rounded text-white"
                    onClick={handleCancel} // Close modal
                  >
                    No
                  </button>
                </div>
                {error && <p className="text-red-500 mt-2">{error}</p>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EquipmentMiniCard;
