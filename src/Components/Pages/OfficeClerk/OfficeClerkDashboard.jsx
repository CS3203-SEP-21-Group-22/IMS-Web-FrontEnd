import { useState } from "react";
import { useNavigate } from "react-router-dom";
import checklist from "../../../styles/images/checklist.png";
import cardreserve from "../../../styles/images/cardreserve.png";
import repair from "../../../styles/images/repairstat.png";
import Card from "../../Card";

import axios from "axios";

const OfficeClerkDashboard = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleBox1 = () => {
    navigate("/clerk-reserve");
  };

  const fetchLabs = async () => {
    setError(null);
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}api/user/labs`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      navigate("/clerk-labs", { state: { labs: response.data } });
      console.log("Fetched labs:", response.data);
    } catch (errror) {
      console.error("Error when fetching res", error);
      setError("Failed to load reservations");
    }
  };

  const fetchMaintenance = () => {
    navigate("/clerk-maintenance");
  };

  return (
    <div className="h-lvh w-full bg-[#202652]  flex flex-col relative items-center">
      <div className="text-white text-[25px] font-semibold tracking-[0.06rem] pt-4">CLERK DASHBOARD</div>
      <div className="h-full w-[1000px] grid grid-cols-3 gap-x-10 gap-y-0  justify-center p-10 items-center">
        <Card imgsrc={checklist} altname="checklist" Children="RESERVATIONS" onClick={toggleBox1} />

        <Card imgsrc={cardreserve} altname="cardreserve" Children="EQUIPMENTS" onClick={fetchLabs} />

        <Card imgsrc={repair} Children="MAINTENANCE" onClick={fetchMaintenance} />
      </div>
    </div>
  );
};

export default OfficeClerkDashboard;
