import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import checklist from "../../../styles/images/checklist.png";
import axios from "axios";
import ConfirmationModal from "../../ConfirmationModal";

import LabCard from "./LabCard";

export const ViewLabs = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [newLab, setNewLab] = useState({
    labName: "",
    labCode: "",
    imageFile: null,
    imageURL: "",
  });

  const location = useLocation();
  const [labs, setLabs] = useState(Array.isArray(location.state?.labs) ? location.state.labs : []);

  const handleFileChange = (e) => {
    setNewLab((prev) => ({ ...prev, imageFile: e.target.files[0] }));
  };

  const uploadImage = async () => {
    if (!newLab.imageFile) return null;

    try {
      const extension = newLab.imageFile.name.split(".").pop();
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_API_URL}api/upload-url/lab`,
        { extension },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
        },
      );

      const presignedUrl = data.presignedUrl;
      const imageBlob = new Blob([newLab.imageFile], { type: newLab.imageFile.type });
      console.log("pree", presignedUrl);
      console.log("blob", imageBlob);
      console.log("type", newLab.imageFile.type);

      const response = await fetch(presignedUrl, {
        method: "PUT",
        body: imageBlob,
        headers: {
          "Content-Type": newLab.imageFile.type,
          "x-ms-blob-type": "BlockBlob",
        },
      });

      console.log("status", response);

      if (!response.ok) {
        throw new Error(`Image upload failed with status: ${response.status} ${response.statusText}`);
      }

      return presignedUrl;
    } catch (error) {
      return null;
    }
  };

  const sendLab = async () => {
    if (!newLab.labName || !newLab.labCode) {
      return;
    }

    try {
      const presignedUrl = await uploadImage();
      console.log(presignedUrl.split("?")[0]);
      const labData = {
        labName: newLab.labName,
        labCode: newLab.labCode,
        imageURL: presignedUrl.split("?")[0],
      };

      const response = await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}api/admin/labs`, labData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      });
      setLabs((prevLabs) => [...prevLabs, response.data]);

      setNewLab({
        labName: "",
        labCode: "",
        imageFile: null,
        imageURL: "",
      });
    } catch (error) {}
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewLab((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddLabClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmAddLab = () => {
    setShowConfirmation(false);
    sendLab();
  };

  // Function to display toast when a lab is deleted
  const handleLabDeleteSuccess = () => {};

  return (
    <div className="min-h-screen w-full bg-[#202652] flex relative flex-col items-center pb-10">
      <div className="text-white text-[25px] font-semibold tracking-[0.06rem] pt-4">AVAILABLE LABS</div>
      <div className="flex flex-row items-center justify-center bg-[#3C4D71] rounded-[40px] p-4 m-6">
        <input
          type="text"
          name="labName"
          value={newLab.labName}
          onChange={handleInput}
          placeholder="Enter Lab Name"
          className="bg-[#3C4D71] rounded-l-[30px] text-center text-[20px] placeholder-white shadow-lg shadow-[#32405e]"
        />
        <input
          type="text"
          name="labCode"
          value={newLab.labCode}
          onChange={handleInput}
          placeholder="Enter Lab Code"
          className="bg-[#3C4D71] text-center text-[20px] placeholder-white shadow-lg shadow-[#32405e]"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="bg-[#3C4D71] text-center placeholder-white text-[20px] shadow-lg shadow-[#32405e]"
        />

        <div
          className="px-4 text-center text-[20px] bg-[#00ABE4] text-white rounded-r-[30px] cursor-pointer shadow-[#32405e] shadow-lg"
          onClick={handleAddLabClick}
        >
          +
        </div>
      </div>

      <div className="h-full w-[1000px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {labs.map((lab, index) => (
          <div key={index} className="flex justify-center items-center">
            <LabCard
              imgsrc={lab.imageURL || checklist}
              altname="staff profile"
              labData={lab}
              onLabDelete={(labId) => setLabs((prevLabs) => prevLabs.filter((delLab) => delLab.labId !== labId))}
              onDeleteSuccess={handleLabDeleteSuccess} // Pass handleLabDeleteSuccess as a prop
            />
          </div>
        ))}
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <ConfirmationModal
          message="Are you sure you want to add this lab?"
          onConfirm={handleConfirmAddLab}
          onCancel={() => setShowConfirmation(false)}
        />
      )}
    </div>
  );
};

export default ViewLabs;
