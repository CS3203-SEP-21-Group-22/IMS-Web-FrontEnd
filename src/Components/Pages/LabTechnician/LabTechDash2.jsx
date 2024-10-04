import repairstatImg from "../../../styles/images/repairstat.png";
import repaireqImg from "../../../styles/images/repaireq.png";
import Card from "../../Card.jsx";
import React, { useState } from "react";
import laptopImg from "../../../styles/images/laptop.png";
import TableTop from "../../TableTop.jsx";
import TableTppLab from "../../TableTppLab.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LabTechDash2 = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedItems, setSelectedItems] = useState(null);

  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const fetchMaintainenceReq = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/technician/maintenance?completed=false",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      );

      console.log("Fetched labs:", response.data);
      navigate("/tech", { state: { assigned: response.data } });
    } catch (errror) {
      console.error("Error when fetching res", error);
      setError("Failed to load reservations");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-svh w-full  bg-[#202652]  flex justify-center items-center relative">
      {selectedCard ? (
        <TableTppLab
          onClick={() => {
            setSelectedCard(null);
          }}
          items={selectedItems}
        />
      ) : (
        <div className="flex flex-row gap-10 items-center justify-center ">
          <Card imgsrc={repairstatImg} altname="status" Children="MAINTENANCES" onClick={fetchMaintainenceReq} />
          <Card imgsrc={repaireqImg} altname="request" Children="EQUIPMENTS" onClick={fetchMaintainenceReq} />
        </div>
      )}
    </div>
  );
};

export default LabTechDash2;
