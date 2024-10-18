import React, { useEffect } from "react";
import signindesign from "../../styles/images/signindesign.png";
import { AUTH_CLIENT_ID, AUTH_SERVER_URL } from "../../config";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const navigate = useNavigate();
  const getRoleFromServer = async (access_token, refresh_token, token) => {
    try {
      const { data } = await axios.get("/api/user/role", {
        baseURL: "https://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const { role } = data;
      const roleRoutes = {
        SystemAdmin: "/admin",
        Clerk: "/officeclerk",
        Student: "/student",
        AcademicStaff: "/staff",
        Technician: "/labTechnician2",
      };

      if (roleRoutes[role]) {
        navigate(roleRoutes[role]);
      } else {
        console.error("Unknown role");
      }
    } catch (error) {
      console.error(error);
      navigate("/sign-in");
    }
  };

  const handleLoginRedirect = async () => {
    const token = localStorage.getItem("access_token");
    if (token) {
      await getRoleFromServer(token);
    }
  };

  useEffect(() => {
    handleLoginRedirect();
  });

  const redirectUri = "http://localhost:3000";
  const loginUrl = `${AUTH_SERVER_URL}/login?redirectUri=${encodeURIComponent(redirectUri)}&clientId=${AUTH_CLIENT_ID}`;

  return (
    <div className="h-screen w-full bg-[#202652] flex flex-col items-center justify-center">
      <div className="relative w-[700px] h-[450px]">
        <img src={signindesign} alt="signinpic" className="w-full h-full object-cover z-[1] border-none" />

        <Link
          to={loginUrl}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-blue-400 text-white font-semibold py-4 px-4 rounded-md text-[20px]"
        >
          Login with Institution Account
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
