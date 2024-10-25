import React, { useState, useEffect } from "react";
import axios from "axios";
import UserLabCard from "../Student/UserLabCard";
import TechLabCard from "./TechLabCard";

export const TechnicianLabs = () => {
  const [labs, setLabs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchLabs = async () => {
    setError(null);
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}api/user/labs`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setLabs(response.data);
    } catch (error) {
      console.error("Error when fetching labs", error);
      setError("Failed to load labs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLabs();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#202652] flex flex-col p-7 items-center relative">
      <div className="text-white text-[25px] font-semibold tracking-[0.06rem] mb-5">AVAILABLE LABS</div>

      {loading && <p className="text-white">Loading labs...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between w-[1000px] gap-[20px]">
        {labs.map((lab, index) => (
          <TechLabCard key={index} imgsrc={lab.imageUrl} altname={lab.labName} name={lab.labName} labId={lab.labId} />
        ))}
      </div>
    </div>
  );
};

export default TechnicianLabs;
