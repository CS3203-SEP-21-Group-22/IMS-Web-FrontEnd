import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ClerkEquipmentCard = ({
  imgsrc,
  altname,
  equipmentData,
  imgWidth = "200px",
  imgHeight = "200px",
  onLabDelete,
}) => {
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const [editEquipmentData, setEditEquipmentData] = useState({
    name: equipmentData.name,
    model: equipmentData.model,
    imageUrl: equipmentData.imageUrl,
    maintenanceIntervalDays: equipmentData.maintenanceIntervalDays,
  });

  const navigate = useNavigate();

  const editLab = async (e) => {
    e.stopPropagation(); // Stop event from bubbling to parent
    setError(null);
    try {
      const response = await axios.patch(
        `https://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/clerk/equipments/${equipmentData.equipmentId}`,
        {
          name: editEquipmentData.name,
          model: editEquipmentData.model,
          imageUrl: editEquipmentData.imageUrl,
          maintenanceIntervalDays: editEquipmentData.maintenanceIntervalDays,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );

      console.log("edited lab:", response.data);
      setEditMode(false);
    } catch (error) {
      console.error("Error when fetching res", error);
      setError("Failed to load reservations");
    }
  };

  const fetchItem = async () => {
    setError(null);
    try {
      console.log("equipment id:", equipmentData.equipmentId);
      const response = await axios.get(
        `https://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/user/items?equipmentId=${equipmentData.equipmentId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      console.log("Fetch items:", response.data);
      navigate("/clerk-items", { state: { equipmentId: equipmentData.equipmentId, itemData: response.data } });
    } catch (errror) {
      console.error("Error when fetching res", error);
      setError("Failed to load reservations");
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setEditEquipmentData((prev) => ({ ...prev, [name]: value }));
  };

  const deleteLab = async (e) => {
    e.stopPropagation(); // Stop event from bubbling to parent
    setError(null);
    try {
      const response = await axios.delete(
        `https://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/clerk/equipments/${equipmentData.equipmentId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );

      console.log("deleted equipment:", response.data);
    } catch (errror) {
      console.error("Error when fetching res", error);
      setError("Failed to load reservations");
    }
  };

  const handleClick = () => {
    fetchItem();
  };

  return (
    <div className="w-[307px] h-[288px] bg-[#3C4D71] rounded-[60px] pb-4 flex flex-col justify-center items-center relative cursor-pointer hover:scale-[1.1] transition duration-200 shadow-lg gap-3 ">
      {editMode ? (
        <>
          <input
            type="text"
            name="name"
            value={editEquipmentData.name}
            onChange={handleInput}
            placeholder="Enter Name"
            className="bg-[#3C4D71] rounded-[30px] text-center text-[20px] shadow-lg shadow-[#32405e] text-white"
          />
          <input
            type="text"
            name="model"
            value={editEquipmentData.model}
            onChange={handleInput}
            placeholder="Enter Model"
            className="bg-[#3C4D71] text-center text-[20px] shadow-lg shadow-[#32405e]  rounded-[30px] text-white"
          />
          <input
            type="text"
            name="maintenanceIntervalDays"
            value={editEquipmentData.maintenanceIntervalDays}
            onChange={handleInput}
            placeholder="Maintenance interval(Days)"
            className="bg-[#3C4D71] text-center text-[16px] shadow-lg shadow-[#32405e]  rounded-[30px] text-white p-1 px-6"
          />
          <input
            type="text"
            name="imageUrl"
            value={editEquipmentData.imageUrl}
            onChange={handleInput}
            placeholder="Enter Image URL"
            className="bg-[#3C4D71] text-center text-[20px] shadow-lg shadow-[#32405e] rounded-[30px] text-white"
          />
          <div className="px-4 bg-blue-300 rounded-[30px] cursor-pointer " onClick={editLab}>
            SAVE
          </div>
          <div
            className="px-4 bg-gray-300 rounded-[30px] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setEditMode(false);
            }}
          >
            CANCEL
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <img className="object-contain" src={imgsrc} alt={altname} style={{ width: imgWidth, height: imgHeight }} />
          <p
            className="font-josefin-sans font-normal text-[20px] text-white leading-[20px] tracking-[0.06em]  "
            onClick={handleClick}
          >
            {equipmentData.name}
          </p>
          <p className="font-josefin-sans font-normal text-[20px] text-white leading-[20px] tracking-[0.06em] ">
            {equipmentData.model}
          </p>
          <div
            className="px-4 bg-blue-300 rounded-[30px] cursor-pointer m-2 text-white"
            onClick={(e) => {
              e.stopPropagation();
              setEditMode(true);
            }}
          >
            EDIT
          </div>
          <div className="px-4 bg-blue-300 rounded-[30px] cursor-pointer mb-4 text-white" onClick={deleteLab}>
            DELETE
          </div>
        </div>
      )}
    </div>
  );
};

export default ClerkEquipmentCard;
