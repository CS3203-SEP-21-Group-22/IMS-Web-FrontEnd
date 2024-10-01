import React, { useState } from "react";

import { useLocation } from "react-router-dom";
import UserLabCard from "../../UserLabCard.jsx";

export const StudentSelect = () => {
  const location = useLocation();

  const labs = location.state.labs;
  console.log(labs);

  return (
    <div className="h-[800px] w-full  bg-[#202652]  flex justify-center items-center relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between w-[1000px] gap-[20px] ">
        {labs.map((lab, index) => (
          <UserLabCard key={index} imgsrc={lab.imageUrl} altname={lab.labName} name={lab.labName} />
        ))}
      </div>
    </div>
  );
};
