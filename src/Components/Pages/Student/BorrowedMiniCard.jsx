import React from "react";

const BorrowedMiniCard = ({ borrowData }) => {
  const formattedStartDate =
    borrowData.startDate instanceof Date
      ? borrowData.startDate.toISOString().split("T")[0]
      : new Date(borrowData.startDate).toISOString().split("T")[0];
  const formattedEndDate =
    borrowData.endDate instanceof Date
      ? borrowData.endDate.toISOString().split("T")[0]
      : new Date(borrowData.endDate).toISOString().split("T")[0];

  return (
    <div className="w-[387px] h-[300px] bg-[#3C4D71] rounded-[20px] flex p-2 flex-row items-center justify-center hover:scale-105 transition duration-200">
      <div className="w-[170px]  flex flex-col items-center justify-center bg-[#3C4D71] shadow-lg shadow-[#2e3a56] rounded-[20px] p-2 ">
        <img src={borrowData.imageUrl} alt="mouse" className="mb-4" />
        <p className="text-white text-center text-[20px] font-semibold">{borrowData.itemName}</p>
      </div>

      <div className="flex flex-col justify-center text-white text-[16px] pl-6">
        <p>MODEL: {borrowData.itemModel}</p>
        <p>LAB: {borrowData.labName}</p>
        <p>START: {formattedStartDate}</p>
        <p>END: {formattedEndDate}</p>
        <p>STATUS: {borrowData.status}</p>
      </div>
    </div>
  );
};

export default BorrowedMiniCard;
