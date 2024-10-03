import React, { useState, useEffect } from "react";
import axios from "axios";
import mouse from "../../../styles/images/router.png";

const CompletedMaintain = () => {
  const [completedMaintenance, setCompletedMaintenance] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedItem, setExpandedItem] = useState(null);
  const [additionalDetails, setAdditionalDetails] = useState(null);

  const fetchCompletedMaintain = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await axios.get(
        "http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/clerk/maintenance?completed=true",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      console.log("Fetched completed maintenance:", response.data);
      setCompletedMaintenance(response.data);
    } catch (error) {
      console.error("Error when fetching completed maintenance items", error);
      setError("Failed to load completed maintenance items.");
    } finally {
      setLoading(false);
    }
  };

  const fetchAdditionalDetails = async (maintenanceId) => {
    try {
      const response = await axios.get(
        `http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/user/maintenance/${maintenanceId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      setAdditionalDetails(response.data);
    } catch (error) {
      console.error("Error fetching additional details", error);
      setError("Failed to load additional details.");
    }
  };

  const handleBoxClick = (item) => {
    if (expandedItem && expandedItem.maintenanceId === item.maintenanceId) {
      setExpandedItem(null);
      setAdditionalDetails(null);
    } else {
      setExpandedItem(item);
      fetchAdditionalDetails(item.maintenanceId);
    }
  };

  useEffect(() => {
    fetchCompletedMaintain();
  }, []);

  return (
    <div className="h-svh w-full bg-[#202652] flex flex-col items-center justify-center p-10">
      {loading && (
        <div className="flex flex-col justify-center items-center">
          <span className="loading loading-spinner text-info w-12 h-12"></span>
          <p className="text-[30px] font-semibold text-white p-2">Loading</p>
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && completedMaintenance.length === 0 && (
        <p className="text-white text-[20px]">No completed maintenance items.</p>
      )}
      {!loading && completedMaintenance.length > 0 && (
        <div className="w-full flex flex-col items-center cursor-pointer">
          {completedMaintenance.map((item) => (
            <div
              key={item.maintenanceId}
              className={`w-[450px] bg-[#3C4D71] rounded-[40px] mb-4 transition-all duration-500 flex-col flex items-center justify-center p-4 ${
                expandedItem && expandedItem.maintenanceId === item.maintenanceId ? "h-auto" : "h-[170px] "
              }`}
              onClick={() => handleBoxClick(item)}
            >
              <div
                className={`flex flex-row items-center justify-center p-4 bg-[#3C4D71] w-[400px] h-[160px]  ${
                  expandedItem && expandedItem.maintenanceId === item.maintenanceId ? "shadow-lg  rounded-[40px]" : ""
                }`}
              >
                <div className="w-[180px]">
                  <img src={mouse} alt="Item" />
                </div>

                <div className="ml-4">
                  <p className="text-white font-semibold text-[20px]">{item.itemName}</p>
                  <p className="text-white">{item.itemModel}</p>
                  <p className="text-white">Serial Number: {item.itemSerialNumber}</p>

                  {/* Show LabName and Dates only when the item is not expanded */}
                  {!(expandedItem && expandedItem.maintenanceId === item.maintenanceId) && (
                    <div>
                      <p className="text-white">Lab: {item.labName}</p>
                      <div className="flex text-white">
                        <p>From: {new Date(item.startDate).toLocaleDateString()}</p>
                        <p className="ml-2">To: {new Date(item.endDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Additional details */}
              {expandedItem && expandedItem.maintenanceId === item.maintenanceId && additionalDetails && (
                <div className=" bg-[#3C4D71] rounded-b-[40px] text-white flex flex-col justify-center items-center mt-4">
                  {/* Move LabName and Dates to the expanded section */}
                  <p>Lab : {item.labName}</p>
                  <div className="flex text-white">
                    <p>From : {new Date(item.startDate).toLocaleDateString()}</p>
                    <p className="ml-2">To: {new Date(item.endDate).toLocaleDateString()}</p>
                  </div>

                  <p>Assigned By : {additionalDetails.createdClerkName}</p>
                  <p>Assigned At : {new Date(additionalDetails.createdAt).toLocaleDateString()}</p>
                  <p>Reviewed By : {additionalDetails.reviewedClerkName}</p>
                  <p>Reviewed At : {new Date(additionalDetails.reviewedAt).toLocaleDateString()}</p>
                  <p>Status : {additionalDetails.status}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompletedMaintain;
