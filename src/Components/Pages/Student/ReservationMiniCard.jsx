import React, { useState } from "react";
import mouse from "../../../../src/styles/images/mouse.png";
import axios from "axios";

const ReservationMiniCard = ({ reservationData, onDelete }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const formattedStartDate =
    reservationData.startDate instanceof Date
      ? reservationData.startDate.toISOString().split("T")[0]
      : new Date(reservationData.startDate).toISOString().split("T")[0];
  const formattedEndDate =
    reservationData.endDate instanceof Date
      ? reservationData.endDate.toISOString().split("T")[0]
      : new Date(reservationData.endDate).toISOString().split("T")[0];

  const deleteReservations = async (reservationId) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(
        `http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/student/reservations/${reservationId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      onDelete(reservationId);
      setShowConfirmation(false);
    } catch (error) {
      console.error("Error when deleting reservation", error);
      setError("Failed to cancel reservation");
    } finally {
      setLoading(false);
    }
  };

  const handleCancelClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    deleteReservations(reservationData.reservationId);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="w-[387px] bg-[#3C4D71] rounded-[20px] flex p-2 flex-row items-center justify-center hover:scale-105 transition duration-200 relative">
      <div className="w-[170px]  flex flex-col items-center justify-center bg-[#3C4D71] shadow-lg shadow-[#2e3a56] rounded-[20px] p-2 ">
        <img src={reservationData.imageUrl} alt="mouse" className="mb-4" />
        <p className="text-white text-center text-[20px] font-semibold">{reservationData.itemName}</p>
      </div>

      <div className="flex flex-col justify-center text-white text-[16px] pl-6">
        <p>MODEL: {reservationData.itemModel}</p>
        <p>LAB: {reservationData.labName}</p>
        <p>START: {formattedStartDate}</p>
        <p>END: {formattedEndDate}</p>
        <p>STATUS: {reservationData.status}</p>

        <button className="bg-red-500 rounded-[5px] w-[100px] mt-2" onClick={handleCancelClick}>
          CANCEL
        </button>
      </div>

      {showConfirmation && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#3C4D71] p-2 rounded-lg shadow-lg text-center">
            <p className="text-white mb-4">Are you sure you want to cancel this reservation?</p>
            <div className="flex justify-center">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mr-4"
                onClick={handleConfirm}
                disabled={loading}
              >
                {loading ? "Cancelling..." : "Yes"}
              </button>
              <button className="bg-[#03ADE5] px-4 py-2 rounded text-white" onClick={handleCancel}>
                No
              </button>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationMiniCard;
