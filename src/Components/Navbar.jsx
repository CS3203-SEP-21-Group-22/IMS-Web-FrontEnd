import React from "react";
import "../styles/css/palette.scss";
import "../styles/css/palette.css";
import logo from "../styles/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import walrus from "../styles/images/walrus.png";
import { useState } from "react";
import { AUTH_CLIENT_ID, AUTH_SERVER_URL } from "../config";

export const Navbar = () => {
  const location = useLocation();

  const redirectUri = "http://localhost:3000/profile";
  const loginUrl = `${AUTH_SERVER_URL}/login?redirectUri=${encodeURIComponent(redirectUri)}&clientId=${AUTH_CLIENT_ID}`;

  const [box, setBox] = useState(false);
  const toggleBox = () => {
    setBox(!box);
  };
  return (
    <div className="w-full h-[60px] bg-[#202652] ">
      <div className="grid grid-cols-[1fr_500px_1fr] shadow-lg">
        <div className="bg-transparent h-[55px] text-white relative left-[10px] flex items-center z-[1]">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="absolute top-[-7px] left-[-15px] w-[100px] h-[100px] z-[10] bg-none"
            />
          </Link>
        </div>
        <div className="bg-transparent z-[1] flex-row flex items-center justify-center font-[Josefin_Sans] gap-10">
          {location.pathname.startsWith("/clerk-maintenance") && (
            <>
              <Link
                to="/clerk-maintenance"
                className={`flex flex-col justify-center items-center tracking-[0.06em] cursor-pointer ${
                  location.pathname === "/clerk-maintenance" ? "text-[#color]" : "text-[#default-color]"
                }`}
              >
                PENDING
              </Link>

              <Link
                to="/clerk-maintenance/ongoing"
                className={`flex flex-col justify-center items-center tracking-[0.06em] cursor-pointer ${
                  location.pathname === "/clerk-maintenance/ongoing" ? "text-[#color]" : "text-[#default-color]"
                }`}
              >
                ONGOING
              </Link>

              <Link
                to="/clerk-maintenance/completed"
                className={`flex flex-col justify-center items-center tracking-[0.06em] cursor-pointer ${
                  location.pathname === "/clerk-maintenance/completed" ? "text-[#color]" : "text-[#default-color]"
                }`}
              >
                COMPLETED
              </Link>
            </>
          )}
        </div>
        <div className="bg-transparent flex justify-evenly items-center z-[1]">
          <button className="w-[141px] h-[20px] bg-transparent border-transparent cursor-pointer font-[Josefin_Sans]  text-[10px] leading-[20px] tracking-[0.06em] text-[#FFFFFF]">
            CONTACT US
          </button>
          {location.pathname == "/" && (
            <Link
              to="/sign-in"
              className="flex flex-row justify-center items-center gap-[10px] text-none w-[80px] h-[35px] bg-[#E9F1FA] rounded-[10px] border-transparent cursor-pointer font-[Josefin_Sans]  text-[10px] leading-[20px] tracking-[0.06em]"
            >
              LOGIN
            </Link>
          )}
          {location.pathname == "/student" && (
            <div className="flex flex-col justify-center items-center">
              <button onClick={toggleBox}>
                <img src={walrus} className="h-[40px] w-[40px] cursor-pointer" />
              </button>

              {box && (
                <div className="top-14 absolute w-[100px] h-[60px] bg-[#202652] flex flex-col justify-center">
                  <Link to="/user" className="text-white text-sm hover:bg-[#3C4D71] h-[30px]">
                    VIEW PROFILE
                  </Link>
                  <p className="text-white text-sm cursor-pointer hover:bg-[#3C4D71] h-[30px]">LOG OUT</p>
                </div>
              )}
            </div>
          )}
          {location.pathname == "/Officeclerk" && (
            <div className="flex flex-col justify-center items-center">
              <button onClick={toggleBox}>
                <img src={walrus} className="h-[40px] w-[40px] cursor-pointer" />
              </button>

              {box && (
                <div className="top-14 absolute w-[100px] h-[60px] bg-[#202652] flex flex-col justify-center">
                  <Link to="/officeclerk-profile" className="text-white text-sm hover:bg-[#3C4D71] h-[30px]">
                    VIEW PROFILE
                  </Link>
                  <p className="text-white text-sm cursor-pointer hover:bg-[#3C4D71] h-[30px]">LOG OUT</p>
                </div>
              )}
            </div>
          )}
          {location.pathname == "/student-select" && (
            <div className="flex flex-row justify-center items-center">
              <Link
                to="/student"
                className="mr-14 tracking-[0.06em] text-[#FFFFFF] cursor-pointer font-[Josefin_Sans]  text-[10px]"
              >
                DASHBOARD
              </Link>
              <div className="flex flex-col justify-center items-center">
                <button onClick={toggleBox}>
                  <img src={walrus} className="h-[40px] w-[40px] cursor-pointer" />
                </button>

                {box && (
                  <div className="top-14 absolute w-[100px] h-[60px] bg-[#202652] flex flex-col justify-center">
                    <Link to="/user" className="text-white text-sm hover:bg-[#3C4D71] h-[30px]">
                      VIEW PROFILE
                    </Link>
                    <p className="text-white text-sm cursor-pointer hover:bg-[#3C4D71] h-[30px]">LOG OUT</p>
                  </div>
                )}
              </div>
            </div>
          )}
          {location.pathname == "/staff" && (
            <div className="flex flex-col justify-center items-center">
              <button onClick={toggleBox}>
                <img src={walrus} className="h-[40px] w-[40px] cursor-pointer" />
              </button>

              {box && (
                <div className="top-14 absolute w-[100px] h-[60px] bg-[#202652] flex flex-col justify-center">
                  <Link to="/staff-profile" className="text-white text-sm hover:bg-[#3C4D71] h-[30px]">
                    VIEW PROFILE
                  </Link>
                  <p className="text-white text-sm cursor-pointer hover:bg-[#3C4D71] h-[30px]">LOG OUT</p>
                </div>
              )}
            </div>
          )}

          {location.pathname == "/labTechnician" && (
            <div className="flex flex-col justify-center items-center">
              <button onClick={toggleBox}>
                <img src={walrus} className="h-[40px] w-[40px] cursor-pointer" />
              </button>

              {box && (
                <div className="top-14 absolute w-[100px] h-[60px] bg-[#202652] flex flex-col justify-center">
                  <Link to="/staff-profile" className="text-white text-sm hover:bg-[#3C4D71] h-[30px]">
                    VIEW PROFILE
                  </Link>
                  <p className="text-white text-sm cursor-pointer hover:bg-[#3C4D71] h-[30px]">LOG OUT</p>
                </div>
              )}
            </div>
          )}

          {location.pathname == "/aprove-list-request" && (
            <div className="flex flex-col justify-center items-center">
              <button onClick={toggleBox}>
                <img src={walrus} className="h-[40px] w-[40px] cursor-pointer" />
              </button>

              {box && (
                <div className="top-14 absolute w-[100px] h-[60px] bg-[#202652] flex flex-col justify-center">
                  <Link to="/staff-profile" className="text-white text-sm hover:bg-[#3C4D71] h-[30px]">
                    VIEW PROFILE
                  </Link>
                  <p className="text-white text-sm cursor-pointer hover:bg-[#3C4D71] h-[30px]">LOG OUT</p>
                </div>
              )}
            </div>
          )}

          {location.pathname == "/admin" && (
            <div className="flex flex-col justify-center items-center">
              <button onClick={toggleBox}>
                <img src={walrus} className="h-[40px] w-[40px] cursor-pointer" />
              </button>

              {box && (
                <div className="top-14 absolute w-[100px] h-[60px] bg-[#202652] flex flex-col justify-center">
                  <Link to="/admin-profile" className="text-white text-sm hover:bg-[#3C4D71] h-[30px]">
                    VIEW PROFILE
                  </Link>
                  <p className="text-white text-sm cursor-pointer hover:bg-[#3C4D71] h-[30px]">LOG OUT</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
