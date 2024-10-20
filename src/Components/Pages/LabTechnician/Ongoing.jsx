import React, { useEffect, useState } from "react";
import axios from "axios";
import AssignedMiniCard from "./AssignedMiniCard";
import OngoingMiniCard from "./OngoinMiniCard";

const Ongoing = () => {
  const [assigned, setAssigned] = useState([]); // Store assigned items
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch the ongoing maintenance requests
  const fetchMaintenanceReq = async () => {
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

      // Filter to get only the ongoing maintenance requests
      const ongoingAssignments = response.data.filter((item) => item.status === "Ongoing");

      setAssigned(ongoingAssignments); // Set the ongoing assignments to state
    } catch (error) {
      console.error("Error when fetching maintenance data:", error);
      setError("Failed to load assigned items.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch the maintenance requests when the component mounts
  useEffect(() => {
    fetchMaintenanceReq();
  }, []);

  return (
    <div className="h-svh w-full bg-[#202652] p-10 flex justify-center">
      {loading ? (
        <p className="text-white text-[24px] font-semibold">Loading ongoing maintenances...</p>
      ) : error ? (
        <p className="text-white text-[24px] font-semibold">{error}</p>
      ) : assigned.length === 0 ? (
        <p className="text-white text-[24px] font-semibold">No ongoing items have been assigned.</p>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="text-white text-[25px] font-semibold tracking-[0.06rem]">ONGOING MAINTENANCE</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {assigned.map((assign, index) => (
              <OngoingMiniCard key={index} assignedData={assign} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Ongoing;
