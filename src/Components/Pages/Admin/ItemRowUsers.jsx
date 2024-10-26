import React, { useState } from "react";
import axios from "axios";

const ItemRowUsers = ({ userID, firstName, lastName, contactNumber, email, role }) => {
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [updatedRole, setUpdatedRole] = useState(role);

  const handleRoleChange = (e) => {
    setUpdatedRole(e.target.value);
  };

  const editUserRole = async () => {
    setError(null);
    try {
      const response = await axios.patch(
        `https://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/admin/users/${userID}?role=${updatedRole}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );

      console.log("Updated user role:", response.data);
      setEditMode(false);
    } catch (error) {
      console.error("Error updating role:", error);
      setError("Failed to update role");
    }
  };

  const cancelEdit = () => {
    setEditMode(false);
    setUpdatedRole(role);
  };

  return (
    <tr className="bg-[#6D7AA4] text-center hover:scale-[1.05] duration-200 transition">
      {editMode ? (
        <>
          <td>{userID}</td>
          <td className="w-36">{firstName}</td>
          <td className="w-36">{lastName}</td>
          <td className="w-36">{contactNumber}</td>
          <td className="w-36">{email}</td>
          <td className="w-36">
            <select
              name="role"
              value={updatedRole}
              onChange={handleRoleChange}
              className="bg-[#6D7AA4] text-center shadow-lg shadow-[#535d7c] py-2 w-32"
            >
              <option value="Clerk">Clerk</option>
              <option value="Technician">Technician</option>
              <option value="Student">Student</option>
              <option value="AcademicStaff">AcademicStaff</option>
              <option value="SystemAdmin">SystemAdmin</option>
            </select>
          </td>
          <td className="py-2">
            <button onClick={editUserRole} className="bg-[#00ABE4] p-2 rounded text-white mr-2">
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
          <td className="w-[200PX] bg-[#6D7AA4] ">{userID}</td>
          <td className="w-[200PX] bg-[#657097]">{firstName}</td>
          <td className="w-[200PX] bg-[#6D7AA4]">{lastName}</td>
          <td className="w-[200PX] bg-[#657097]">{contactNumber}</td>
          <td className="w-[200PX] bg-[#6D7AA4]">{email}</td>
          <td className="w-[200PX] bg-[#657097]">{role}</td>
          <td className="p-2 px-4 cursor-pointer" onClick={() => setEditMode(true)}>
            <button className="bg-[#00ABE4] p-2 rounded">EDIT</button>
          </td>
        </>
      )}
    </tr>
  );
};

export default ItemRowUsers;
