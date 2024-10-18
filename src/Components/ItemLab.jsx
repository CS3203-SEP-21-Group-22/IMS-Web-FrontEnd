import React from "react";
import { useNavigate } from "react-router-dom";

const ItemLab = ({ serial, lab, itmname, imgsrc, foundDate, description }) => {
  const navigate = useNavigate();

  const handleRequest = () => {
    const currentDate = new Date().toISOString().split("T")[0];
    navigate("/techreq", {
      state: {
        itmname,
        serial,
        imgsrc,
        lab,
        description,
        datereq: currentDate,
        foundDate,
      },
    });
  };
  return (
    <>
      <tr className="bg-[#6D7AA4] border-[#3C4D71] border-[2px] text-center">
        <td className="flex flex-row items-center justify-center h-full ">
          <img src={imgsrc} className="h-[60px] w-[60px]" alt="item-pic" />
          <p>{itmname}</p>
        </td>
        <td className=" ">{serial}</td>
        <td className=" ">{lab}</td>
        <td className=" ">{foundDate}</td>
        <td>{description}</td>
        <td className=" ">
          <button className="bg-[#03ADE5] text-white rounded-md p-1 shadow-sm" onClick={handleRequest}>
            PICK
          </button>
        </td>
      </tr>
    </>
  );
};

export default ItemLab;
