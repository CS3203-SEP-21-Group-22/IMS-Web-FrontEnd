import React, { useState } from "react";
import axios from "axios";

const OngoingMiniCard = ({ assignedData }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [submitNote, setSubmitNote] = useState("");
  const [cost, setCost] = useState("");

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

  const handleSubmit = async () => {
    if (!submitNote || !cost) {
      setError("Both submit note and cost are required.");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      await axios.patch(
        `${process.env.REACT_APP_BACKEND_API_URL}api/technician/maintenance/${assignedData.maintenanceId}`,
        {
          submitNote,
          cost: parseFloat(cost),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      );
      alert("Maintenance item submitted for review successfully.");
    } catch (error) {
      console.error("Error when submitting for review", error);
      setError("Failed to submit for review.");
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

        {!isExpanded && (
          <button
            className="bg-blue-500 text-white mt-2 px-4 py-1 rounded"
            onClick={fetchMaintenanceItem}
            disabled={loading}
          >
            {loading ? "Loading..." : "MORE!"}
          </button>
        )}

        {isExpanded && additionalInfo && (
          <div className="mt-4">
            <p>TASK DESCRIPTION: {additionalInfo.taskDescription}</p>
            <p>CLERK NAME: {additionalInfo.createdClerkName}</p>

            <div className="mt-4">
              <label className="block mb-2">Submit Note:</label>
              <input
                type="text"
                value={submitNote}
                onChange={(e) => setSubmitNote(e.target.value)}
                className="w-full mb-2 px-2 py-1 h-[100px]  rounded bg-[#3C4D71] shadow-[#273148] shadow-lg border-none"
              />

              <label className="block mb-2">Cost:</label>
              <input
                type="number"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                className="w-full mb-2 px-2 py-1 border rounded bg-[#3C4D71] shadow-[#273148] shadow-lg border-none"
              />

              {/* Submit button */}
              <button
                className="bg-green-500 text-white mt-2 px-4 py-1 rounded"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit for Review"}
              </button>
            </div>

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

export default OngoingMiniCard;
