import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import axios from "axios";
import LabCard from "../../LabCard";
import labimage from "../../../styles/images/page3.png";
import ClerkLabCard from "./ClerkLabCard";

export const ViewClerkLabs = () => {
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
    <div className="h-svh w-full bg-[#202652]  flex relative flex-col items-center justify-center p-10">
      <div className="h-svh w-[1000px]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {labs.map((lab, index) => {
          return (
            <div key={index} className="flex justify-center items-center ">
              <div className="flex justify-center items-center ">
                <ClerkLabCard
                  imgsrc={labimage}
                  altname="staff profile"
                  labData={lab}
                  onLabDelete={(labId) => setLabs((prevLabs) => prevLabs.filter((delLab) => delLab.labId !== labId))}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
