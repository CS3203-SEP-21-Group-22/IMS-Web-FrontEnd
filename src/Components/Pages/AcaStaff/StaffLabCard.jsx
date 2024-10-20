import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StaffLabCard = ({ imgsrc, altname, name, imgWidth = "200px", imgHeight = "200px", labId }) => {
  const [error, setError] = useState(null);
  console.log(error);
  const navigate = useNavigate();

  const fetchLabEquipment = async () => {
    setError(null);
    try {
      console.log("Lab id:", labId);
      const response = await axios.get(
        `https://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/user/equipments?labId=${labId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      console.log("Fetched equipment:", response.data);
      navigate("/staff-equipment", { state: { equipment: response.data } });
    } catch (error) {
      console.error("Error when fetching res", error);
      setError("Failed to load reservations");
    }
  };

  return (
    <div
      className="w-[297px] h-[278px] bg-[#3C4D71] rounded-[60px] flex flex-col justify-center items-center relative cursor-pointer hover:scale-[1.1] transition duration-200 shadow-lg"
      onClick={fetchLabEquipment}
    >
      <img className="object-contain" src={imgsrc} alt={altname} style={{ width: imgWidth, height: imgHeight }} />
      <p className="font-josefin-sans font-normal text-[20px] text-white leading-[20px] tracking-[0.06em]  ">{name}</p>
    </div>
  );
};

export default StaffLabCard;
