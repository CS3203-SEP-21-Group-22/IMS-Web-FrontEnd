import React, { useState } from "react";
import axios from "axios";
import ConfirmationModal from "../../ConfirmationModal";
import ToastNotification from "../../ToastNotification";

const LabCard = ({ imgsrc, altname, labData, imgWidth = "200px", imgHeight = "200px", onLabDelete }) => {
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showToast, setShowToast] = useState(false); // Add state for toast notification
  const [editLabData, setEditLabData] = useState({
    labName: labData.labName,
    labCode: labData.labCode,
    imageURL: labData.imageURL,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setEditLabData((prev) => ({ ...prev, [name]: value }));
  };

  const deleteLab = async () => {
    setError(null);
    try {
      const response = await axios.delete(`${process.env.REACT_APP_BACKEND_API_URL}api/admin/labs/${labData.labId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      console.log("Deleted lab:", response.data);

      if (onLabDelete) {
        onLabDelete(labData.labId);
      }

      // Show the toast notification and close modal
      setShowDeleteModal(false);
      setShowToast(true);

      // Hide the notification after 3 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      console.error("Error when deleting lab:", error);
      setError("Failed to delete lab");
    }
  };

  const editLab = async () => {
    setError(null);
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BACKEND_API_URL}api/admin/labs/${labData.labId}`,
        {
          labName: editLabData.labName,
          labCode: editLabData.labCode,
          imageURL: editLabData.imageURL,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );

      console.log("Edited lab:", response.data);
      setEditMode(false);

      if (onLabDelete) {
        onLabDelete(labData.labId);
      }
    } catch (error) {
      console.error("Error when editing lab:", error);
      setError("Failed to edit lab");
    }
  };

  return (
    <div className="w-[297px] h-[278px] bg-[#3C4D71] rounded-[60px] flex flex-col justify-center items-center relative cursor-pointer hover:scale-[1.1] transition duration-200 shadow-lg gap-3 p-4">
      {editMode ? (
        <>
          <input
            type="text"
            name="labName"
            value={editLabData.labName}
            onChange={handleInput}
            placeholder="Enter Lab Name"
            className="bg-[#3C4D71] rounded-[30px] text-center text-[20px] shadow-lg shadow-[#32405e] text-white"
          />
          <input
            type="text"
            name="labCode"
            value={editLabData.labCode}
            onChange={handleInput}
            placeholder="Enter Lab Code"
            className="bg-[#3C4D71] text-center text-[20px] shadow-lg shadow-[#32405e]  rounded-[30px] text-white"
          />
          <input
            type="text"
            name="imageURL"
            value={editLabData.imageURL}
            onChange={handleInput}
            placeholder="Enter Lab Image URL"
            className="bg-[#3C4D71] text-center text-[20px] shadow-lg shadow-[#32405e] rounded-[30px] text-white"
          />
          <div className="px-4 bg-[#00ABE4] rounded-[30px] cursor-pointer text-white" onClick={editLab}>
            SAVE
          </div>
          <div className="px-4 bg-red-500 rounded-[30px] cursor-pointer text-white" onClick={() => setEditMode(false)}>
            CANCEL
          </div>
        </>
      ) : (
        <>
          <img
            className="object-contain"
            src={labData.imageUrl}
            alt={altname}
            style={{ width: imgWidth, height: imgHeight }}
          />
          <p className="font-josefin-sans font-normal text-[20px] text-white leading-[20px] tracking-[0.06em]">
            {labData.labName}
          </p>
          <div className="px-4 bg-[#00ABE4] rounded-[30px] cursor-pointer text-white" onClick={() => setEditMode(true)}>
            EDIT
          </div>
          <div
            className="px-4 bg-[#00ABE4] rounded-[30px] cursor-pointer text-white"
            onClick={() => setShowDeleteModal(true)}
          >
            DELETE
          </div>
        </>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <ConfirmationModal
          onConfirm={deleteLab}
          onCancel={() => setShowDeleteModal(false)}
          message="Are you sure you want to delete this lab?"
        />
      )}

      {/* Toast Notification */}
      {showToast && <ToastNotification message="Lab deleted successfully" onClose={() => setShowToast(false)} />}
    </div>
  );
};

export default LabCard;
