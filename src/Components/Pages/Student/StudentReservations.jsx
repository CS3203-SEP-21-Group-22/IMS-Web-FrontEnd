import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ReservationMiniCard from "./ReservationMiniCard";

const StudentReservations = () => {
  const location = useLocation();
  const [reservations, setReservations] = useState(location.state.reservations); // Manage reservations with state

  // Function to remove reservation after deletion
  const handleReservationDeleted = (deletedId) => {
    setReservations((prevReservations) =>
      prevReservations.filter((reservation) => reservation.reservationId !== deletedId),
    );
  };

  return (
    <div className="h-svh w-full bg-[#202652] flex p-8 flex-col items-center">
      <div className="text-white text-[25px] font-semibold tracking-[0.06rem] mb-5">YOUR RESERVATIONS</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 h-[138px]">
        {reservations.map((reservation, index) => (
          <ReservationMiniCard
            key={index}
            reservationData={reservation}
            onDelete={handleReservationDeleted} // Pass the deletion handler to the card
          />
        ))}
      </div>
    </div>
  );
};

export default StudentReservations;
