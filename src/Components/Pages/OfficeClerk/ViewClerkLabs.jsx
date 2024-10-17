import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import labimage from "../../../styles/images/page3.png";
import ClerkLabCard from "./ClerkLabCard";

export const ViewClerkLabs = () => {
  const location = useLocation();
  const [labs, setLabs] = useState(Array.isArray(location.state?.labs) ? location.state.labs : []);

  return (
    <div className="h-svh w-full bg-[#202652]  flex relative flex-col items-center justify-center p-10">
      <div className="h-svh w-[1000px]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {labs.map((lab, index) => {
          return (
            <div key={index} className="flex justify-center items-center ">
              <div className="flex justify-center items-center ">
                <ClerkLabCard
                  imgsrc={labimage}
                  altname="staff profile"
                  labData={lab}
                  onLabDelete={(labId) => setLabs((prevLabs) => prevLabs.filter((delLab) => delLab.labId !== labId))}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
