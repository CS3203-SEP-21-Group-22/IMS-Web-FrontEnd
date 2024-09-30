import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import checklist from "../../styles/images/checklist.png";

import LabCard from "../LabCard";

export const ViewLabs = () => {
  const location = useLocation();
  const labs = location.state?.labs || [];
  console.log(labs);
  return (
    <div className="h-[600px] w-full bg-[#202652]  flex relative ">
      <div className="h-full w-full flex justify-center items-center ">
        <div className="h-full w-[1000px] grid grid-cols-2 gap-3">
          <>
            {/* <div className="flex justify-center items-center ">
              <Link to="/view-labs">
                <Card imgsrc={checklist} altname="admin profile" Children="LAB 01" />
              </Link>
            </div> */}
            {labs.map((lab, index) => {
              return (
                <div key={index} className="flex justify-center items-center ">
                  <Link to="/view-labs" className="flex justify-center items-center ">
                    <LabCard imgsrc={checklist} altname="staff profile" labData={lab} />
                  </Link>
                </div>
              );
            })}
          </>
        </div>
      </div>
    </div>
  );
};
