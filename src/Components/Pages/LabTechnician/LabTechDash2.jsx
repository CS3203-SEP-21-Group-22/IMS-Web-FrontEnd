import repairstatImg from "../../../styles/images/repairstat.png";
import repaireqImg from "../../../styles/images/repaireq.png";
import Card from "../../Card.jsx";
import React, { useState } from "react";
import laptopImg from "../../../styles/images/laptop.png";
import TableTop from "../../TableTop.jsx";
import TableTppLab from "../../TableTppLab.jsx";
import axios from "axios";

const LabTechDash2 = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedItems, setSelectedItems] = useState(null);

  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

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

  const fetchMaintainenceReq = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/technician/maintenance",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );

      console.log("Fetched labs:", response.data);
    } catch (errror) {
      console.error("Error when fetching res", error);
      setError("Failed to load reservations");
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = () => {
    fetchMaintainenceReq();
  };

  return (
    <div className="h-[600px] w-full  bg-[#202652]  flex justify-center items-center relative">
      {selectedCard ? (
        <TableTppLab
          onClick={() => {
            setSelectedCard(null);
          }}
          items={selectedItems}
        />
      ) : (
        <div className="flex flex-row gap-10 items-center justify-center ">
          <Card
            imgsrc={repairstatImg}
            altname="status"
            Children="STATUS"
            onClick={() => {
              handleCardClick();
            }}
          />
          <Card
            imgsrc={repaireqImg}
            altname="request"
            Children="REQUESTS"
            onClick={() => {
              handleCardClick();
            }}
          />
        </div>
      )}
    </div>
  );
};

export default LabTechDash2;
