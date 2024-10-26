import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import walrus from "../styles/images/walrus.png";
import { jwtDecode } from "jwt-decode"; // Import jwtDecode directly

const NavBarMenu = ({ pathname, firstLinkTo }) => {
  const [box, setBox] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleBox = () => {
    setBox(!box);
  };

  const idToken = localStorage.getItem("id_token");
  let decodedToken = {};

  if (idToken) {
    try {
      decodedToken = jwtDecode(idToken); // Decode only if idToken exists
    } catch (error) {
      console.error("Invalid ID token:", error);
    }
  }

  const accessToken = localStorage.getItem("access_token");
  let decodedAccessToken = {};

  if (accessToken) {
    try {
      decodedAccessToken = jwtDecode(accessToken); // Decode only if accessToken exists
    } catch (error) {
      console.error("Invalid access token:", error);
    }
  }

  const handleLogOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("id_token");
    navigate("/sign-in");
  };

  // Extract and format the role based on the firstLinkTo prop
  const role = firstLinkTo.replace("/", "").charAt(0).toUpperCase() + firstLinkTo.slice(2);

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
          </div>
          {box && (
            <div className="top-14 absolute w-[220px] h-[200px] bg-[#202652] shadow-lg flex flex-col justify-center items-center">
              <p className="text-white text-lg font-medium">
                {decodedToken.firstName} {decodedToken.lastName}
              </p>
              <p className="text-white text-[16px]">Email: {decodedToken.email || "Email not available"}</p>
              <p className="text-white text-[16px]">Number: {decodedToken.contactNumber || "Contact not available"}</p>
              <p className="text-white text-[16px]">Role: {role || "Role not available"}</p>

              <p
                className="text-white text-[16px] cursor-pointer bg-[#00ABE4] tracking-[0.06em] h-[35px] rounded-[10px] mt-8 flex flex-row justify-center items-center p-2"
                onClick={handleLogOut}
              >
                LOG OUT
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default NavBarMenu;
