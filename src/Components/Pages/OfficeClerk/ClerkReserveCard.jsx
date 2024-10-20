import React, { useState, useEffect } from "react";
import axios from "axios";
import mouse from "../../../../src/styles/images/mouse.png";

const ClerkReserveCard = ({ reservationData }) => {
  const [error, setError] = useState("");
  const [reservedItem, setReservedItem] = useState(null);

  // Function to format dates
  const formatDate = (date) => {
    return date instanceof Date ? date.toISOString().split("T")[0] : new Date(date).toISOString().split("T")[0];
  };

  const fetchReservedItems = async () => {
    setError(null);
    console.log("reserve id:", reservationData.reservationId);
    try {
      const response = await axios.get(
        `https://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/user/reservations/${reservationData.reservationId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      setReservedItem(response.data);
      console.log("Fetched Reserved:", response.data);
    } catch (error) {
      console.error("Error when fetching reserved item", error);
      setError("Failed to load reservation details.");
    }
  };

  // Fetch data when the component is mounted
  useEffect(() => {
    fetchReservedItems();
  });

  if (error) return <div className="text-red-500">{error}</div>;

  if (!reservedItem) return <div className="text-white">Loading...</div>;

  const formattedStartDate = formatDate(reservedItem.startDate);
  const formattedEndDate = formatDate(reservedItem.endDate);
  const formattedReqDate = formatDate(reservedItem.createdAt);
  const formattedAssignedDate = formatDate(reservedItem.respondedAt);

  return (
    <div className="w-[437px] h-[400px] bg-[#3C4D71] rounded-[20px] flex p-2 flex-row items-center justify-center hover:scale-105 transition duration-200">
      {/* Left side: Image and Name */}
      <div className="w-[170px] h-[350px] flex flex-col items-center justify-center bg-[#3C4D71] shadow-lg shadow-[#2e3a56] rounded-[20px] p-2 ">
        <img src={reservedItem.imageUrl} alt="mouse" className="mb-4" />
        <p className="text-white text-center text-[20px] font-semibold">{reservedItem.itemName}</p>
        <p className="text-white text-center text-[16px]  font-medium">MODEL: {reservedItem.itemModel}</p>
        <p className="text-white text-center text-[16px]  font-medium">LAB: {reservedItem.labName}</p>
      </div>
      {/* Right side: Other information */}
      <div className="flex flex-col justify-center text-white text-[16px] pl-6 gap-2">
        <p>REQUESTED BY: {reservedItem.reservedUserName}</p>
        <p>START: {formattedStartDate}</p>
        <p>END: {formattedEndDate}</p>
        <p>REQUESTED AT: {formattedReqDate}</p>
        <p>ASSIGNED ITEM: {reservedItem.itemSerialNumber}</p>
        <p>ASSIGNED BY: {reservedItem.respondedClerkName}</p>
        <p>ASSIGNED ON: {formattedAssignedDate}</p>
      </div>
    </div>
  );
};

export default ClerkReserveCard;
