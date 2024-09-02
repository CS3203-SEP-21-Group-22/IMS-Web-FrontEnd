import React, { useState } from "react";
import { Link } from "react-router-dom";
import checklist from "../../../styles/images/checklist.png";
import cardreserve from "../../../styles/images/cardreserve.png";
import laptop from "../../../styles/images/laptop.png";
import clock from "../../../styles/images/clockk.png";
import Card from "../../Card";
import LargeCard from "../../LargeCard";
import LabItems from "../../LabItems";

const StudentDashboard = () => {
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
      datereq="09/10/2024"
      wantHarddatereq={true}
    />,
    <LabItems
      reqimg={laptop}
      itmname="LAPTOP"
      serial="123S9X9"
      lab="ICE LAB"
      datereq="09/10/2024"
      wantButton={false}
      wantHarddatereq={true}
    />,
    <LabItems
      reqimg={laptop}
      itmname="LAPTOP"
      serial="123S9X9"
      lab="ICE LAB"
      datereq="09/10/2024"
      wantButton={false}
    />,
  ];

  return (
    <div className="h-[600px] w-full  bg-[#202652]  flex relative justify-center">
      <div className="h-full w-[1000px] grid grid-cols-3 gap-5">
        {!expandedBox1 && !expandedBox2 ? (
          <>
            <div className="flex justify-center items-center">
              <Card imgsrc={checklist} altname="checklist" Children="VIEW YOUR BOOKINGS" onClick={toggleBox1} />
            </div>
            <Link to="/student-select" className="flex justify-center items-center">
              <Card imgsrc={cardreserve} altname="cardreserve" Children="RESERVE A SLOT" />
            </Link>
            <div className="flex justify-center items-center">
              <Card imgsrc={clock} altname="due-items" Children="DUE ITEMS" onClick={toggleBox2} />
            </div>
          </>
        ) : expandedBox1 ? (
          <div className="flex justify-center items-center w-full col-span-3 transition-all duration-200 ease-in-out">
            <LargeCard onClick={toggleBox1} Children={reqItems} columns={columns} />
          </div>
        ) : (
          <div className="flex justify-center items-center w-full col-span-3">
            <LargeCard onClick={toggleBox2} Children={reqItems} columns={columns} />
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
