import React, { useState, useEffect } from "react";
import axios from "axios";
import router from "../../../styles/images/router.png";

export const Completed = () => {
  const [completedMaintenances, setCompletedMaintenances] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  const fetchCompleted = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/technician/maintenance?completed=true",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      );
      console.log("Fetched completed maintenances:", response.data);
      setCompletedMaintenances(response.data);
    } catch (error) {
      console.error("Error when fetching completed maintenances:", error);
      setError("Failed to load completed maintenances.");
    } finally {
      setLoading(false);
    }
  };

  const fetchExtraDetails = async (newmaintenanceId) => {
    try {
      const response = await axios.get(
        `http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/technician/maintenance/${newmaintenanceId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      );
      // Update the specific maintenance item with the extra details
      setCompletedMaintenances((prevMaintenances) =>
        prevMaintenances.map((item) =>
          item.maintenanceId === newmaintenanceId ? { ...item, extraDetails: response.data } : item,
        ),
      );

      console.log(completedMaintenances);
    } catch (error) {
      console.error("Error fetching extra details:", error);
    }
  };

  useEffect(() => {
    fetchCompleted();
  }, []);

  const toggleCard = (newId) => {
    if (expandedCard === newId) {
      setExpandedCard(null);
    } else {
      setExpandedCard(newId);
      const maintenance = completedMaintenances.find((item) => item.maintenanceId === newId);
      if (!maintenance.extraDetails) {
        fetchExtraDetails(newId);
      }
    }
  };

  return (
    <div className="h-svh w-full bg-[#202652] flex relative flex-col items-center justify-center p-10">
      {loading && (
        <div className="flex flex-col justify-center items-center">
          <span className="loading loading-spinner text-info w-12 h-12"></span>
          <p className="text-[30px] font-semibold text-white p-2">Loading</p>
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && completedMaintenances.length === 0 && (
        <p className="text-white">No completed maintenance requests found.</p>
      )}
      {!loading && completedMaintenances.length > 0 && (
        <div className="flex flex-col items-center w-full">
          {completedMaintenances.map((maintenance) => (
            <div
              key={maintenance.maintenanceId}
              onClick={() => toggleCard(maintenance.maintenanceId)}
              className={`w-[400px] bg-[#3C4D71] text-white p-4 mb-4 rounded-lg cursor-pointer transition-all ${
                expandedCard === maintenance.maintenanceId ? "h-auto" : "h-[150px]"
              }`}
            >
              <div className="flex flex-row items-center">
                <div className="w-[150px]">
                  <img src={router} alt="Equipment" />
                </div>
                <div className="flex-1 ml-4">
                  <p className="font-semibold text-[20px]">{maintenance.itemName}</p>
                  <p>Model: {maintenance.itemModel}</p>
                  <p>Lab: {maintenance.labName}</p>
                  <p>Due Date: {new Date(maintenance.endDate).toLocaleDateString()}</p>
                  <p>Status: {maintenance.status}</p>
                </div>
              </div>
              {/* Expand to show more information */}
              {expandedCard === maintenance.maintenanceId && maintenance.extraDetails && (
                <div className="mt-4">
                  <p>Serial No: {maintenance.extraDetails.itemSerialNumber}</p>
                  <p>Maintenance Description: {maintenance.extraDetails.description}</p>
                  <p>Reported Issues: {maintenance.extraDetails.reportedIssues}</p>
                  <p>Maintenance Notes: {maintenance.extraDetails.maintenanceNotes}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Completed;
