import React from "react";
import { useLocation } from "react-router-dom";

import LabTechMiniCard from "./LabTechMiniCard";

const LabTechEquipment = () => {
  const location = useLocation();
  const equipments = location.state.equipment;
  console.log(equipments);

  return (
    <div className="min-h-screen w-full bg-[#202652] flex flex-col  items-center p-10">
      <div className="text-white text-[25px] font-semibold tracking-[0.06rem]">AVAILABLE EQUIPMENT</div>
      <div className="  bg-[#202652] flex flex-wrap justify-center gap-2 gap-y-0 p-10">
        {equipments.map((equipment, index) => (
          <LabTechMiniCard key={index} equipmentData={equipment} />
        ))}
      </div>
    </div>
  );
};

export default LabTechEquipment;
