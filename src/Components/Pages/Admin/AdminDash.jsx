import React, { useState } from "react";
import { Link } from "react-router-dom";
import checklist from "../../../styles/images/checklist.png";
import cardreserve from "../../../styles/images/cardreserve.png";
import laptop from "../../../styles/images/laptop.png";
import Card from "../../Card";
import LargeCard from "../../LargeCard";
import LabItems from "../../LabItems";

const AdminDashboard = () => {
  const [expandedBox1, setExpandedBox1] = useState(false);
  const [expandedBox2, setExpandedBox2] = useState(false);

  const toggleBox1 = () => {
    setExpandedBox1(!expandedBox1);
    if (expandedBox2) setExpandedBox2(false); // Ensure only one box is expanded at a time
  };

  const toggleBox2 = () => {
    setExpandedBox2(!expandedBox2);
    if (expandedBox1) setExpandedBox1(false); // Ensure only one box is expanded at a time
  };

  const columns = ["ITEM NAME", "SERIAL NO", "LAB", "DATE REQUESTED"];

  const reqItems = [
    <LabItems
      reqimg={laptop}
      itmname="LAPTOP"
      serial="123S9X9"
      lab="ICE LAB"
      datereq="08/25/2024"
      wantButton={false}
    />,
    <LabItems
      reqimg={laptop}
      itmname="LAPTOP"
      serial="123S9X9"
      lab="ICE LAB"
      datereq="08/25/2024"
      wantButton={false}
    />,
    <LabItems
      reqimg={laptop}
      itmname="LAPTOP"
      serial="123S9X9"
      lab="ICE LAB"
      datereq="08/25/2024"
      wantButton={false}
    />,
  ];

  return (
    <div className="h-[600px] w-full bg-gradient-to-b from-[#202652] to-[#E3EDF8] flex relative ">
      <div className="h-full w-full flex justify-center items-center ">
      <div className="h-full w-[1000px] grid grid-cols-2 gap-3">
        {!expandedBox1 && !expandedBox2 ? (
          <>
        
            <div className="flex justify-center items-center ">
              <Link to="/user-profiles">
              <Card imgsrc={checklist} altname="checklist" Children="VIEW USER PROFILES" onClick={toggleBox1} />
              </Link>
            </div>
            <Link to="/view-labs" className="flex justify-center items-center ">
              <Card imgsrc={cardreserve} altname="cardreserve" Children="VIEW LABS" />
            </Link>
            
          </>
        ) : expandedBox1 ? (
          <div className="flex justify-center items-center w-full col-span-2">
            <LargeCard onClick={toggleBox1} Children={reqItems} columns={columns} />
          </div>
        ) : (
          <div className="flex justify-center items-center w-full col-span-2">
            <LargeCard onClick={toggleBox2} Children={reqItems} columns={columns} />
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
