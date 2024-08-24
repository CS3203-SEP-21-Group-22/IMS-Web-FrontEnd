import React, {useState} from "react";
import { Link } from "react-router-dom";
import ApproveRequest from "../../Components/ApproveRequest";
import router from "../../styles/images/router.png";
import mouse from "../../styles/images/mouse.png";
import Headers from "../../Components/TableHeaders";
import TableHeaders from "../../Components/TableHeaders";
import TechAssignApprove from "../../Components/TechAssignApprove";

/* Rectangle 12 */

const TechAssign = ({onClick}) => {
    
  const columns = ["Request By","Item Name", "Serial No", "Date Requested", "due date"];
  return (
    <body class="h-screen flex items-center justify-center bg-gray-100">
    <div className="h-[496px] w-[1100px] bg-[#3C4D71] rounded-[60px] flex flex-col items-center justify-center relative content-center">
      <p className="font-josefin-sans font-normal text-[20px] text-white leading-[20px] tracking-[0.06em] absolute left-8 top-12">
        REPAIR REQUESTS
      </p>
      <Link to="/officeclerk">
      <button
        className="right-8 bg-[#D4E5F6] top-12 absolute rounded-lg  text-[14px] font-josefin-sans font-normal p-1 shadow-lg"
        onClick={onClick}
      >
        &lt;BACK
      </button>
      </Link>
      <TableHeaders columns={columns} width="839px" left="132px" top="125px" />

      <TechAssignApprove
        reqimg={router}
        itmname="4-Port WiFi Router (Cisco SRP541W) "
        serial="FOC1234X56Y"
        lab="Network Lab"
        datereq="09/07/2024"
        description="One of the antennas are broken"
      />
      <TechAssignApprove
        reqimg={mouse}
        itmname="Acer Sports Gaming Mouse "
        serial="M1102AB"
        lab="Architecture Lab"
        datereq="09/06/2024"
        description="Scroll button is damaged"
      />
    </div>
    </body>
  );
};

export default TechAssign;