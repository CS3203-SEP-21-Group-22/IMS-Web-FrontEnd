import React from "react";
import { useLocation } from "react-router-dom";
import TableUsers from "./Admin/TableUsers";

export const UserProfiles = () => {
  const location = useLocation();
  const users = location.state?.users || [];
  console.log(users);
  return (
    <div className="h-full w-full bg-[#202652]  flex relative flex-col items-center justify-center p-10">
      <TableUsers userData={users} />
    </div>
  );
};
