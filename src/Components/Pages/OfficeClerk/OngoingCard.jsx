import React, { useState, useEffect } from "react";

const OngoingCard = ({ ongoingData }) => {
  const formatDate = (date) => {
    return date instanceof Date ? date.toISOString().split("T")[0] : new Date(date).toISOString().split("T")[0];
  };

  const formattedStartDate = formatDate(ongoingData.startDate);
  const formattedEndDate = formatDate(ongoingData.endDate);
  const formattedReqDate = formatDate(ongoingData.createdAt);

  return (
    <div className="w-[487px] h-auto bg-[#3C4D71] rounded-[20px] flex flex-row p-4 items-center justify-center hover:scale-105 transition duration-200">
      <div className="w-[250px] h-[250px] flex flex-col items-center justify-center bg-[#3C4D71] shadow-lg shadow-[#2e3a56] rounded-[20px] p-2">
        <img src={ongoingData.imageUrl} alt="mouse" className="mb-4" />
        <p className="text-white text-center text-[20px] font-semibold">{ongoingData.itemName}</p>
      </div>

      <div className="flex flex-col justify-center text-white text-[16px] pl-6 gap-2">
        <p className="text-white text-center text-[16px] font-medium">MODEL: {ongoingData.itemModel}</p>
        <p className="text-white text-center text-[16px] font-medium">LAB: {ongoingData.labName}</p>
        <p>SERIAL NO: {ongoingData.itemSerialNumber}</p>
        <p>FROM: {formattedStartDate}</p>
        <p>TO: {formattedEndDate}</p>
        <p>STATUS: {ongoingData.status}</p>
      </div>
    </div>
  );
};

export default OngoingCard;
