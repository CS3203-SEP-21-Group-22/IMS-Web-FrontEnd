import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import walrus from "../styles/images/walrus.png";

const NavBarMenu = ({ pathname, firstLinkTo }) => {
  const [box, setBox] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();

  const toggleBox = () => {
    setBox(!box);
  };

  const handleLogOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    console.log("hi");
    navigate("/sign-in");
  };

  return (
    <>
      {location.pathname === pathname && (
        <div className="flex flex-row justify-center items-center">
          <Link
            to={firstLinkTo}
            className="mr-14 tracking-[0.06em] text-[#FFFFFF] cursor-pointer font-[Josefin_Sans] text-[15px]"
          >
            DASHBOARD
          </Link>
          <div className="flex flex-col justify-center items-center">
            <button onClick={toggleBox}>
              <img src={walrus} className="h-[40px] w-[40px] cursor-pointer" alt="walrus" />
            </button>

            {box && (
              <div className="top-14 absolute w-[100px] h-[60px] bg-[#202652] flex flex-col justify-center">
                <Link to="/user" className="text-white text-sm hover:bg-[#3C4D71] h-[30px]">
                  VIEW PROFILE
                </Link>
                <p className="text-white text-sm cursor-pointer hover:bg-[#3C4D71] h-[30px]" onClick={handleLogOut}>
                  LOG OUT
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NavBarMenu;
