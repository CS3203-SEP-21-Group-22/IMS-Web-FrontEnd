import React, { useState } from "react";
import mouse from "../../../../src/styles/images/mouse.png";
import axios from "axios";

const EquipmentMiniCard = ({ equipmentData }) => {
  const [error, setError] = useState(null);
  const [boxExpanded, setBoxExpanded] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleReserveEquipment = async () => {
    if (!startDate || !endDate) {
      setError("Please select both start and end dates.");
      return;
    }

    const confirmReserve = window.confirm("Are you sure you want to reserve this equipment?");
    if (!confirmReserve) return;

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
            Authorization: `Bearer ${localStorage.getItem("access_token")}`, // Include the token in the Authorization header
          },
        },
      );

      console.log("Reservation successful", response);
      setError(null);
      alert("Reservation confirmed!");
    } catch (error) {
      console.error("Error reserving equipment:", error);
      setError("Failed to reserve the equipment. Please try again.");
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

  return (
    <div className="p-4">
      <div onClick={() => setBoxExpanded(!boxExpanded)}>
        {error && <p className="text-red-500 ">{error}</p>}
        <div
          className={`w-[377px] ${
            boxExpanded ? "h-[320px]" : "h-[138px]"
          } bg-[#3C4D71] flex-col flex items-center justify-center cursor-pointer rounded-[20px] transition-height duration-300 ease-in-out`}
        >
          <div className="flex-row flex items-center cursor-pointer text-white ">
            <div className="w-[150px]">
              <img src={mouse} alt="mouse" />
            </div>
            <div className="flex flex-col justify-center text-[20px] text-left">
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
                    handleReserveEquipment();
                  }}
                  className="mt-4 p-2 bg-blue-500 text-white rounded"
                >
                  Reserve Equipment
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentMiniCard;
