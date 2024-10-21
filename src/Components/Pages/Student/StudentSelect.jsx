import React from "react";

import { useLocation } from "react-router-dom";
import UserLabCard from "./UserLabCard";

export const StudentSelect = () => {
  const location = useLocation();

  const labs = location.state.labs;
  console.log(labs);

  return (
    <div className="min-h-screen w-full  bg-[#202652]  flex flex-col p-7 items-center relative">
      <div className="text-white text-[25px] font-semibold tracking-[0.06rem] mb-5">AVAILABLE LABS</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between w-[1000px] gap-[20px] ">
        {labs.map((lab, index) => (
          <UserLabCard key={index} imgsrc={lab.imageUrl} altname={lab.labName} name={lab.labName} labId={lab.labId} />
        ))}
      </div>
    </div>
  );
};
