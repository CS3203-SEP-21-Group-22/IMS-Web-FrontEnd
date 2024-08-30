import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export const ContactUs = () => {
  return (
    <div className="h-[800px] w-full bg-gradient-to-b from-[#202652] to-[#E3EDF8] flex justify-center items-center relative ">
      <div className="h-[396px] w-[900px] flex flex-col justify-center items-center gap-5 bg-[#E3EDF8] rounded-[60px] absolute top-20 ">
        <div className="text-right">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          LabTrackerIMS@gmail.com
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faInstagram} className="mr-2" />
          <span>@LabTracker</span>
        </div>
        <div>Contact the Developers</div>
      </div>
    </div>
  );
};
