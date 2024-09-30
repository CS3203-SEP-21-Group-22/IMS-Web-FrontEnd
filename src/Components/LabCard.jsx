import React from "react";
import axios from "axios";
import { useState } from "react";

const LabCard = ({ imgsrc, altname, labData, imgWidth = "200px", imgHeight = "200px", onLabDelete }) => {
  const [error, setError] = useState(null);

  const deleteLab = async () => {
    setError(null);
    try {
      const response = await axios.delete(
        `http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/admin/labs/${labData.labId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );

      console.log("deleted lab:", response.data);

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
      <img className="object-contain" src={imgsrc} alt={altname} style={{ width: imgWidth, height: imgHeight }} />
      <p className="font-josefin-sans font-normal text-[20px] text-white leading-[20px] tracking-[0.06em] ">
        {labData.labName}
      </p>

      <div className="px-4 bg-blue-300 rounded-[30px] cursor-pointer">EDIT</div>
      <div className="px-4 bg-blue-300 rounded-[30px] cursor-pointer" onClick={deleteLab}>
        DELETE
      </div>
    </div>
  );
};

export default LabCard;
