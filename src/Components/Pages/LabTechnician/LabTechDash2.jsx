import repairstatImg from "../../../styles/images/repairstat.png";
import repaireqImg from "../../../styles/images/repaireq.png";
import Card from "../../Card.jsx";
import React, { useState } from "react";
import laptopImg from "../../../styles/images/laptop.png";
import TableTop from "../../TableTop.jsx";
import TableTppLab from "../../TableTppLab.jsx";

const LabTechDash2 = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedItems, setSelectedItems] = useState(null);

  const images = {
    status: repairstatImg,
    requests: repaireqImg,
  };

  const lists = {
    status: [
      {
        reqimg: laptopImg,
        itmname: "Lenovo Legion LOQ",
        serial: "FOC1234X56Y",
        lab: "ICE Lab",
        description: "Buttons are not working",
        foundDate: "21/08/2024",
      },
      {
        reqimg: laptopImg,
        itmname: "Lenovo Legion LOQ",
        serial: "FOC1234X56Y",
        lab: "ICE Lab",
        description: "Buttons are not working",
        foundDate: "21/08/2024",
      },
      {
        reqimg: laptopImg,
        itmname: "Lenovo Legion LOQ",
        serial: "FOC1234X56Y",
        lab: "ICE Lab",
        description: "Buttons are not working",
        foundDate: "21/08/2024",
      },
    ],
    requests: [
      {
        reqimg: laptopImg,
        itmname: "Lenovo Legion LOQ",
        serial: "FOC1234X56Y",
        lab: "ICE Lab",
        description: "Buttons are not working",
        foundDate: "21/08/2024",
      },
      {
        reqimg: laptopImg,
        itmname: "Lenovo Legion LOQ",
        serial: "FOC1234X56Y",
        lab: "ICE Lab",
        description: "Buttons are not working",
        foundDate: "21/08/2024",
      },
      {
        reqimg: laptopImg,
        itmname: "Lenovo Legion LOQ",
        serial: "FOC1234X56Y",
        lab: "ICE Lab",
        description: "Buttons are not working",
        foundDate: "21/08/2024",
      },
    ],
  };

  const handleCardClick = (category) => {
    setSelectedCard(category);
    setSelectedItems(lists[category]);
  };
  return (
    <div className="h-[600px] w-full  bg-[#202652]  flex justify-center items-center relative">
      {selectedCard ? (
        <TableTppLab onClick={() => setSelectedCard(null)} items={selectedItems} />
      ) : (
        <div className="flex flex-row gap-10 items-center justify-center ">
          {Object.keys(lists).map((Name, index) => (
            <Card
              key={index}
              imgsrc={images[Name]}
              altname={Name}
              Children={Name.toUpperCase()}
              onClick={() => handleCardClick(Name)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LabTechDash2;
