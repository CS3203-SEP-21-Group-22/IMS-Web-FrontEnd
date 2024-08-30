import React from "react";
import topImage from "../styles/images/page1.png";
import leftIcon from "../styles/images/leftticon.png";
import rightIcon from "../styles/images/righticon.png";
import middleIcon from "../styles/images/middleicon.png";
import page3 from "../styles/images/page3.png";
import signinpic from "../styles/images/siginpicnew.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="w-full h-[full] bg-gradient-to-b from-[#202652] to-[#E3EDF8] flex flex-col">
      <div className="grid grid-cols-2 w-full  h-[600px]">
        <div className="h-[500px] ">
          <p className="absolute w-[498px] h-[64px] left-[84px] top-[177px] text-left font-josefin-sans font-bold text-[40px] leading-[40px] text-black">
            THE PERFECT TOOL TO MANAGE YOUR LAB
          </p>
          <p className="absolute w-[561px] h-[74px] left-[84px] top-[294px] text-left font-istok-web font-normal text-[30px] leading-[43px] text-[#E3EDF8]">
            Lab tracker is an inventory management system for computer laboratories.
          </p>
          <Link
            to="/sign-in"
            className="flex flex-row justify-center items-center p-[20px] gap-[10px] text-center absolute w-[249px] h-[68px] left-[74px] top-[430px] cursor-pointer bg-[#00ABE4] rounded-[10px] border-transparent font-josefin-sans font-bold text-[25px] leading-[28px] tracking-[0.06em] text-white"
          >
            GET STARTED
          </Link>
        </div>
        <div className="h-[700px]">
          <img
            src={topImage}
            alt="top-image"
            className="absolute w-[600px] h-[500px] left-[621px] top-[80px] animate-[scaleAnimation_3s_infinite]"
          />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-ful relative">
        <div className="h-[629px] flex flex-col justify-center items-center">
          <img src={leftIcon} alt="lefticon" className="w-[257px] h-[224px]" />
          <p className="w-[194px] h-[28px] font-[josefin-sans] font-bold text-[28px] leading-[28px] tracking-[0.06em] text-white mt-[20px] text-center">
            MOBILE APP
          </p>
          <p className="font-[istok-web] text-[28px] mt-7 text-center w-[400px]">
            Use LabTracker anywhere,anytime with the use of our mobile app.
          </p>
        </div>
        <div className="h-[629px] flex flex-col justify-center items-center">
          <img src={middleIcon} alt="middleicon" className="w-[355px] h-[247px] absolute top-[100px]" />
          <p className="w-[194px] h-[28px] font-[josefin-sans] font-bold text-[28px] leading-[28px] tracking-[0.06em] text-white mt-[200px] text-center">
            SMART,SAFE & SECURE
          </p>
          <p className="font-[istok-web] text-[28px] mt-10 text-center w-[400px]">
            Improved security features to ensure all your records are safe.
          </p>
        </div>
        <div className="h-[629px] flex flex-col justify-center items-center">
          <img src={rightIcon} alt="rightticon" className="w-[350px] h-[300px] absolute top-[100px]" />
          <p className="w-[194px] h-[28px] font-[josefin-sans] font-bold text-[28px] leading-[28px] tracking-[0.06em] text-white mt-[230px] text-center">
            NEVER MISS
          </p>
          <p className="font-[istok-web] text-[28px] mt-7 text-center w-[400px]">
            Never miss a slot with our reliable notification system.
          </p>
        </div>
      </div>
      <div className="flex w-full h-[929px] flex-col justify-center items-center relative">
        <p className="w-[539px] h-[40px] font-josefin-sans font-bold text-[40px] leading-[40px] tracking-[0.06em] text-white absolute top-[30px]">
          FLEXIBLE AND DIVERSE
        </p>
        <p className="w-[987px] h-[80px] font-istok-web font-normal text-[28px] leading-[40px] tracking-[0.06em] text-[#E3EDF8] absolute top-[90px] text-center">
          {" "}
          From Lab administrators to students , role based profiling makes sure the user gets a simple, easy to use
          experience.
        </p>
        <img src={page3} alt="page3pic" className="w-[790px] h-[509px] absolute top-[100px]" />
        <img src={signinpic} alt="signinpic" className="w-[320px] h-[400px] absolute left-[150px] top-[300px]" />
      </div>
    </div>
  );
};
