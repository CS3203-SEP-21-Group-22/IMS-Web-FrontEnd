import React, { useState } from "react";
import mouse from "../../../../src/styles/images/mouse.png";

const EquipmentMiniCard = ({ equipmentData }) => {
  const [error, setError] = useState(null);
  const [boxExpanded, setBoxExpanded] = useState(false);

  console.log(equipmentData); // Corrected prop usage

  return (
    <div className="p-4">
      <div onClick={() => setBoxExpanded(!boxExpanded)}>
        {error && <p className="text-red-500">{error}</p>}
        {boxExpanded ? (
          <div className="w-[397px] h-[238px] bg-[#3C4D71] flex-row flex items-center cursor-pointer rounded-[20px]">
            <div className="w-[150px]">
              <img src={mouse} alt="mouse" />
            </div>
            <div className="flex flex-col justify-center text-[20px] text-left">
              <p>Start Date: {equipmentData.startDate}</p>
              <p>End Date: {equipmentData.endDate}</p>
            </div>
          </div>
        ) : (
          <div className="w-[397px] h-[138px] bg-[#3C4D71] flex-row flex items-center cursor-pointer rounded-[20px]">
            <div className="w-[150px]">
              <img src={mouse} alt="mouse" />
            </div>
            <div className="flex flex-col justify-center text-[20px] text-left">
              <p>Name: {equipmentData.name}</p>
              <p>Model: {equipmentData.model}</p>
              <p>Lab: {equipmentData.labName}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EquipmentMiniCard;
