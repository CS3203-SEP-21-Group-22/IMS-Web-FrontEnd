import React from "react";
import laptop from "../styles/images/laptop.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

const TableTop = ({ reqimg, itmname, serial, lab }) => {
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
    <div className="w-[999px] h-[496px] bg-[#3C4D71] flex-row flex items-center justify-center gap-4 rounded-lg mt-10 text-white">
      <table className="table-auto w-[744px]  border-collapse">
        <tr className="bg-[#6D7AA4] shadow-lg border-[#3C4D71] border-[1px] text-center h-[50px]">
          <th className="">ITEM NAME</th>

          <th className="">SERIAL NO</th>
          <th className=" ">LAB</th>
          <th className=" ">RETURN DATE</th>
          <th></th>
        </tr>
        <tr className="bg-[#6D7AA4] border-[#3C4D71] border-[2px] text-center">
          <td className="flex flex-row items-center justify-center h-full ">
            <img src={laptop} className="h-[60px] w-[60px]" alt="item-pic" />
            <p>Dell XPS 15</p>
          </td>
          <td className=" ">FOC1234X56Y</td>
          <td className=" ">Network Lab</td>
          <td className=" ">
            <div className="flex justify-center items-center">
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-[140px] h-[35px] bg-[#3C4D71] text-center"
              />
            </div>
          </td>
          <td className=" ">
            <button className="bg-[#03ADE5] text-white rounded-md p-1 shadow-sm" onClick={handleRequest}>
              PICK
            </button>
          </td>
        </tr>
        <tr className="bg-[#6D7AA4] border-[#3C4D71] border-[2px] text-center">
          <td className="flex flex-row items-center justify-center h-full ">
            <img src={laptop} className="h-[60px] w-[60px]" alt="item-pic" />
            <p>Dell XPS 15</p>
          </td>
          <td className=" ">FOC1234X56Y</td>
          <td className=" ">Network Lab</td>
          <td className=" ">
            <div className="flex justify-center items-center ">
              <input
                type="date"
                value={returnDate}
                placeholder="Enter date"
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-[140px] h-[35px] bg-[#3C4D71]  text-center"
              />
            </div>
          </td>
          <td className=" ">
            <button className="bg-[#03ADE5] text-white rounded-md p-1 shadow-sm" onClick={handleRequest}>
              PICK
            </button>
          </td>
        </tr>
        <tr className="bg-[#6D7AA4] border-[#3C4D71] border-[2px] text-center">
          <td className="flex flex-row items-center justify-center h-full ">
            <img src={laptop} className="h-[60px] w-[60px]" alt="item-pic" />
            <p>Dell XPS 15</p>
          </td>
          <td className=" ">FOC1234X56Y</td>
          <td className=" ">Network Lab</td>
          <td className=" ">
            <div className="flex justify-center items-center">
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-[140px] h-[35px] bg-[#3C4D71]  text-center"
              />
            </div>
          </td>
          <td className=" ">
            <button className="bg-[#03ADE5] text-white rounded-md p-1 shadow-sm" onClick={handleRequest}>
              PICK
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TableTop;
