import React, { useState } from "react";
import laptopImg from "../../../styles/images/laptop.png";
import routerImg from "../../../styles/images/router.png";
import keyboardImg from "../../../styles/images/keyboard.png";
import microcontrollerImg from "../../../styles/images/microcontroller.png";
import projectorImg from "../../../styles/images/projector.png";
import mouseImg from "../../../styles/images/mouse.png";
import Card from "../../Card.jsx";
import TableTop from "../../TableTop.jsx";

export const StudentSelect = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedItems, setSelectedItems] = useState(null);

  const images = {
    laptop: laptopImg,
    router: routerImg,
    keyboard: keyboardImg,
    microcontroller: microcontrollerImg,
    projector: projectorImg,
    mouse: mouseImg,
  };

  const lists = {
    laptop: [
      { reqimg: laptopImg, itmname: "Lenovo Legion LOQ", serial: "FOC1234X56Y", lab: "ICE Lab" },
      { reqimg: laptopImg, itmname: "Lenovo Legion LOQ", serial: "FOC1234X56Y", lab: "ICE Lab" },
      { reqimg: laptopImg, itmname: "Lenovo Legion LOQ", serial: "FOC1234X56Y", lab: "ICE Lab" },
    ],
    router: ["Router 1", "Router 2", "Router 3"],
    projector: ["Projector 1", "Projector 2", "Projector 3"],
    microcontroller: ["Microcontroller 1", "Microcontroller 2", "Microcontroller 3"],
    keyboard: ["Keyboard 1", "Keyboard 2", "Keyboard 3"],
    mouse: ["Mouse 1", "Mouse 2", "Mouse 3"],
  };

  const handleCardClick = (category) => {
    setSelectedCard(category);
    setSelectedItems(lists[category]);
  };

  return (
    <div className="h-[800px] w-full  bg-[#202652]  flex justify-center items-center relative">
      {selectedCard ? (
        <TableTop onClick={() => setSelectedCard(null)} items={selectedItems} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between w-[1000px] gap-[20px] ">
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
