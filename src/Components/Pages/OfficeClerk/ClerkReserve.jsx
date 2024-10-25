import { useState } from "react";
import { useNavigate } from "react-router-dom";
import checklist from "../../../styles/images/checklist.png";
import cardreserve from "../../../styles/images/cardreserve.png";
import repair from "../../../styles/images/repairstat.png";
import Card from "../../Card";

import axios from "axios";

const ClerkReserve = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchRequested = async () => {
    setError(null);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API_URL}api/clerk/reservations?requested=true`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );

      navigate("/clerk-request", { state: { requests: response.data } });
      console.log("Fetched Requests:", response.data);
    } catch (errror) {
      console.error("Error when fetching res", error);
      setError("Failed to load reservations");
    }
  };

  const fetchReserved = async () => {
    setError(null);
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}api/clerk/reservations?reserved=true`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      navigate("/clerk-reserve-view", { state: { reservations: response.data } });
      console.log("Fetched Reserved:", response.data);
    } catch (errror) {
      console.error("Error when fetching res", error);
      setError("Failed to load reservations");
    }
  };

  const fetchBorrowed = async () => {
    setError(null);
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}api/clerk/reservations?borrowed=true`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      navigate("/clerk-borrowed", { state: { borrowings: response.data } });
      console.log("Fetched Borrowed:", response.data);
    } catch (errror) {
      console.error("Error when fetching res", error);
      setError("Failed to load reservations");
    }
  };

  return (
    <div className="h-lvh w-full bg-[#202652]  flex flex-col relative items-center">
      <div className="text-white text-[25px] font-semibold tracking-[0.06rem] pt-4">CHOOSE RESERVATION TYPE</div>
      <div className="h-full w-[1000px] grid grid-cols-3 gap-x-10 gap-y-0  justify-center p-10 items-center">
        <Card imgsrc={checklist} altname="checklist" Children="REQUESTED" onClick={fetchRequested} />

        <Card imgsrc={cardreserve} altname="cardreserve" Children="RESERVED" onClick={fetchReserved} />

        <Card imgsrc={repair} Children="BORROWED" onClick={fetchBorrowed} />
      </div>
    </div>
  );
};

export default ClerkReserve;
