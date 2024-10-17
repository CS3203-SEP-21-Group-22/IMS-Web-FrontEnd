import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ItemMiniCard from "./ItemMiniCard";

export const ClerkItems = () => {
  const location = useLocation();
  const equipmentId = location.state.equipmentId; // Get equipmentId from the previous page
  const [items, setItems] = useState([]); // Store fetched items
  const [newItem, setNewItem] = useState({
    serialNumber: "",
  }); // Store new item data
  const [error, setError] = useState(null); // Error state

  // Fetch items when the component mounts
  useEffect(() => {
    // Fetch items belonging to the equipmentId
    const fetchItems = async () => {
      setError(null);
      try {
        const response = await axios.get(
          `http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/user/items?equipmentId=${equipmentId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          },
        );
        setItems(response.data); // Set the fetched items
        console.log("Fetched items:", response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
        setError("Failed to load items.");
      }
    };
    fetchItems();
  }, [equipmentId]);

  // Add a new item
  const addItem = async () => {
    if (!newItem.serialNumber) {
      setError("Please provide a serial number.");
      return;
    }

    const newItemData = {
      equipmentId: equipmentId, // Use the existing equipmentId
      serialNumber: newItem.serialNumber, // Use the serial number from the form
    };

    try {
      const response = await axios.post(
        "http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/clerk/items",
        newItemData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
        },
      );
      console.log("New item added:", response.data);
      setItems((prevItems) => [...prevItems, response.data]); // Add new item to the list
      setNewItem({ serialNumber: "" }); // Clear the input field
    } catch (error) {
      console.error("Error adding item:", error);
      setError("Failed to add the item.");
    }
  };

  // Handle input change for the serial number
  const handleInputChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-screen w-full bg-[#202652] flex flex-col items-center  p-10 text-white">
      <div className="text-white text-[25px] font-semibold tracking-[0.06rem] p-2">VIEW ITEMS</div>
      {/* Input to add a new item */}
      <div className="flex flex-row items-center justify-center bg-[#3C4D71] rounded-[40px] p-4 mb-6">
        <label className="px-2">ADD ITEM</label>
        <input
          type="text"
          name="serialNumber"
          value={newItem.serialNumber}
          onChange={handleInputChange}
          placeholder="Enter Serial Number"
          className="bg-[#3C4D71] rounded-l-[30px] text-center text-[20px] shadow-lg shadow-[#32405e] text-white"
        />
        <div
          className="px-4 text-center text-[20px] bg-blue-300 rounded-r-[30px] cursor-pointer shadow-[#32405e] shadow-lg"
          onClick={addItem}
        >
          +
        </div>
      </div>

      {/* Display any error messages */}
      {error && <div className="text-red-500">{error}</div>}

      {/* Display the items */}
      <div className="w-full flex flex-wrap gap-4">
        {items.length > 0 ? (
          items.map((item, index) => <ItemMiniCard itemData={item} key={index} />)
        ) : (
          <p className="text-white">No items available for this equipment.</p>
        )}
      </div>
    </div>
  );
};

export default ClerkItems;
