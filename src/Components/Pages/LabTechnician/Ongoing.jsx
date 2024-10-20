import React, { useEffect, useState } from "react";
import axios from "axios";
import AssignedMiniCard from "./AssignedMiniCard";

const Ongoing = () => {
  const [assigned, setAssigned] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMaintainenceReq = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/technician/maintenance?completed=false",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      );

      setAssigned(response.data);
    } catch (error) {
      console.error("Error when fetching maintenance data:", error);
      setError("Failed to load assigned items.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMaintainenceReq();
  }, []);

  return (
    <div className="h-svh w-full bg-[#202652] p-10 flex justify-center">
      {loading ? (
        <p className="text-white text-[24px] font-semibold">Loading assigned items...</p>
      ) : error ? (
        <p className="text-white text-[24px] font-semibold">{error}</p>
      ) : assigned.length === 0 ? (
        <p className="text-white text-[24px] font-semibold">No items have been assigned.</p>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="text-white text-[25px] font-semibold tracking-[0.06rem]">ASSIGNED EQUIPMENT</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {assigned.map((assign, index) => (
              <AssignedMiniCard key={index} assignedData={assign} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Ongoing;
