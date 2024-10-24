import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import labimage from "../../../styles/images/page3.png";
import ClerkEquipmentCard from "./ClerkEquipmentCard";

export const ClerkEquipment = () => {
  const [error, setError] = useState(null);
  const [newEquipment, setNewEquipment] = useState({
    name: "",
    model: "",
    imageUrl: "",
  });

  const location = useLocation();
  const [equipment, setEquipment] = useState(Array.isArray(location.state?.equipment) ? location.state.equipment : []);
  const labId = location.state.labId;

  const addEquipment = async () => {
    const equipmentData = {
      name: newEquipment.name,
      model: newEquipment.model,
      labId: labId,
      imageUrl: newEquipment.imageUrl.trim() ? newEquipment.imageUrl : null,
      specification: "Default Specification",
      maintenanceIntervalDays: 30,
    };

    if (!newEquipment.name || !newEquipment.model) {
      setError("Please fill in all the fields.");
      console.log(error);
      return;
    }

    try {
      console.log(equipmentData);
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}api/clerk/equipments`, equipmentData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      });
      console.log("New Equipment added:", response.data);
      setEquipment((prevEquipment) => [...prevEquipment, response.data]);
      setNewEquipment({
        name: "",
        model: "",
        imageUrl: "",
      });
    } catch (error) {
      console.error("Error when fetching res", error);
      setError("Failed to load equipment");
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewEquipment((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="h-svh w-full bg-[#202652] flex relative flex-col items-center p-10 text-white">
      <div className="flex flex-row items-center justify-center bg-[#3C4D71] rounded-[40px] p-4 m-6 text-white">
        <input
          type="text"
          name="name"
          value={newEquipment.name}
          onChange={handleInput}
          placeholder="Enter Equipment Name"
          className="bg-[#3C4D71] rounded-l-[30px] text-center text-[20px] shadow-lg shadow-[#32405e] text-white"
        />
        <input
          type="text"
          name="model"
          value={newEquipment.model}
          onChange={handleInput}
          placeholder="Enter Equipment Model"
          className="bg-[#3C4D71] text-center text-[20px] shadow-lg shadow-[#32405e] text-white"
        />
        <input
          type="text"
          name="imageUrl"
          value={newEquipment.imageUrl}
          onChange={handleInput}
          placeholder="Enter Image URL"
          className="bg-[#3C4D71] text-center text-[20px] shadow-lg shadow-[#32405e] text-white"
        />

        <div
          className="px-4 text-center text-[20px] bg-[#00ABE4] rounded-r-[30px] cursor-pointer shadow-[#32405e] shadow-lg text-white"
          onClick={addEquipment}
        >
          +
        </div>
      </div>

      {equipment.length === 0 ? (
        <div className="text-white text-2xl">No equipment available</div>
      ) : (
        <div className="h-svh w-[1300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-center items-center">
          {equipment.map((equip, index) => {
            return (
              <div key={index} className="flex justify-center items-center ">
                <div className="flex justify-center items-center ">
                  <ClerkEquipmentCard imgsrc={labimage} altname="staff profile" equipmentData={equip} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
