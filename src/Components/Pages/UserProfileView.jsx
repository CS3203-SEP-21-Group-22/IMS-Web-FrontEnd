import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TableUsers from "../TableUsers";

export const UserProfiles = () => {
  const location = useLocation();
  const users = location.state?.users || [];
  console.log(users);
  return (
    <div className="h-[600px] w-full bg-[#202652]  flex relative flex-col items-center justify-center">
      <TableUsers userData={users} />
    </div>
  );
};
