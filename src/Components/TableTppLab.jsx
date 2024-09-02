import React from "react";
import laptop from "../styles/images/laptop.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import ItemRow from "./ItemRow";
import ItemLab from "./ItemLab";

const TableTppLab = ({ reqimg, itmname, serial, lab, onClick, items }) => {
  const [returnDate, setReturnDate] = useState("");
  const navigate = useNavigate();
  const handleRequest = () => {
    const currentDate = new Date().toISOString().split("T")[0];
    navigate("/request", {
      state: {
        reqimg,
        itmname,
        serial,
        lab,

        datereq: currentDate,
        returnDate,
      },
    });
  };
  return (
    <div className="w-[999px] h-[496px] bg-[#3C4D71] flex-row flex items-center justify-center gap-4 mt-10 text-white relative rounded-[60px]">
      <p></p>
      <button className="absolute right-8 top-8 p-2 bg-[#03ADE5] rounded-md" onClick={onClick}>
        BACK
      </button>
      <table className="table-auto w-[744px]  border-collapse">
        <tr className="bg-[#6D7AA4] shadow-lg border-[#3C4D71] border-[1px] text-center h-[50px]">
          <th className="">ITEM NAME</th>

          <th className="">SERIAL NO</th>
          <th className=" ">LAB</th>
          <th className=" ">RETURN DATE</th>
          <th className=" ">DESCRIPTION</th>
          <th></th>
        </tr>

        {items.map((item, index) => (
          <ItemLab
            key={index}
            imgsrc={item.reqimg}
            itmname={item.itmname}
            lab={item.lab}
            serial={item.serial}
            description={item.description}
            foundDate={item.foundDate}
          />
        ))}
      </table>
    </div>
  );
};

export default TableTppLab;
