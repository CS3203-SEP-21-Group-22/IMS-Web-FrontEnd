import React, { useState } from "react";
import axios from "axios";

const TechItemCard = ({ itemData }) => {
  const [error, setError] = useState(null);
  const [boxExpanded, setBoxExpanded] = useState(false);
  const [newData, setNewData] = useState([]); // Initialize as an object
  const [loading, setLoading] = useState(false); // Track loading state

  const fetchItem = async () => {
    setError(null); // Clear any previous errors
    setLoading(true); // Set loading to true while data is being fetched
    try {
      const response = await axios.get(
        `https://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/user/items/${itemData.itemId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      setNewData(response.data); // Update newData with response data
      console.log("itemdata", response.data);
    } catch (error) {
      console.error("Error when fetching equipment data", error);
      setError("Failed to load equipment information");
    } finally {
      setLoading(false); // Stop loading when request is finished
    }
  };

  const handleClick = () => {
    setBoxExpanded(!boxExpanded);
    if (!boxExpanded && !newData.totalCount) {
      fetchItem(); // Fetch data only when expanding the card for the first time
    }
  };

  return (
    <div className="p-4">
      <div onClick={handleClick}>
        {error && <p className="text-red-500">{error}</p>}
        <div
          className={`w-[377px] ${
            boxExpanded ? "h-[320px]" : "h-[138px]"
          } bg-[#3C4D71] flex-col flex items-center justify-center cursor-pointer rounded-[20px] transition-height duration-300 ease-in-out`}
        >
          <div className="flex-row flex items-center cursor-pointer text-white ">
            <div className="w-[150px]">
              <img src={itemData.imageUrl} alt={itemData.name} />
            </div>
            <div className="flex flex-col justify-center text-[20px] text-left pl-4">
              <p className="font-semibold">{itemData.name}</p>
              <p>SERIAL NO: {itemData.serialNumber}</p>
              <p>STATUS: {itemData.status}</p>
            </div>
          </div>

          {boxExpanded && (
            <div className="flex flex-col items-center justify-center mt-4 text-white">
              {loading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <p>LAST MAINTENANCE: {newData.lastMaintenanceOn || "N/A"}</p>
                  <p>LAST MAINTENANCE BY: {newData.lastMaintenanceBy || "Unknown"}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card collapsing on button click
                    }}
                    className="mt-4 p-2 bg-blue-500 text-white rounded"
                  >
                    View Items
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechItemCard;
