import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import checklist from "../../../styles/images/checklist.png";
import cardreserve from "../../../styles/images/cardreserve.png";
import laptop from "../../../styles/images/laptop.png";
import Card from "../../Card";
import LargeCard from "../../LargeCard";
import LabItems from "../../LabItems";
import axios from "axios";

const AdminDashboard = () => {
  const [expandedBox1, setExpandedBox1] = useState(false);
  const [expandedBox2, setExpandedBox2] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [labs, setLabs] = useState("");

  const toggleBox1 = () => {
    setExpandedBox1(!expandedBox1);
    if (expandedBox2) setExpandedBox2(false); // Ensure only one box is expanded at a time
  };

  const toggleBox2 = () => {
    setExpandedBox2(!expandedBox2);
    if (expandedBox1) setExpandedBox1(false); // Ensure only one box is expanded at a time
  };

  const columns = ["ITEM NAME", "SERIAL NO", "LAB", "DATE REQUESTED"];

  const reqItems = [
    <LabItems
      reqimg={laptop}
      itmname="LAPTOP"
      serial="123S9X9"
      lab="ICE LAB"
      datereq="08/25/2024"
      wantButton={false}
    />,
    <LabItems
      reqimg={laptop}
      itmname="LAPTOP"
      serial="123S9X9"
      lab="ICE LAB"
      datereq="08/25/2024"
      wantButton={false}
    />,
    <LabItems
      reqimg={laptop}
      itmname="LAPTOP"
      serial="123S9X9"
      lab="ICE LAB"
      datereq="08/25/2024"
      wantButton={false}
    />,
  ];

  const fetchLabs = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/user/labs", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setLabs(response.data);
      navigate("/view-labs", { state: { labs: response.data } });
      console.log("Fetched labs:", response.data);
    } catch (errror) {
      console.error("Error when fetching res", error);
      setError("Failed to load reservations");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[600px] w-full bg-[#202652] flex relative ">
      <div className="h-full w-full flex justify-center items-center ">
        <div className="h-full w-[1000px] grid grid-cols-2 gap-3">
          {!expandedBox1 && !expandedBox2 ? (
            <>
              <div className="flex justify-center items-center ">
                <Link to="/user-profiles">
                  <Card imgsrc={checklist} altname="checklist" Children="VIEW USER PROFILES" onClick={toggleBox1} />
                </Link>
              </div>
              <div className="flex justify-center items-center ">
                <Card imgsrc={cardreserve} altname="cardreserve" Children="VIEW LABS" onClick={fetchLabs} />
              </div>
            </>
          ) : expandedBox1 ? (
            <div className="flex justify-center items-center w-full col-span-2">
              <LargeCard onClick={toggleBox1} Children={reqItems} columns={columns} />
            </div>
          ) : (
            <div className="flex justify-center items-center w-full col-span-2">
              <LargeCard onClick={toggleBox2} Children={reqItems} columns={columns} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
