import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TechItemCard from "./TechItemCard";
import axios from "axios";

const LabTechItems = () => {
  const location = useLocation();
  const equipmentId = location.state.equipmentId;

  // State to hold fetched items, loading state, and error messages
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch items data based on equipmentId
  const fetchItems = async () => {
    setError(null); // Clear any previous errors
    setLoading(true); // Set loading to true while data is being fetched
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API_URL}api/user/items?equipmentId=${equipmentId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      setItems(response.data); // Store fetched data in state
    } catch (error) {
      console.error("Error when fetching equipment data", error);
      setError("Failed to load equipment information");
    } finally {
      setLoading(false); // Stop loading when request is finished
    }
  };

  // Call fetchItems when component mounts
  useEffect(() => {
    fetchItems();
  }, [equipmentId]);

  return (
    <div className="min-h-screen w-full bg-[#202652] flex flex-col  items-center p-10">
      <div className="text-white text-[25px] font-semibold tracking-[0.06rem]">AVAILABLE ITEMS</div>

      {/* Loading state */}
      {loading && <p className="text-white">Loading...</p>}

      {/* Error state */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Display items when available */}
      {!loading && !error && (
        <div className="bg-[#202652] flex flex-wrap justify-center gap-2 gap-y-0 p-10">
          {items.map((item, index) => (
            <TechItemCard key={index} itemData={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LabTechItems;
