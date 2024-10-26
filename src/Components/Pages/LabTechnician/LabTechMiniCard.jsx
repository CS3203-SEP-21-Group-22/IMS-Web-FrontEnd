import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LabTechMiniCard = ({ equipmentData }) => {
  const [error, setError] = useState(null);
  const [boxExpanded, setBoxExpanded] = useState(false);
  const [newData, setNewData] = useState({}); // Initialize as an object instead of an array
  const [loading, setLoading] = useState(false); // Track loading state

  const navigate = useNavigate();

  const fetchEquipment = async () => {
    setError(null); // Clear any previous errors
    setLoading(true); // Set loading to true while data is being fetched
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API_URL}api/user/equipments/${equipmentData.equipmentId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      setNewData(response.data);
    } catch (error) {
      console.error("Error when fetching equipment data", error);
      setError("Failed to load equipment information");
    } finally {
      setLoading(false); // Stop loading when request is finished
    }
  };

  const handleClick = () => {
    setBoxExpanded(!boxExpanded);
    if (!boxExpanded && !newData.totalCount) {
      fetchEquipment(); // Fetch data only when expanding the card for the first time
    }
  };

  return (
    <div className="p-4">
      <div onClick={handleClick}>
        {error && <p className="text-red-500">{error}</p>}
        <div
          className={`w-[377px] ${
            boxExpanded ? "h-[320px]" : "h-[138px]"
          } bg-[#3C4D71] flex-col flex items-center justify-center cursor-pointer rounded-[20px] transition-height duration-300 ease-in-out`}
        >
          <div className="flex-row flex items-center cursor-pointer text-white ">
            <div className="w-[150px]">
              <img src={equipmentData.imageUrl} alt="mouse" />
            </div>
            <div className="flex flex-col justify-center text-[20px] text-left pl-4">
              <p className="font-semibold">{equipmentData.name}</p>
              <p>Model: {equipmentData.model}</p>
              <p>Lab: {equipmentData.labName}</p>
            </div>
          </div>

          {boxExpanded && (
            <div className="flex flex-col items-center justify-center mt-4">
              {loading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <p>Total Items: {newData.totalCount}</p>
                  <p>Reservations Count: {newData.reservedCount}</p>
                  <p>Available Items: {newData.availableCount}</p>
                  <button
                    onClick={(e) => {
                      navigate("/items-tech", { state: { equipmentId: equipmentData.equipmentId } });
                    }}
                    className="mt-4 p-2 bg-blue-500 text-white rounded"
                  >
                    View Items
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LabTechMiniCard;
