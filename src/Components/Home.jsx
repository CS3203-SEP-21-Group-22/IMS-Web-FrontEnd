import React from "react";
import topImage from "../styles/images/page1.png";
import appmethod from "../styles/images/appmethods.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import HomePageCard from "./HomePageCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faChartSimple, faFileArrowDown, faQrcode, faSchoolLock } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  return (
    <div className="w-full h-[full] bg-[#202652] flex flex-col">
      <div className="grid grid-cols-2 w-full  h-svh gap-0 ">
        <div className="h-[600px] flex flex-col items-start justify-center gap-10 pl-[310px]">
          <p className="w-[498px] h-[64px]  text-left font-josefin-sans font-bold text-[40px] leading-[40px] text-white">
            THE PERFECT TOOL TO MANAGE YOUR LAB
          </p>
          <p className=" w-[498px] h-[74px]  text-left  font-normal text-[25px] leading-[43px] text-[#E3EDF8]">
            Lab tracker is an inventory management system for computer laboratories.
          </p>
          <Link
            to="/sign-in"
            className="flex flex-row justify-center  p-5 px-10 text-center  cursor-pointer bg-[#00ABE4] rounded-[10px] border-transparent font-josefin-sans font-bold text-[25px] leading-[28px] tracking-[0.06em] text-white"
          >
            GET STARTED
          </Link>
        </div>
        <div className="h-[700px] flex flex-col items-center justify-center  pr-[130px]">
          <img src={topImage} alt="top-image" className=" w-[600px] h-[500px]  animate-[scaleAnimation_3s_infinite]" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-ful relative gap-6 p-6 h-svh">
        <p className="text-[40px] font-bold tracking-[0.06em] text-white">KEY FEATURES & APPLICATIONS</p>
        <div className="flex flex-row justify-center items-center w-ful relative gap-6 p-6 h-svh">
          <HomePageCard
            image={<FontAwesomeIcon icon={faChartSimple} />}
            topic="QUICK ANALYTICS"
            description="Get real time status of your inventory system, and check older records."
          />
          <HomePageCard
            image={<FontAwesomeIcon icon={faSchoolLock} />}
            topic="SECURITY"
            description="With a tailor made authentication server and secure transactions with our efficient back-end."
          />
          <HomePageCard
            image={<FontAwesomeIcon icon={faEnvelope} />}
            topic="EMAIL NOTIFICATIONS"
            description="Never miss a reservation with our Email-based reliable notification system"
          />
          <HomePageCard
            image={<FontAwesomeIcon icon={faQrcode} />}
            topic="QR CODE SCANNING"
            description="Use our QR token system to ensure secure lending and returning of items."
          />
        </div>
      </div>
      <div className="flex w-full h-screen flex-col justify-center items-center relative">
        <p className="  font-bold text-[40px] leading-[40px] tracking-[0.06em] text-white">FLEXIBLE USABILITY</p>
        <div className="flex flex-row items-center justify-center p-10">
          <img src={appmethod} alt="page3pic" className="w-[790px] h-[509px] " />
          <div className="flex flex-col items-start">
            <p className=" font-normal text-[25px] leading-[40px]  text-white text-left">
              {" "}
              Access our application through both our Web application ,and our mobile app interfaces.Seamlessly navigate
              through the application in any device, at any time.
            </p>
            <FontAwesomeIcon icon={faFileArrowDown} className="text-[50px] py-2 text-[#00ABE4] cursor-pointer" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
