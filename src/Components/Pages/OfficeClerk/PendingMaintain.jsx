import React, { useState, useEffect } from "react";
import axios from "axios";

const PendingMaintain = () => {
  const [pendingMaintenance, setPendingMaintenance] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPendingMaintain = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await axios.get(
        "https://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/clerk/maintenance/pending",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      console.log("Fetched pending maintenance:", response.data);
      setPendingMaintenance(response.data);
    } catch (error) {
      console.error("Error when fetching maintenance items", error);
      setError("Failed to load maintenance items.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPendingMaintain();
  }, []);

  return (
    <div className="h-svh w-full bg-[#202652] flex flex-col items-center  p-10">
      <div className="text-white text-[25px] font-semibold tracking-[0.06rem] pt-4">PENDING MAINTENNANCES</div>
      {loading && (
        <div>
          <span className="loading loading-spinner text-info w-12 h-12"></span>
          <p className="text-[30px] font-semibold text-white p-2">Loading</p>
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && pendingMaintenance.length === 0 && (
        <p className="text-white text-[20px]">No pending maintenance items.</p>
      )}
      {!loading && pendingMaintenance.length > 0 && (
        <div className="w-full max-w-4xl pt-20">
          {pendingMaintenance.map((item) => (
            <div key={item.itemId} className="bg-[#3C4D71] p-4 mb-4 rounded-lg shadow-md">
              <p className="text-white">
                <strong>Item Name:</strong> {item.itemName}
              </p>
              <p className="text-white">
                <strong>Model:</strong> {item.itemModel}
              </p>
              <p className="text-white">
                <strong>Serial Number:</strong> {item.itemSerialNumber}
              </p>
              <p className="text-white">
                <strong>Lab Name:</strong> {item.labName}
              </p>
              <p className="text-white">
                <strong>Last Maintenance Start:</strong> {new Date(item.lastMaintenanceStartDate).toLocaleString()}
              </p>
              <p className="text-white">
                <strong>Last Maintenance End:</strong> {new Date(item.lastMaintenanceEndDate).toLocaleString()}
              </p>
              {item.imageUrl && <img src={item.imageUrl} alt={`${item.itemName}`} className="mt-2 rounded-lg" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PendingMaintain;
