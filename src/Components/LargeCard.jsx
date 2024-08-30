import React, { Children, useState } from "react";
import TableHeaders from "./TableHeaders";

function Card  ({ onClick, Children, columns}) {
  // const [huta,setHuta] = useState(huta1)
  return (
    <div className="w-[900px] h-[498px] bg-[#B3C3E3] rounded-[60px] mx-6 flex flex-col justify-center items-center relative cursor-pointer ">
      <button
        className="right-8 bg-[#D4E5F6] top-12 absolute rounded-lg  text-[14px] font-josefin-sans font-normal p-1 shadow-lg"
        onClick={onClick}
      >
        &lt;BACK
      </button>
<<<<<<< HEAD

      <TableHeaders columns={columns} top="105px" width="640px" left="182px" paddingLeft="50px" />
=======
      {/* {huta ? <h1>huta</h1> : <h1>aulk ne</h1>}
      <button onClick={()=>{
        setHuta(!huta)
      }}>clicke me </button> */}
      <TableHeaders columns={columns} top="105px" width="650px" left="172px" />
>>>>>>> origin/Ameera
      <div className="mt-10">{Children}</div>
    </div>
  );
};

export default Card;
