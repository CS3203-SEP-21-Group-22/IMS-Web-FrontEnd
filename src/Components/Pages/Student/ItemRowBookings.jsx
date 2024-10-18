import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ItemRowBookings = ({ lab, itmname, imgsrc, startDate, endDate, resId, itmModel, status }) => {
  const [error, setError] = useState(null);
  const deleteReservation = async () => {
    setError(null);
    try {
      const response = await axios.delete(
        `https://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/student/reservations/${resId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );

      console.log("Fetched deleted reserve:", response.data);
    } catch (errror) {
      console.error("Error when fetching res", error);
      setError("Failed to load reservations");
    }
  };
  const [showPopup, setShowPopup] = useState(false);

  const handleCancelClick = () => {
    setShowPopup(true);
  };

  const handleConfirmCancel = () => {
    // Add logic to cancel the booking here
    setShowPopup(false);
    deleteReservation();
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const formattedStartDate =
    startDate instanceof Date ? startDate.toISOString().split("T")[0] : new Date(startDate).toISOString().split("T")[0];
  const formattedEndDate =
    endDate instanceof Date ? endDate.toISOString().split("T")[0] : new Date(endDate).toISOString().split("T")[0];

  return (
    <>
      <tr className="bg-[#6D7AA4] border-[#3C4D71] border-[2px] text-center">
        <td className="flex flex-row items-center justify-center h-full ">
          <img src={imgsrc} className="h-[60px] w-[60px]" alt="item-pic" />
          <p>{itmname}</p>
        </td>
        <td className=" ">{itmModel}</td>
        <td className=" ">{lab}</td>
        <td className=" ">
          <div className="flex justify-center items-center">{formattedStartDate}</div>
        </td>
        <td className=" ">
          <div className="flex justify-center items-center">{formattedEndDate}</div>
        </td>
        <td>{status}</td>
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

export default ItemRowBookings;
