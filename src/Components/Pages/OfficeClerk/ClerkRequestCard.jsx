import React, { useState, useEffect } from "react";
import axios from "axios";
import mouse from "../../../../src/styles/images/mouse.png";

const ClerkRequestCard = ({ requestData, onRemoveRequest }) => {
  const [error, setError] = useState("");
  const [itemId, setItemId] = useState(""); // Track item ID when assigning
  const [rejectNote, setRejectNote] = useState(""); // Track reject note when rejecting
  const [items, setItems] = useState([]); // Available items for dropdown

  // Function to format dates
  const formatDate = (date) => {
    return date instanceof Date ? date.toISOString().split("T")[0] : new Date(date).toISOString().split("T")[0];
  };

  // Fetch available items based on the equipmentId
  const fetchAvailableItems = async () => {
    setError(null);
    try {
      const response = await axios.get(
        `http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/user/items?equipmentId=${requestData.equipmentId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      setItems(response.data);
      console.log("Fetched Items:", response.data);
    } catch (error) {
      console.error("Error when fetching items", error);
      setError("Failed to load available items.");
    }
  };

  // Fetch the items when the component mounts
  useEffect(() => {
    fetchAvailableItems();
  }, []);

  // Function to handle item assignment
  const handleAssign = async () => {
    if (!window.confirm("Are you sure you want to assign this item?")) {
      return; // Cancelled the action
    }

    if (!itemId) {
      setError("Please select an item to assign.");
      return;
    }

    const payload = {
      itemId: itemId,
      rejectNote: "", // No reject note when assigning
      accepted: true,
    };

    try {
      const response = await axios.patch(
        `http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/clerk/reservations/${requestData.reservationId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      console.log("Item Assigned:", response.data);
      onRemoveRequest(requestData.reservationId); // Notify parent to remove this request from the list
    } catch (error) {
      console.error("Error when assigning item", error);
      setError("Failed to assign item.");
    }
  };

  // Function to handle request rejection
  const handleReject = async () => {
    if (!window.confirm("Are you sure you want to reject this request?")) {
      return; // Cancelled the action
    }

    if (!rejectNote) {
      setError("Please provide a reason for rejection.");
      return;
    }

    const payload = {
      itemId: 0, // No item is assigned when rejecting
      rejectNote: rejectNote,
      accepted: false,
    };

    try {
      const response = await axios.patch(
        `http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/clerk/reservations/${requestData.reservationId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      console.log("Request Rejected:", response.data);
      onRemoveRequest(requestData.reservationId); // Notify parent to remove this request from the list
    } catch (error) {
      console.error("Error when rejecting request", error);
      setError("Failed to reject request.");
    }
  };

  if (error) return <div className="text-red-500">{error}</div>;

  const formattedStartDate = formatDate(requestData.startDate);
  const formattedEndDate = formatDate(requestData.endDate);
  const formattedReqDate = formatDate(requestData.createdAt);
  const formattedAssignedDate = requestData.respondedAt ? formatDate(requestData.respondedAt) : "N/A";

  return (
    <div className="w-[487px] h-auto bg-[#3C4D71] rounded-[20px] flex flex-row p-4 items-center justify-center hover:scale-105 transition duration-200">
      {/* Left side: Image and Name */}
      <div className="w-[250px] h-[350px] flex flex-col items-center justify-center bg-[#3C4D71] shadow-lg shadow-[#2e3a56] rounded-[20px] p-2">
        <img src={mouse} alt="mouse" className="mb-4" />
        <p className="text-white text-center text-[20px] font-semibold">{requestData.itemName}</p>
        <p className="text-white text-center text-[16px] font-medium">MODEL: {requestData.itemModel}</p>
        <p className="text-white text-center text-[16px] font-medium">LAB: {requestData.labName}</p>
      </div>

      {/* Right side: Other information */}
      <div className="flex flex-col justify-center text-white text-[16px] pl-6 gap-2">
        <p>REQUESTED BY: {requestData.reservedUserName}</p>
        <p>FROM: {formattedStartDate}</p>
        <p>TO: {formattedEndDate}</p>
        <p>REQUESTED AT: {formattedReqDate}</p>

        {/* Assign Item Section */}
        <div className="w-full mt-4">
          <h3 className="text-white text-lg font-semibold">Assign Item</h3>
          <select
            value={itemId}
            onChange={(e) => setItemId(e.target.value)}
            className="w-full p-2 mt-2 bg-white text-black rounded"
          >
            <option value="">Select Item Serial Number</option>
            {items.map((item) => (
              <option key={item.itemId} value={item.itemId}>
                {item.serialNumber}
              </option>
            ))}
          </select>
          <button onClick={handleAssign} className="bg-blue-500 text-white rounded mt-4 p-2 px-20 hover:bg-blue-600">
            ASSIGN
          </button>
        </div>

        {/* Reject Request Section */}
        <div className="w-full mt-8">
          <h3 className="text-white text-lg font-semibold">Reject Request</h3>
          <input
            type="text"
            value={rejectNote}
            onChange={(e) => setRejectNote(e.target.value)}
            placeholder="Enter Reject Note"
            className="w-full p-2 mt-2 bg-white text-black rounded"
          />
          <button onClick={handleReject} className="bg-red-500 text-white rounded mt-4 p-2 px-20 hover:bg-red-600">
            REJECT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClerkRequestCard;
