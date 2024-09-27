import React from "react";
import { useState } from "react";

const ItemRowBookings = ({ serial, lab, itmname, imgsrc, datereq }) => {
  const [returnDate, setReturnDate] = useState("");

  return (
    <>
      <tr className="bg-[#6D7AA4] border-[#3C4D71] border-[2px] text-center">
        <td className="flex flex-row items-center justify-center h-full ">
          <img src={imgsrc} className="h-[60px] w-[60px]" alt="item-pic" />
          <p>{itmname}</p>
        </td>
        <td className=" ">{serial}</td>
        <td className=" ">{lab}</td>
        <td className=" ">{datereq}</td>
      </tr>
    </>
  );
};

export default ItemRowBookings;
