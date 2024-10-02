import React, { useState, useEffect } from "react";
import axios from "axios";
import mouse from "../../../styles/images/router.png";

const CompletedMaintain = () => {
  const [completedMaintenance, setCompletedMaintenance] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
        <div className="w-[450px] flex flex-row items-center justify-center bg-[#3C4D71] rounded-[40px]">
          <div>
            <img src={mouse} />
          </div>
          <div>
            {completedMaintenance.map((item) => (
              <div key={item.maintenanceId} className="p-4 mb-4">
                <p className="text-white font-semibold text-[20px]">{item.itemName}</p>
                <p className="text-white">{item.itemModel}</p>
                <p className="text-white">Serial Number:{item.itemSerialNumber}</p>
                <p className="text-white">Lab : {item.labName}</p>
                <div className="flex text-white">
                  <p>From: {new Date(item.startDate).toLocaleDateString()}</p>
                  <p className="ml-2">To:{new Date(item.endDate).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompletedMaintain;
