import React from "react";
import { useLocation } from "react-router-dom";
import ClerkReserveCard from "./ClerkReserveCard";

const ClerkViewReserved = () => {
  const location = useLocation();
  const reservations = location.state?.reservations || []; // Handle undefined case safely
  console.log(reservations);

  return (
    <div className="h-svh w-full bg-[#202652] flex p-8 flex-col items-center">
      <div className="text-white text-[25px] font-semibold tracking-[0.06rem] mb-5">RESERVED ITEMS</div>

      {reservations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 h-[138px]">
          {reservations.map((reservation, index) => (
            <ClerkReserveCard key={index} reservationData={reservation} />
          ))}
        </div>
      ) : (
        <div className="text-white text-[20px]">No reservations available</div>
      )}
    </div>
  );
};

export default ClerkViewReserved;
