import React from "react";
import { useLocation } from "react-router-dom";
import ReservationMiniCard from "../Student/ReservationMiniCard";

const StaffReservations = () => {
  const location = useLocation();
  const reservations = location.state?.reservations || []; // Ensure we have an array in case reservations is undefined
  console.log(reservations);

  return (
    <div className="h-svh w-full bg-[#202652] flex p-8 flex-col items-center">
      <div className="text-white text-[25px] font-semibold tracking-[0.06rem] mb-5">YOUR RESERVATIONS</div>
      {reservations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 h-[138px]">
          {reservations.map((reservation, index) => (
            <ReservationMiniCard key={index} reservationData={reservation} />
          ))}
        </div>
      ) : (
        <div className="text-white text-center">You haven't made any reservations.</div>
      )}
    </div>
  );
};

export default StaffReservations;
