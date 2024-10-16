import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ClerkItemRow = ({ itemData }) => {
  const [error, setError] = useState(null);
  // const deleteReservation = async () => {
  //   setError(null);
  //   try {
  //     const response = await axios.delete(
  //       `https://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/student/reservations/${resId}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  //         },
  //       },
  //     );

  //     console.log("Fetched deleted reserve:", response.data);
  //   } catch (errror) {
  //     console.error("Error when fetching res", error);
  //     setError("Failed to load reservations");
  //   }
  // };
  const [showPopup, setShowPopup] = useState(false);

  const handleCancelClick = () => {
    setShowPopup(true);
  };

  const handleConfirmCancel = () => {
    // Add logic to cancel the booking here
    setShowPopup(false);
    // deleteReservation();
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      <tr className="bg-[#6D7AA4] border-[#3C4D71] border-[2px] text-center">
        <td className="flex flex-row items-center justify-center h-full ">
          <img src={itemData.imageUrl} className="h-[60px] w-[60px]" alt="item-pic" />
          <p>{itemData.itemName}</p>
        </td>
        <td className=" ">{itemData.lastMaintenanceOn}</td>
        <td className=" ">{itemData.lastMaintenanceBy}</td>
        <td className=" ">{itemData.itemModel}</td>

        <td className=" ">
          <button className="bg-[#03ADE5] text-white rounded-md p-1 shadow-sm" onitemModelClick={handleCancelClick}>
            CANCEL
          </button>
        </td>
      </tr>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-md">
            <h2 className="mb-4 text-black">Are you sure you want to cancel?</h2>
            <div className="flex justify-around">
              <button className="bg-red-500 text-white rounded-md px-3" onClick={handleConfirmCancel}>
                Yes
              </button>
              <button className="bg-gray-300 text-black rounded-md px-3" onClick={handleClosePopup}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClerkItemRow;
