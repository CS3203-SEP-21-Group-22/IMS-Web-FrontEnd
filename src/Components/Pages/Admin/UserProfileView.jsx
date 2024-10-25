import React from "react";
import { useLocation } from "react-router-dom";
import TableUsers from "./TableUsers";

export const UserProfiles = () => {
  const location = useLocation();
  const users = location.state?.users || [];
  console.log(users);
  return (
    <div className="h-full w-full bg-[#202652]  flex relative flex-col items-center ">
      <div className="text-white text-[25px] font-semibold tracking-[0.06rem] pt-4">CURRENT USERS</div>
      <TableUsers userData={users} />
    </div>
  );
};
