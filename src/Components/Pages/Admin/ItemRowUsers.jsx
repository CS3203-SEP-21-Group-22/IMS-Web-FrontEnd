import React from "react";
import { useState } from "react";
import axios from "axios";

const ItemRowUsers = ({ userID, firstName, lastName, contactNumber, email, role }) => {
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    firstName,
    lastName,
    contactNumber,
    email,
    role,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };
  const editUser = async () => {
    setError(null);
    try {
      console.log("Updating user with data:", {
        userId: userID, // Ensure userID is correctly passed
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        contactNumber: userData.contactNumber,
        role: userData.role,
      });
      console.log(userID);

      const response = await axios.patch(
        `https://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/admin/users/${userID}`,
        {
          userId: userID,
          firstName: userData.firstName,
          lastName: userData.lastName,
          contactNumber: userData.contactNumber,
          email: userData.email,
          role: userData.role,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );

      console.log("edited user:", response.data);
      setEditMode(false);
    } catch (error) {
      console.error("Error when fetching res", error);
      setError("Failed to load reservations");
    }
  };

  const cancelEdit = () => {
    setEditMode(false);
    setUserData({ firstName, lastName, contactNumber, email, role });
  };

  return (
    <tr className="bg-[#6D7AA4] text-center hover:scale-[1.05] duration-200 transition">
      {editMode ? (
        // Edit mode: Show input fields
        <>
          <td>{userID}</td>
          <td className="w-32">
            <input
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={handleInput}
              className=" bg-[#6D7AA4] text-center shadow-lg shadow-[#535d7c] py-2 w-32 "
            />
          </td>
          <td className="w-32">
            <input
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleInput}
              className=" bg-[#6D7AA4] text-center shadow-lg shadow-[#535d7c] py-2 w-32 "
            />
          </td>
          <td className="w-32">
            <input
              type="text"
              name="contactNumber"
              value={userData.contactNumber}
              onChange={handleInput}
              className=" bg-[#6D7AA4] text-center shadow-lg shadow-[#535d7c] py-2 w-32 "
            />
          </td>
          <td className="w-32">
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInput}
              className=" bg-[#6D7AA4] text-center shadow-lg shadow-[#535d7c] py-2 w-32"
            />
          </td>
          <td className="w-32">
            <input
              type="text"
              name="role"
              value={userData.role}
              onChange={handleInput}
              className=" bg-[#6D7AA4] text-center shadow-lg shadow-[#535d7c] py-2 w-32"
            />
          </td>
          <td className="py-2">
            <button onClick={editUser} className="bg-blue-300 p-2 rounded text-white mr-2">
              SAVE
            </button>
          </td>
          {error && <td>{error}</td>}
          <td>
            <button onClick={cancelEdit} className="bg-red-500 p-2 rounded text-white">
              CANCEL
            </button>
          </td>
        </>
      ) : (
        <>
          <td className="w-32">{userID}</td>
          <td className="w-32">{firstName}</td>
          <td className="w-32">{lastName}</td>
          <td className="w-32">{contactNumber}</td>
          <td className="w-32">{email}</td>
          <td className="w-32">{role}</td>
          <td className="p-2 px-4 cursor-pointer" onClick={() => setEditMode(true)}>
            <button className="bg-blue-300 p-2 rounded">EDIT</button>
          </td>
        </>
      )}
    </tr>
  );
};

export default ItemRowUsers;
