import React, { useState } from "react";
import "../../styles/css/Studentselect.css";
import laptop from "../../styles/images/laptop.png";
import router from "../../styles/images/router.png";
import keyboard from "../../styles/images/keyboard.png";
import microcontroller from "../../styles/images/microcontroller.png";
import projector from "../../styles/images/projector.png";
import mouse from "../../styles/images/mouse.png";
import { Slot } from "../Slot.jsx";
import LabItems from "../LabItems.jsx";
import Headers from "../TableHeaders.jsx";

export const StudentSelect = () => {
  const [expandedBox, setExpandedBox] = useState(null);

  const columns = ["ITEM NAME", "SERIAL NO", "LAB", "RETURN DATE"];
  const lists = {
    laptop: [
      <LabItems
        reqimg={laptop}
        itmname="4-Port WiFi Router (Cisco SRP541W) "
        serial="FOC1234X56Y"
        lab="Network Lab"
        wantButton={true}
        wantReturnDate={true}
        wantDateReq={false}
      />,
      <LabItems
        reqimg={laptop}
        itmname="4-Port WiFi Router (Cisco SRP541W) "
        serial="FOC1234X56Y"
        lab="Network Lab"
        wantButton={true}
        wantReturnDate={true}
        wantDateReq={false}
      />,
      <LabItems
        reqimg={laptop}
        itmname="4-Port WiFi Router (Cisco SRP541W) "
        serial="FOC1234X56Y"
        lab="Network Lab"
        wantButton={true}
        wantReturnDate={true}
        wantDateReq={false}
      />,
    ],
    router: ["Router 1", "Router 2", "Router 3"],
    projector: ["Projector 1", "Projector 2", "Projector 3"],
    microcontroller: ["Microcontroller 1", "Microcontroller 2", "Microcontroller 3"],
    keyboard: ["Keyboard 1", "Keyboard 2", "Keyboard 3"],
    mouse: ["Mouse 1", "Mouse 2", "Mouse 3"],
  };

  const renderContent = (boxType) => {
    if (expandedBox === boxType) {
      return (
        <div>
          <div className="absolute left-8 top-12 font-josefin-sans tracking-[0.06rem] text-2xl font-medium text-white">
            LAPTOPS
          </div>
          <button
            className="right-8 bg-[#6D7AA4] top-12 absolute rounded-lg  text-[14px] font-josefin-sans font-normal p-1 shadow-lg"
            onClick={() => setExpandedBox(null)}
          >
            &lt;BACK
          </button>
          <Headers columns={columns} width="570px" top="80px" left="220px" />
          <Slot lists={lists} boxType={boxType} />
        </div>
      );
    } else {
      let imageSrc, altText;
      switch (boxType) {
        case "laptop":
          imageSrc = laptop;
          altText = "laptop";
          break;
        case "router":
          imageSrc = router;
          altText = "router";
          break;
        case "projector":
          imageSrc = projector;
          altText = "projector";
          break;
        case "microcontroller":
          imageSrc = microcontroller;
          altText = "microcontroller";
          break;
        case "keyboard":
          imageSrc = keyboard;
          altText = "keyboard";
          break;
        case "mouse":
          imageSrc = mouse;
          altText = "mouse";
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
    <div className="h-[800px] w-full  bg-[#202652]  flex justify-center items-center relative">
      <div className="flex flex-wrap justify-between w-[1000px] gap-[20px] ">
        {Object.keys(lists).map(
          (boxType) =>
            (expandedBox === null || expandedBox === boxType) && (
              <div
                key={boxType}
                className={`w-[277px] h-[238px] bg-[#3C4D71] rounded-[60px] flex flex-col justify-center items-center cursor-pointer  ease z-0 drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] text-white    ${
                  expandedBox === boxType ? "w-[999px] h-[496px]  z-20  " : "hover:scale-[1.1] transition duration-200"
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
