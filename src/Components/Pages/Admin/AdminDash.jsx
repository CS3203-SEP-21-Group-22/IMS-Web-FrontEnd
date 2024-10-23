import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import checklist from "../../../styles/images/checklist.png";
import cardreserve from "../../../styles/images/cardreserve.png";
import analytics from "../../../styles/images/cardreserve.png"; // Assuming you have an analytics image
import Card from "../../Card";
import axios from "axios";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [labs, setLabs] = useState("");
  const [users, setUsers] = useState("");

  // Function to fetch analytics data when VIEW ANALYTICS is clicked
  const fetchAnalytics = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/admin/reservations?year=2024&month=11",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      navigate("/admin-analytics");
      console.log("Analytics Data:", response.data); // Log the API response to the console
    } catch (error) {
      console.error("Error fetching analytics data", error);
      setError("Failed to load analytics");
    } finally {
      setLoading(false);
      console.log("Loading:", loading); // Log the loading state to the console
      console.log("Error:", error); // Log the error state to the console
      console.log("Labs:", labs); // Log the labs state to the console
      console.log("Users:", users); // Log the users state to the console
    }
  };

  const fetchLabs = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/user/labs", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setLabs(response.data);
      navigate("/view-labs", { state: { labs: response.data } });
    } catch (errror) {
      console.error("Error when fetching labs", error);
      setError("Failed to load labs");
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/admin/users",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      setUsers(response.data);
      navigate("/user-profiles", { state: { users: response.data } });
    } catch (errror) {
      console.error("Error when fetching users", error);
      setError("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#202652] flex relative flex-col items-center ">
      <div className="text-white text-[25px] font-semibold tracking-[0.06rem] pt-4">ADMIN DASHBOARD</div>
      <div className="h-full w-full flex justify-center items-center mt-[180px]">
        <div className="h-full w-[1000px] grid grid-cols-3 gap-3">
          <div className="flex justify-center items-center">
            <Link to="/user-profiles">
              <Card imgsrc={checklist} altname="checklist" Children="VIEW USER PROFILES" onClick={fetchUsers} />
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Card imgsrc={cardreserve} altname="cardreserve" Children="VIEW LABS" onClick={fetchLabs} />
          </div>
          <div className="flex justify-center items-center">
            <Card
              imgsrc={analytics}
              altname="analytics"
              Children="VIEW ANALYTICS"
              onClick={fetchAnalytics} // Call the fetchAnalytics function when clicked
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
