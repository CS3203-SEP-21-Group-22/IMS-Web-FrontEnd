import {
  faDocker,
  faFacebookF,
  faInstagram,
  faMicrosoft,
  faReact,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faHouse, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[200px] bg-[#171c3d] flex items-center justify-center flex-col text-white ">
      <div className="flex flex-row items-center justify-center gap-[300px]">
        <div className="flex flex-col items-start justify-center">
          <p className="font-medium p-2">CONTACT US</p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="text-[20px]" />
            labtracker@companies.net
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="text-[20px]" />
            {""}
            123122111
          </p>
          <p>
            <FontAwesomeIcon icon={faHouse} className="text-[20px]" />
            121/8,Havelock St, Wellawatte
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-medium p-2">TECHNLOGIES</p>
          <div className="flex flex-row items-center justify-center">
            <FontAwesomeIcon icon={faReact} className="text-[40px] p-2" />
            <FontAwesomeIcon icon={faMicrosoft} className="text-[40px] p-2" />
            <FontAwesomeIcon icon={faDocker} className="text-[40px] p-2" />
          </div>
        </div>
        <div>
          <p>VISIT US ON SOCIAL MEDIA!</p>
          <div className="flex flex-row items-center justify-center">
            <FontAwesomeIcon icon={faFacebookF} className="text-[40px] p-2" />
            <FontAwesomeIcon icon={faInstagram} className="text-[40px] p-2" />
            <FontAwesomeIcon icon={faTwitter} className="text-[40px] p-2" />
          </div>
        </div>
      </div>

      <p className="mt-10">Copyright &copy; 2024</p>
    </div>
  );
};

export default Footer;
