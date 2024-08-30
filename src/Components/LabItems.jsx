import React from "react";
import Column from "./Column";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RepairRequest = ({
  reqimg,
  itmname,
  serial,
  lab,
  datereq,
  wantButton,
  wantDateReq,
  wantReturnDate,
  wantHarddatereq,
  width = "744px",
}) => {
  const navigate = useNavigate();
  const [returnDate, setReturnDate] = useState("");

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
    <div
      className=" h-20 bg-[#03ADE5] rounded-[10px] shadow-sm flex flex-row justify-evenly items-center my-2"
      style={{ width: width }}
    >
      <div className="flex justify-center items-center mr-12 w-[67px] ">
        <img className="h-14 w-14 ml-4 " src={reqimg} alt="router" />
      </div>
      <Column textContent={itmname} />
      <Column textContent={serial} />
      <Column textContent={lab} />
      {wantHarddatereq && <Column textContent={datereq} />}
      {wantDateReq && <Column textContent={new Date().toISOString().split("T")[0]} />}

      {wantReturnDate && (
        <div className="flex justify-center items-center">
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="w-[140px] h-[35px] bg-[#FFFFFF] border border-gray-300 rounded-md text-center"
          />
        </div>
      )}

      {wantButton && (
        <button
          className="w-[90px] h-[47px] bg-[#B3C3E3] shadow rounded-[10px] text-[#202652] font-josefin-sans font-[500] ml-5 mr-2 "
          onClick={handleRequest}
        >
          ACCEPT
        </button>
      )}
    </div>
  );
};

export default RepairRequest;
