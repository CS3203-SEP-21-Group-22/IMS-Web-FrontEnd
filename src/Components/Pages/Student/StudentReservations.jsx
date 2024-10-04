import React from "react";
import { useLocation } from "react-router-dom";
import ReservationMiniCard from "./ReservationMiniCard";

const StudentReservations = () => {
  const location = useLocation();
  const equipments = location.state.equipment;
  console.log(equipments);

  return (
    <div className="h-svh w-full bg-[#202652] flex flex-wrap justify-center gap-2 gap-y-0 p-10">
      {equipments.map((equipment, index) => (
        <ReservationMiniCard key={index} equipmentData={equipment} />
      ))}
    </div>
  );
};

export default StudentReservations;
