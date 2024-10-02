import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import ItemMiniCard from "./ItemMiniCard";

export const ClerkItems = () => {
  const location = useLocation();
  const equipmentId = location.state.equipmentId;
  const itemData = location.state.itemData;
  console.log(itemData);
  return (
    <div className="h-svh w-full bg-[#202652] flex relative flex-col items-center justify-center p-10">
      {itemData.map((item, index) => (
        <ItemMiniCard itemData={item} key={index} />
      ))}
    </div>
  );
};
