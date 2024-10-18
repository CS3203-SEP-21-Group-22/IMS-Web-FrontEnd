import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import walrus from "../../../styles/images/walrus.png";
export const AdminProfile = () => {
  return (
    <div className="h-[800px] w-full bg-gradient-to-b from-[#202652] to-[#E3EDF8] flex justify-center items-center relative ">
      <div className="h-[496px] w-[900px] flex relative flex-row bg-yellow-200 rounded-[60px]">
        <div className="bg-[#202652] flex w-[350px] h-[496px] rounded-bl-[60px] rounded-tl-[60px] flex-col justify-center items-center ">
          <img className="w-[[200px] h-[200px] " src={walrus} alt="walrus" />
          <p className="mt-2 text-white">WALRUS SMITH</p>
          <p className="mt-2 text-white font-light">Department of CSE</p>
          <FontAwesomeIcon icon={faPenToSquare} className="text-white mt-2 cursor-pointer" />
        </div>
        <div className="w-[550px] h-[496px] bg-[#F6F9FD] rounded-tr-[60px] rounded-br-[60px] flex-col flex justify-center items-center relative">
          <div className="h-[40px] w-[200px] rounded-[20px] flex flex-col justify-center items-center absolute top-[100px] left-8">
            <FontAwesomeIcon icon={faEnvelope} className="h-[30px] w-[30px] mr-2" />
            <p className="font-light mt-2">walrussmithsolutions@gmail.com</p>
          </div>
          <div className="h-[40px] w-[200px] rounded-[20px] flex flex-col justify-center items-center mt-2 absolute top-[100px] right-2">
            <p className="font-medium font-josefin-sans tracking-[0.06em]">INDEX </p>
            <p className="font-light mt-2">200123D</p>
          </div>
          <div className="h-[40px]  w-[200px] rounded-[20px] flex flex-col justify-center items-center mt-2 absolute top-[300px] left-8">
            <p className="font-medium font-josefin-sans tracking-[0.06em]">STATUS</p>
            <p className="font-light mt-2">Admin</p>
          </div>
          <div className="h-[40px] w-[200px] rounded-[20px] flex flex-col justify-center items-center mt-2 absolute top-[300px] right-2">
            <p className="font-medium font-josefin-sans tracking-[0.06em] ">DATE JOINED</p>
            <p className="font-light mt-2">2024/12/08</p>
          </div>
        </div>
      </div>
    </div>
  );
};
