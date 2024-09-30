import React from "react";

const ItemRowUsers = ({ userID, firstName, lastName, contactNo, email, role }) => {
  return (
    <>
      <tr className="bg-[#6D7AA4] border-[#3C4D71] border-[2px] text-center">
        <td className=" ">{userID}</td>
        <td className=" ">{firstName}</td>
        <td className=" ">{lastName}</td>
        <td className=" ">{contactNo}</td>
        <td className=" ">{email}</td>
        <td className=" ">{role}</td>
      </tr>
    </>
  );
};

export default ItemRowUsers;
