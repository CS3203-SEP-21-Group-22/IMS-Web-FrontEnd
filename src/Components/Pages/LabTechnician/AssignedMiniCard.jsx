import React, { useState } from "react";
import axios from "axios";

const AssignedMiniCard = ({ assignedData }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState(null); // State to store additional fetched information
  const [isExpanded, setIsExpanded] = useState(false); // Track if the card is expanded

  const formattedStartDate =
    assignedData.startDate instanceof Date
      ? assignedData.startDate.toISOString().split("T")[0]
      : new Date(assignedData.startDate).toISOString().split("T")[0];
  const formattedEndDate =
    assignedData.endDate instanceof Date
      ? assignedData.endDate.toISOString().split("T")[0]
      : new Date(assignedData.endDate).toISOString().split("T")[0];

  const fetchMaintenanceItem = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API_URL}api/user/maintenance/${assignedData.maintenanceId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      );
      setAdditionalInfo(response.data);
      setIsExpanded(true);
    } catch (error) {
      console.error("Error when fetching maintenance", error);
      setError("Failed to load maintenance information");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`w-[387px] ${
        isExpanded ? "h-auto" : "h-[300px]"
      } bg-[#3C4D71] rounded-[20px] flex p-2 flex-row items-center justify-center hover:scale-105 transition duration-200`}
    >
      <div className="w-[170px] flex flex-col items-center justify-center bg-[#3C4D71] shadow-lg shadow-[#2e3a56] rounded-[20px] p-2 ">
        <img src={assignedData.imageUrl} alt="mouse" className="mb-4" />
        <p className="text-white text-center text-[20px] font-semibold">{assignedData.itemName}</p>
      </div>

      <div className="flex flex-col justify-center text-white text-[16px] pl-6">
        <p>MODEL: {assignedData.itemModel}</p>
        <p>LAB: {assignedData.labName}</p>
        <p>START: {formattedStartDate}</p>
        <p>END: {formattedEndDate}</p>
        <p>STATUS: {assignedData.status}</p>

        {/* Button to fetch and display more information */}
        {!isExpanded && (
          <button
            className="bg-blue-500 text-white mt-2 px-4 py-1 rounded"
            onClick={fetchMaintenanceItem}
            disabled={loading}
          >
            {loading ? "Loading..." : "MORE!"}
          </button>
        )}

        {/* Conditionally render additional information if available */}
        {isExpanded && additionalInfo && (
          <div className="mt-4">
            <p>TASK DESCRIPTION: {additionalInfo.taskDescription}</p>
            <p>CLERK NAME: {additionalInfo.createdClerkName}</p>
            <button className="bg-red-500 text-white mt-2 px-4 py-1 rounded" onClick={() => setIsExpanded(false)}>
              Hide
            </button>
          </div>
        )}

        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default AssignedMiniCard;
