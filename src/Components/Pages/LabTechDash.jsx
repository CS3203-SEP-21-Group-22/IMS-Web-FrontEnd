import React, { useState } from "react";
import "../../styles/css/Studentselect.css";
import repairstat from "../../styles/images/repairstat.png";
import repaireq from "../../styles/images/repaireq.png";

import { Slot } from "../Slot.jsx";

import Headers from "../TableHeaders.jsx";

import RepairList from "../RepairList.jsx";

export const LabTechDash = () => {
  const [expandedBox, setExpandedBox] = useState(null);

  const columns = ["ITEM NAME", "SERIAL NO", "LAB", "DATE REQUESTED", "DESCRIPTION"];
  const lists = {
    "VIEW REPAIR REQUESTS": [<RepairList onClick={() => setExpandedBox(null)} />],
    "VIEW REPAIR STATUSES": [<RepairList onClick={() => setExpandedBox(null)} />],
  };

  const renderContent = (boxType) => {
    if (expandedBox === boxType) {
      return (
        <div>
          <button
            className="right-8 bg-[#D4E5F6] top-12 absolute rounded-lg  text-[14px] font-josefin-sans font-normal p-1 shadow-lg"
            onClick={() => setExpandedBox(null)}
          >
            &lt;BACK
          </button>
          <Headers columns={columns} width="839px" left="132px" top="125px" />
          <Slot lists={lists} boxType={boxType} />
        </div>
      );
    } else {
      let imageSrc, altText;
      switch (boxType) {
        case "VIEW REPAIR REQUESTS":
          imageSrc = repaireq;
          altText = "repair requests";
          break;
        case "VIEW REPAIR STATUSES":
          imageSrc = repairstat;
          altText = "repair status";
          break;

        default:
          return null;
      }
      return <img src={imageSrc} alt={altText} className={boxType} />;
    }
  };

  const handleBoxClick = (boxType) => {
    if (expandedBox == null) {
      setExpandedBox(boxType);
    }
  };

  return (
    <div className="h-[800px] w-full bg-gradient-to-b from-[#202652] to-[#E3EDF8] flex justify-center items-center relative">
      <div className="flex flex-wrap justify-center gap-[40px] w-[1000px] absolute top-[140px]">
        {Object.keys(lists).map(
          (boxType) =>
            (expandedBox === null || expandedBox === boxType) && (
              <div
                key={boxType}
                className={`w-[297px] h-[278px] bg-[#3C4D71] rounded-[60px] flex flex-col justify-center items-center cursor-pointer  ease z-0 drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]  ${
                  expandedBox === boxType ? "w-[999px] h-[496px]  z-20 " : ""
                }`}
                onClick={() => handleBoxClick(boxType)}
              >
                {renderContent(boxType)}
                {expandedBox !== boxType && <p className="box-text">{boxType.toUpperCase()}</p>}
              </div>
            ),
        )}
      </div>
    </div>
  );
};
