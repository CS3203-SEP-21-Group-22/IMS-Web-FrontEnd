import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import checklist from "../../../styles/images/checklist.png";
import axios from "axios";

import LabCard from "./LabCard";

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
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}api/admin/labs`, labData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      });
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
    <div className="h-full w-full bg-[#202652]  flex relative flex-col items-center justify-center p-10">
      <div className="flex flex-row items-center justify-center bg-[#3C4D71] rounded-[40px] p-4 m-6">
        <input
          type="text"
          name="labName"
          value={newLab.labName}
          onChange={handleInput}
          placeholder="Enter Lab Name"
          className="bg-[#3C4D71] rounded-l-[30px] text-center text-[20px] shadow-lg shadow-[#32405e]"
        />
        <input
          type="text"
          name="labCode"
          value={newLab.labCode}
          onChange={handleInput}
          placeholder="Enter Lab Code"
          className="bg-[#3C4D71] text-center text-[20px] shadow-lg shadow-[#32405e]"
        />
        <input
          type="text"
          name="imageURL"
          value={newLab.imageURL}
          onChange={handleInput}
          placeholder="Enter Lab Image URL"
          className="bg-[#3C4D71] text-center text-[20px] shadow-lg shadow-[#32405e]"
        />

        <div
          className="px-4 text-center text-[20px] bg-blue-300 rounded-r-[30px] cursor-pointer shadow-[#32405e] shadow-lg"
          onClick={sendLab}
        >
          +
        </div>
      </div>

      <div className="h-full w-[1000px]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {labs.map((lab, index) => {
          return (
            <div key={index} className="flex justify-center items-center ">
              <div className="flex justify-center items-center ">
                <LabCard
                  imgsrc={checklist}
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
