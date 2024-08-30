import React, { useState } from "react";
import { Link } from "react-router-dom";
import checklist from "../../styles/images/checklist.png";
import cardreserve from "../../styles/images/cardreserve.png";
import Card from "../../Components/Card";
import { AdminProfile } from "./Admin/AdminProfile";
import { StaffProfile } from "./AcaStaff/StaffProfile";
import { OfficeClerkProfile } from "./OfficeClerk/OfficeClerkProfile";



export const UserProfiles = () => {

  return (
    <div className="h-[600px] w-full bg-gradient-to-b from-[#202652] to-[#E3EDF8] flex relative ">
      <div className="h-full w-full flex justify-center items-center ">
      <div className="h-full w-[1000px] grid grid-cols-3 gap-3">
          <>
        
            <div className="flex justify-center items-center ">
              <Link to="/admin-profile">
              <Card imgsrc={checklist} altname="admin profile" Children="VIEW ADMIN PROFLILE" />
              </Link>
            </div>
            <div className="flex justify-center items-center ">
            <Link to="/staff-profile" className="flex justify-center items-center ">
              <Card imgsrc={checklist} altname="staff profile" Children="VIEW STAFF PROFLILE" />
            </Link>
            </div>
            <div className="flex justify-center items-center ">
              <Link to="/officeclerk-profile">
              <Card imgsrc={checklist} altname="clerk profile" Children="VIEW CLERK PROFLILE" />
              </Link>
            </div>
            
          </>
      </div>
      </div>
    </div>
  );
};

