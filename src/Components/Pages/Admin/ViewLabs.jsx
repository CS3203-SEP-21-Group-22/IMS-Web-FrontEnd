import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import checklist from "../../../styles/images/checklist.png";
import axios from "axios";

import LabCard from "../../LabCard";

export const ViewLabs = () => {
  const [error, setError] = useState(null);
  const [newLab, setNewLab] = useState({
    labName: "",
    labCode: "",
    imageFile: null,
    imageName: "",
  });

  const location = useLocation();
  const [labs, setLabs] = useState(Array.isArray(location.state?.labs) ? location.state.labs : []);

  const sendLab = async () => {
    if (!newLab.labName || !newLab.labCode) {
      setError("Please fill in all the fields.");
      return;
    }

    try {
      let imageURL = null;

      if (newLab.imageFile) {
        const fileExtension = newLab.imageFile.name.split(".").pop();
        const imageUploadPayload = {
          imageName: newLab.imageName || "lab_image",
          extension: fileExtension,
        };

        const uploadResponse = await axios.post(
          "http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/upload-url/lab",
          imageUploadPayload,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              "Content-Type": "application/json",
            },
          },
        );

        const presignedUrl = uploadResponse.data.presignedUrl;
        console.log("newpre", presignedUrl);

        await axios.put(presignedUrl, newLab.imageFile, {
          headers: {
            "Content-Type": newLab.imageFile.type,
          },
        });

        imageURL = presignedUrl.split("?")[0];
      }

      const labData = {
        labName: newLab.labName,
        labCode: newLab.labCode,
        imageURL: imageURL || null,
      };

      console.log("post image", labData.imageURL);

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

      setLabs((prevLabs) => [...prevLabs, response.data]);
      setNewLab({
        labName: "",
        labCode: "",
        imageFile: null,
        imageName: "",
      });
    } catch (error) {
      console.error("Error when uploading lab", error);
      setError("Failed to add new lab");
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewLab((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log(file);
      setNewLab((prev) => ({ ...prev, imageFile: file, imageName: file.name }));
    }
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
          type="file"
          name="imageFile"
          accept="image/*"
          onChange={handleFileChange}
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
