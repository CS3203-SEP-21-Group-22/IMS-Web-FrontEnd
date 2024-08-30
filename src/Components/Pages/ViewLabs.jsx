import React, { useState } from "react";
import { Link } from "react-router-dom";
import checklist from "../../styles/images/checklist.png";
import cardreserve from "../../styles/images/cardreserve.png";
import Card from "../../Components/Card";




export const ViewLabs = () => {

  return (
    <div className="h-[600px] w-full bg-gradient-to-b from-[#202652] to-[#E3EDF8] flex relative ">
      <div className="h-full w-full flex justify-center items-center ">
      <div className="h-full w-[1000px] grid grid-cols-2 gap-3">
          <>
        
            <div className="flex justify-center items-center ">
              <Link to="/view-labs">
              <Card imgsrc={checklist} altname="admin profile" Children="LAB 01" />
              </Link>
            </div>
            <div className="flex justify-center items-center ">
            <Link to="/view-labs" className="flex justify-center items-center ">
              <Card imgsrc={checklist} altname="staff profile" Children="LAB 02" />
            </Link>
            </div>
            
          </>
      </div>
      </div>
    </div>
  );
};

