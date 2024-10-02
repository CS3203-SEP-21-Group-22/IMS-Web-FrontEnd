import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import checklist from "../../styles/images/checklist.png";
import axios from "axios";

import LabCard from "../LabCard";

export const ViewLabs = () => {
  const [error, setError] = useState(null);
  const [newLab, setNewLab] = useState({
    labName: "",
    labCode: "",
    imageURL: "",
  });

  const location = useLocation();
  const [labs, setLabs] = useState(Array.isArray(location.state?.labs) ? location.state.labs : []);

  const sendLab = async () => {
    const labData = {
      labName: newLab.labName,
      labCode: newLab.labCode,
      imageURL: newLab.imageURL.trim() ? newLab.imageURL : null,
    };

    if (!labData.labName || !labData.labCode) {
      setError("Please fill in all the fields.");
      console.log(error);
      return;
    }

    try {
      console.log(labData);
      const response = await axios.post(
        "http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/admin/labs",
        labData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
        },
      );
      console.log("i am here");
      console.log("New Lab Added:", response.data);
      setLabs((prevLabs) => [...prevLabs, response.data]);
      setNewLab({
        labName: "",
        labCode: "",
        imageURL: "",
      });
    } catch (errror) {
      console.error("Error when fetching res", error);
      setError("Failed to load reservations");
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewLab((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="h-[600px] w-full bg-gradient-to-b from-[#202652] to-[#E3EDF8] flex relative ">
      <div className="h-full w-full flex justify-center items-center ">
      <div className="h-full w-[1000px] grid grid-cols-2 gap-3">
          <>
        
            <div className="flex justify-center items-center ">
              <Link to="/view-labs">
              <Card imgsrc={checklist} altname="admin profile" Children="LAB 01" />
              </Link>
            </div>
            <div className="flex justify-center items-center ">
            <Link to="/view-labs" className="flex justify-center items-center ">
              <Card imgsrc={checklist} altname="staff profile" Children="LAB 02" />
            </Link>
            </div>
            
          </>
      </div>
      </div>
    </div>
  );
};
