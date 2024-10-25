import repairstatImg from "../../../styles/images/repairstat.png";
import repaireqImg from "../../../styles/images/repaireq.png";
import Card from "../../Card.jsx";
import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const LabTechDash2 = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedItems] = useState(null);

  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const redirectToEquipments = () => {
    navigate("/labs-tech");
  };
  const redirectToMaintenances = () => {
    navigate("/tech");
  };

  return (
    <div className="h-svh w-full  bg-[#202652]  flex flex-col  items-center relative">
      <div className="text-white text-[25px] font-semibold tracking-[0.06rem] pt-4 ">LAB TECHNICIAN DASHBOARD</div>
      <div className="flex flex-row gap-10 items-center justify-center mt-[180px] ">
        <Card imgsrc={repairstatImg} altname="status" Children="MAINTENANCES" onClick={redirectToMaintenances} />
        <Card imgsrc={repaireqImg} altname="request" Children="EQUIPMENTS" onClick={redirectToEquipments} />
      </div>
    </div>
  );
};

export default LabTechDash2;
