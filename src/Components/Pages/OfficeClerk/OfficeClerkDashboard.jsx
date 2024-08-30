import { useState } from "react";
import { Link } from "react-router-dom";
import checklist from "../../../styles/images/checklist.png";
import cardreserve from "../../../styles/images/cardreserve.png";
import laptop from "../../../styles/images/laptop.png";
import Card from "../../Card";
import LargeCard from "../../LargeCard";
import LabItems from "../../LabItems";

const OfficeClerkDashboard = () => {
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
      <div className="h-[600px] w-full bg-gradient-to-b from-[#202652] to-[#E3EDF8] flex relative justify-center">
        <div className="h-full w-[1000px] grid grid-cols-3 gap-5 justify-center ">
          {!expandedBox1 && !expandedBox2 ? (
            <>
              <div className="flex justify-center items-center">
                <Link to="/aprove-list-request" className="flex justify-center items-center">
                    <Card imgsrc={checklist} altname="checklist" Children="APPROVE REQUESTS" onClick={toggleBox1} />
                </Link>
              </div>
              <Link to="/student-select" className="flex justify-center items-center">
                <Card imgsrc={cardreserve} altname="cardreserve" Children="VIEW EQUIPMENTS" />
              </Link>
<<<<<<< HEAD
              <div className="flex justify-center items-center">
                <Card Children="ASSIGN TECHNICIANS" onClick={toggleBox2} />
              </div>
=======
              <Link to="/assign-technicians" className="flex justify-center items-center">
                <Card Children="ASSIGN TECHNICIANS" onClick={toggleBox2} />
              </Link>
>>>>>>> origin/Ameera
              <div className="flex justify-center items-center">
                <Card Children="VIEW MAINTANCES HISTORY" onClick={toggleBox2} />
              </div>
              <div className="flex justify-center items-center">
                <Card Children="VIEW MAINTANENCE STATUS" onClick={toggleBox2} />
              </div>
              <div className="flex justify-center items-center">
                <Card Children="VIEW APPROVAL HISTORY" onClick={toggleBox2} />
              </div>
            </>
          ) : expandedBox1 ? (
            <div className="flex justify-center items-center w-full col-span-3">
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

}

export default OfficeClerkDashboard