import React, { useState, useEffect } from "react";
import axios from "axios";
import router from "../../../styles/images/router.png";

export const Completed = () => {
  const [completedMaintenances, setCompletedMaintenances] = useState([]); // Store completed maintenance data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [expandedCard, setExpandedCard] = useState(null); // Track which card is expanded

  // Fetch the initial list of completed maintenances
  const fetchCompleted = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API_URL}api/technician/maintenance?completed=true`,
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

  // Fetch additional details for a specific maintenance when a card is expanded
  const fetchExtraDetails = async (maintenanceId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API_URL}api/technician/maintenance/${maintenanceId}`,
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
          item.maintenanceId === maintenanceId ? { ...item, extraDetails: response.data } : item,
        ),
      );
    } catch (error) {
      console.error("Error fetching extra details:", error);
    }
  };

  // Handle card expansion/collapse and fetch extra details if not already fetched
  const toggleCard = (maintenanceId) => {
    if (expandedCard === maintenanceId) {
      setExpandedCard(null); // Collapse the card if it's already expanded
    } else {
      setExpandedCard(maintenanceId); // Expand the card
      const maintenance = completedMaintenances.find((item) => item.maintenanceId === maintenanceId);

      // Fetch extra details only if they haven't been fetched before
      if (!maintenance.extraDetails) {
        fetchExtraDetails(maintenanceId);
      }
    }
  };

  // Fetch completed maintenances when the component mounts
  useEffect(() => {
    fetchCompleted();
  }, []);

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
              {/* Expanded details */}
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
