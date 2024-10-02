import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import checklist from "../../../styles/images/checklist.png";
import cardreserve from "../../../styles/images/cardreserve.png";
import repair from "../../../styles/images/repairstat.png";
import Card from "../../Card";

import axios from "axios";

const OfficeClerkDashboard = () => {
  const [expandedBox1, setExpandedBox1] = useState(false);
  const [expandedBox2, setExpandedBox2] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleBox1 = () => {
    setExpandedBox1(!expandedBox1);
    if (expandedBox2) setExpandedBox2(false); // Ensure only one box is expanded at a time
  };

  const columns = ["ITEM NAME", "SERIAL NO", "LAB", "DATE REQUESTED"];

  const fetchEquipment = async () => {
    setError(null);
    try {
      const response = await axios.get("http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/user/labs", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      // navigate("/view-labs", { state: { labs: response.data } });
      console.log("Fetched labs:", response.data);
    } catch (errror) {
      console.error("Error when fetching res", error);
      setError("Failed to load reservations");
    }
  };

  const fetchLabs = async () => {
    setError(null);
    try {
      const response = await axios.get("http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/user/labs", {
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
    <div className="h-lvh w-full bg-[#202652]  flex relative justify-center">
      <div className="h-full w-[1000px] grid grid-cols-3 gap-x-10 gap-y-0  justify-center p-10 items-center">
        <Card imgsrc={checklist} altname="checklist" Children="RESERVATIONS" onClick={toggleBox1} />

        <Card imgsrc={cardreserve} altname="cardreserve" Children="EQUIPMENTS" onClick={fetchLabs} />

        <Card imgsrc={repair} Children="MAINTENANCE" onClick={fetchMaintenance} />
      </div>
    </div>
  );
};

export default OfficeClerkDashboard;
