import React from "react";
import { useLocation } from "react-router-dom";

const TechnicianReq = () => {
  const location = useLocation();
  const { imgsrc, itmname, serial, lab, datereq, description, foundDate } = location.state || {};
  return (
    <div className="h-[600px] w-full bg-[#202652] flex relative justify-center">
      <div className="w-[600px] h-[398px] bg-[#B3C3E3] rounded-[60px] mx-6 flex flex-row justify-center items-center cursor-pointer absolute top-9">
        <div className="bg-[#6D7AA4]  w-[250px] h-full rounded-bl-[60px] rounded-tl-[60px]">
          <img src={imgsrc} alt="req-photo" />
          <p className="text-white text-center">{itmname}</p>
        </div>
        <div className="bg-[#3C4D71] w-[350px] h-full rounded-tr-[60px] rounded-br-[60px] flex flex-col justify-center items-center">
          <div className="bg-[#6D7AA4] w-[300px] h-[50px] flex justify-center items-center text-white">
            Serial No : {serial}
          </div>
          <div className="bg-[#6D7AA4] w-[300px] h-[50px] flex justify-center items-center mt-2 text-white">
            Date Requested : {datereq}
          </div>
          <div className="bg-[#6D7AA4] w-[300px] h-[50px] flex justify-center items-center mt-2 text-white">
            Issue found on : {foundDate}
          </div>
          <div className="bg-[#6D7AA4] w-[300px] h-[50px] flex justify-center items-center mt-2 text-white">
            Description : {description}
          </div>

          <div className="bg-[#6D7AA4] w-[300px] h-[50px] flex justify-center items-center mt-2 text-white">
            Lab : {lab}
          </div>
          <button className="mt-10 bg-[#03ADE5] w-[200px] h-[40px] rounded-[10px]">Submit Request</button>
        </div>
      </div>
    </div>
  );
};

export default TechnicianReq;
