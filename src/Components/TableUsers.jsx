import React from "react";

import ItemRowUsers from "./ItemRowUsers";

const TableUsers = ({ userData }) => {
  console.log(userData);
  return (
    <div className="w-[999px] h-[496px] bg-[#3C4D71] flex-row flex items-center justify-center gap-4 mt-10 text-white relative rounded-[60px]">
      {/* <button className="absolute right-8 top-8 p-2 bg-[#03ADE5] rounded-md">BACK</button> */}
      <table className="table-auto w-[744px]  border-collapse">
        <tr className="bg-[#6D7AA4] shadow-lg border-[#3C4D71] border-[1px] text-center h-[50px]">
          <th className="">USER ID</th>

          <th className="">FIRST NAME</th>
          <th className=" ">LAST NAME</th>
          <th className=" ">CONTACT NO</th>
          <th className=" ">EMAIL</th>
          <th className=" ">ROLE</th>
        </tr>

        {userData.map((user, index) => (
          <ItemRowUsers
            key={index}
            userID={user.userId}
            firstName={user.firstName}
            lastName={user.lastName}
            contactNo={user.contactNumber}
            email={user.email}
            role={user.role}
          />
        ))}
      </table>
    </div>
  );
};

export default TableUsers;
