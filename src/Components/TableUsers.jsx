import React from "react";

import ItemRowUsers from "./ItemRowUsers";

const TableUsers = ({ userData }) => {
  console.log(userData);
  return (
    <div className="w-[1300px] h-[696px] bg-[#3C4D71] flex-row flex items-center justify-center gap-4 mt-10 text-white relative rounded-[60px]">
      <div className="w-full h-full overflow-y-auto flex-col flex items-center justify-center p-4">
        <table className="table-auto w-[744px]  border-collapse ">
          <thead className="sticky top-0">
            <tr className="bg-[#6D7AA4] shadow-lg border-[#3C4D71] border-[1px] text-center h-[50px]">
              <th className="px-4">USER ID</th>
              <th className="px-4">FIRST NAME</th>
              <th className="px-4">LAST NAME</th>
              <th className="px-4">CONTACT NO</th>
              <th className="px-4">EMAIL</th>
              <th className="px-4">ROLE</th>
            </tr>
          </thead>
          <tbody className="">
            {userData.map((user, index) => (
              <ItemRowUsers
                key={index}
                userID={user.userId}
                firstName={user.firstName}
                lastName={user.lastName}
                contactNumber={user.contactNumber}
                email={user.email}
                role={user.role}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableUsers;
