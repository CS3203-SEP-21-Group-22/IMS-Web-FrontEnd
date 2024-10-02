import React from "react";
import topImage from "../styles/images/page1.png";
import leftIcon from "../styles/images/leftticon.png";
import rightIcon from "../styles/images/righticon.png";
import middleIcon from "../styles/images/middleicon.png";
import page3 from "../styles/images/page3.png";
import signinpic from "../styles/images/siginpicnew.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export const Home = () => {
  return (
    <div className="w-full h-[full] bg-[#202652] flex flex-col">
      <div className="grid grid-cols-2 w-full  h-[600px]">
        <div className="h-[500px] ">
          <p className="absolute w-[498px] h-[64px] left-[84px] top-[177px] text-left font-josefin-sans font-bold text-[40px] leading-[40px] text-white">
            THE PERFECT TOOL TO MANAGE YOUR LAB
          </p>
          <p className="absolute w-[561px] h-[74px] left-[84px] top-[294px] text-left  font-normal text-[25px] leading-[43px] text-[#E3EDF8]">
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
      <div className="flex flex-row justify-center items-center w-ful relative gap-6 p-6">
        <div className="h-[450px] w-[500px] flex flex-col justify-center items-center bg-[#3C4D71] shadow-lg rounded-[20px] hover:scale-[1.05] transition duration-[200]">
          <img src={leftIcon} alt="lefticon" className="w-[280px] h-[250px]" />
          <div className="flex flex-col items-center justify-center mt-4 p-2">
            <p className=" font-[josefin-sans] font-bold text-[28px] leading-[28px] tracking-[0.06em] text-white  text-center">
              MOBILE APP
            </p>
            <p className=" text-[22px]  text-center text-white mt-2 tracking-[0.06em]">
              Use LabTracker anywhere, anytime with the use of our mobile app.
            </p>
          </div>
        </div>
        <div className="h-[450px]  w-[500px] flex flex-col justify-center items-center bg-[#3C4D71] shadow-lg rounded-[20px] hover:scale-[1.05] transition duration-[200]">
          <img src={middleIcon} alt="middleicon" className="" />
          <div className="flex flex-col items-center justify-center mt-[-30px] p-2">
            <p className="font-[josefin-sans] font-bold text-[28px] leading-[28px] tracking-[0.06em] text-white text-center">
              SMART,SAFE & SECURE
            </p>
            <p className=" text-[22px]  text-center text-white mt-2 tracking-[0.06em]">
              Improved security features to ensure all your records are safe.
            </p>
          </div>
        </div>
        <div className="h-[450px]  w-[500px] flex flex-col justify-center items-center bg-[#3C4D71] shadow-lg gap-2 rounded-[20px] hover:scale-[1.05] transition duration-[200]">
          <img src={rightIcon} alt="rightticon" className=" mr-10" />
          <div className="flex flex-col items-center justify-center mt-[-30px] p-2">
            <p className="font-[josefin-sans] font-bold text-[28px] leading-[28px] tracking-[0.06em] text-white text-center">
              NEVER MISS
            </p>
            <p className=" text-[22px] text-center text-white mt-2 tracking-[0.06em] ">
              Never miss a slot with our reliable notification system.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full h-[929px] flex-col justify-center items-center relative">
        <p className="w-[539px] h-[40px] font-josefin-sans font-bold text-[40px] leading-[40px] tracking-[0.06em] text-white absolute top-[30px]">
          FLEXIBLE AND DIVERSE
        </p>
        <p className="w-[987px] h-[80px]  font-normal text-[28px] leading-[40px] tracking-[0.06em] text-[#E3EDF8] absolute top-[90px] text-center">
          {" "}
          From Lab administrators to students , role based profiling makes sure the user gets a simple, easy to use
          experience.
        </p>
        <img src={page3} alt="page3pic" className="w-[790px] h-[509px] absolute top-[100px]" />
        <img src={signinpic} alt="signinpic" className="w-[320px] h-[400px] absolute left-[150px] top-[300px] " />
      </div>
      <Footer />
    </div>
  );
};
