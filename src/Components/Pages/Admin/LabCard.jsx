import React from "react";
import axios from "axios";
import { useState } from "react";

const LabCard = ({ imgsrc, altname, labData, imgWidth = "200px", imgHeight = "200px", onLabDelete }) => {
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editLabData, setEditLabData] = useState({
    labName: labData.labName,
    labCode: labData.labCode,
    imageURL: labData.imageURL,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setEditLabData((prev) => ({ ...prev, [name]: value }));
  };

  const deleteLab = async () => {
    setError(null);
    try {
      const response = await axios.delete(`${process.env.REACT_APP_BACKEND_API_URL}api/admin/labs/${labData.labId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      console.log("deleted lab:", response.data);

      if (onLabDelete) {
        onLabDelete(labData.labId);
      }
    } catch (errror) {
      console.error("Error when fetching res", error);
      setError("Failed to load reservations");
    }
  };
  const editLab = async () => {
    setError(null);
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BACKEND_API_URL}api/admin/labs/${labData.labId}`,
        {
          labName: editLabData.labName,
          labCode: editLabData.labCode,
          imageURL: editLabData.imageURL,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );

      console.log("edited lab:", response.data);
      setEditMode(false);

      if (onLabDelete) {
        onLabDelete(labData.labId);
      }
    } catch (errror) {
      console.error("Error when fetching res", error);
      setError("Failed to load reservations");
    }
  };

  return (
    <div className="w-[297px] h-[278px] bg-[#3C4D71] rounded-[60px] flex flex-col justify-center items-center relative cursor-pointer hover:scale-[1.1] transition duration-200 shadow-lg gap-3 p-4">
      {editMode ? (
        <>
          <input
            type="text"
            name="labName"
            value={editLabData.labName}
            onChange={handleInput}
            placeholder="Enter Lab Name"
            className="bg-[#3C4D71] rounded-[30px] text-center text-[20px] shadow-lg shadow-[#32405e] text-white"
          />
          <input
            type="text"
            name="labCode"
            value={editLabData.labCode}
            onChange={handleInput}
            placeholder="Enter Lab Code"
            className="bg-[#3C4D71] text-center text-[20px] shadow-lg shadow-[#32405e]  rounded-[30px] text-white"
          />
          <input
            type="text"
            name="imageURL"
            value={editLabData.imageURL}
            onChange={handleInput}
            placeholder="Enter Lab Image URL"
            className="bg-[#3C4D71] text-center text-[20px] shadow-lg shadow-[#32405e] rounded-[30px] text-white"
          />
          <div className="px-4 bg-[#00ABE4] rounded-[30px] cursor-pointer text-white" onClick={editLab}>
            SAVE
          </div>
          <div className="px-4 bg-red-500 rounded-[30px] cursor-pointer text-white" onClick={() => setEditMode(false)}>
            CANCEL
          </div>
        </>
      ) : (
        <>
          <img
            className="object-contain "
            src={labData.imageUrl}
            alt={altname}
            style={{ width: imgWidth, height: imgHeight }}
          />
          <p className="font-josefin-sans font-normal text-[20px] text-white leading-[20px] tracking-[0.06em] ">
            {labData.labName}
          </p>

          <div
            className="px-4 bg-[#00ABE4] rounded-[30px] cursor-pointer text-white "
            onClick={() => setEditMode(true)}
          >
            EDIT
          </div>
          <div className="px-4 bg-[#00ABE4] rounded-[30px] cursor-pointer text-white" onClick={deleteLab}>
            DELETE
          </div>
        </>
      )}
    </div>
  );
};

export default LabCard;
