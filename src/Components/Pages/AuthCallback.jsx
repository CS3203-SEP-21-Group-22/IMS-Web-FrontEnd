import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const idToken = params.get("id_token");
    const accessToken = params.get("access_token");
    const refreshToken = params.get("refresh_token");

    if (idToken) {
      const decodedToken = jwtDecode(idToken);
      const email = decodedToken.email;

      console.log("Email:", email);
    }

    console.log("id", idToken);

    const getRoleFromServer = async (accessToken) => {
      try {
        const { data } = await axios.get(
          "https://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/user/role",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          },
        );

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
          navigate("/sign-in");
        }
      } catch (error) {
        console.error("Failed to fetch role from server", error);
        navigate("/sign-in");
      }
    };

    if (accessToken) {
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);
      localStorage.setItem("id_token", idToken);

      getRoleFromServer(accessToken);
    } else {
      console.error("Authentication failed");
      navigate("/sign-in"); // Redirect to login on failure
    }
  }, [navigate]);

  return (
    <div className="h-[800px] w-full bg-[#202652] flex justify-center items-center relative flex-col ">
      <span className="loading loading-spinner text-info w-12 h-12"></span>
      <p className="text-[30px] font-semibold text-white p-2">Loading</p>
    </div>
  );
};

export default AuthCallback;
