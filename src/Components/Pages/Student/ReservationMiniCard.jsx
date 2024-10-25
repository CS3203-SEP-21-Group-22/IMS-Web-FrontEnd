import React from "react";
import mouse from "../../../../src/styles/images/mouse.png";

const ReservationMiniCard = ({ reservationData }) => {
  const formattedStartDate =
    reservationData.startDate instanceof Date
      ? reservationData.startDate.toISOString().split("T")[0]
      : new Date(reservationData.startDate).toISOString().split("T")[0];
  const formattedEndDate =
    reservationData.endDate instanceof Date
      ? reservationData.endDate.toISOString().split("T")[0]
      : new Date(reservationData.endDate).toISOString().split("T")[0];

  return (
    <div className="w-[387px] bg-[#3C4D71] rounded-[20px] flex p-2 flex-row items-center justify-center hover:scale-105 transition duration-200">
      {/* Left side: Image and Name */}
      <div className="w-[170px]  flex flex-col items-center justify-center bg-[#3C4D71] shadow-lg shadow-[#2e3a56] rounded-[20px] p-2 ">
        <img src={reservationData.imageUrl} alt="mouse" className="mb-4" />
        <p className="text-white text-center text-[20px] font-semibold">{reservationData.itemName}</p>
      </div>
      {/* Right side: Other information */}
      <div className="flex flex-col justify-center text-white text-[16px] pl-6">
        <p>MODEL: {reservationData.itemModel}</p>
        <p>LAB: {reservationData.labName}</p>
        <p>START: {formattedStartDate}</p>
        <p>END: {formattedEndDate}</p>
        <p>STATUS: {reservationData.status}</p>
      </div>
    </div>
  );
};

export default ReservationMiniCard;
