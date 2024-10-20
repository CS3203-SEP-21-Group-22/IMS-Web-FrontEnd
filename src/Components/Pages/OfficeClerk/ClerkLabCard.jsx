import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ClerkLabCard = ({ imgsrc, altname, labData, imgWidth = "200px", imgHeight = "200px", onLabDelete }) => {
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchEquipment = async () => {
    setError(null);
    try {
      console.log(labData.labId);
      const response = await axios.get(
        `https://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/user/equipments?labId=${labData.labId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      console.log("before navigating");
      navigate("/clerk-equipment", { state: { equipment: response.data, labId: labData.labId } });
      console.log("im navigating");
      console.log("Fetched equipments:", response.data);
    } catch (errror) {
      console.error("Error when fetching res", error);
      setError("Failed to load reservations");
    }
  };

  return (
    <div
      className="w-[297px] h-[278px] bg-[#3C4D71] rounded-[60px] flex flex-col justify-center items-center relative cursor-pointer hover:scale-[1.1] transition duration-200 shadow-lg gap-3 p-4"
      onClick={fetchEquipment}
    >
      <img
        className="object-contain"
        src={labData.imageUrl}
        alt={altname}
        style={{ width: imgWidth, height: imgHeight }}
      />
      <p className="font-josefin-sans font-normal text-[20px] text-white leading-[20px] tracking-[0.06em] ">
        {labData.labName}
      </p>
    </div>
  );
};

export default ClerkLabCard;
