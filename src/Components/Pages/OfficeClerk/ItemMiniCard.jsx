import React, { useState } from "react";
import axios from "axios";
import mouse from "../../../../src/styles/images/mouse.png";

const ItemMiniCard = ({ itemData }) => {
  const [error, setError] = useState(null);
  const [currentItemData, setCurrentItemData] = useState(itemData); // Renamed state variable

  const [boxExpanded, setBoxExpanded] = useState(false); // Improved naming for clarity

  const fetchItemDetail = async () => {
    setError(null); // Reset error state
    try {
      console.log("item id:", currentItemData.itemId);
      const response = await axios.get(
        `http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/user/items/${currentItemData.itemId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      console.log("Fetch final item:", response.data);
      setCurrentItemData(response.data);
      setBoxExpanded(!boxExpanded);
    } catch (error) {
      console.error("Error when fetching item details", error);
      setError("Failed to load item details.");
    }
  };

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      {boxExpanded ? (
        <div
          className="w-[397px] h-[238px] bg-[#3C4D71] flex-row flex items-center cursor-pointer rounded-[20px]"
          onClick={fetchItemDetail}
        >
          <div className="w-[150px]">
            <img src={mouse} alt="mouse" />
          </div>
          <div className="flex flex-col justify-center text-[20px] text-left">
            <p>Model: {currentItemData.itemModel}</p>
            <p>Lab: {currentItemData.labName}</p>
            <p>Serial: {currentItemData.serialNumber}</p>
            <p>Last Maintenance: {currentItemData.lastMaintenanceOn}</p>
            <p>Maintenance by: {currentItemData.lastMaintenanceBy}</p>
            <p>Status: {currentItemData.status}</p>
          </div>
        </div>
      ) : (
        <div
          className="w-[397px] h-[138px] bg-[#3C4D71] flex-row flex items-center cursor-pointer rounded-[20px]"
          onClick={fetchItemDetail}
        >
          <div className="w-[150px]">
            <img src={mouse} alt="mouse" />
          </div>
          <div className="flex flex-col justify-center text-[20px] text-left">
            <p>Serial: {currentItemData.serialNumber}</p>
            <p>Status: {currentItemData.status}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemMiniCard;
