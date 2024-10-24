import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import checklist from "../../../styles/images/checklist.png";
import cardreserve from "../../../styles/images/cardreserve.png";
import clock from "../../../styles/images/clockk.png";
import Card from "../../Card";
import axios from "axios";

const StaffDash = () => {
  const navigate = useNavigate();

  const [reqItems, setReqItems] = useState([]);
  const [borrowedItems, setBorrowedItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchReservations = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API_URL}api/student/reservations?borrowed=false`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      setReqItems(response.data);
      navigate("/staff-reservation", { state: { reservations: response.data } });
      console.log("Fetched reqItems:", response.data);
    } catch (errror) {
      console.error("Error when fetching res", error);
      setError("Failed to load reservations");
    } finally {
      setLoading(false);
      console.log("Loading:", loading);
      console.log("BorrowedItems:", borrowedItems);
      console.log("ReqItems:", reqItems);
    }
  };
  const fetchBorrowed = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API_URL}api/student/reservations?borrowed=true`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      setBorrowedItems(response.data);
      console.log("Fetched borrowed:", response.data);
      navigate("/staff-borrowed", { state: { borrowed: response.data } });
    } catch (errror) {
      console.error("Error when fetching res", error);
      setError("Failed to load reservations");
    } finally {
      setLoading(false);
    }
  };
  const fetchLabs = async () => {
    setError(null);
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}api/user/labs`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log("Fetched labs:", response.data);
      navigate("/staff-select", { state: { labs: response.data } });
    } catch (errror) {
      console.error("Error when fetching res", error);
      setError("Failed to load reservations");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="h-svh w-full  bg-[#202652]  flex flex-col relative justify-center">
      <div className="text-white text-[25px] font-semibold tracking-[0.06rem] pt-4">STAFF DASHBOARD</div>
      <div className="h-full w-[1000px] grid grid-cols-3 gap-5">
        <>
          <div className="flex justify-center items-center">
            <Card imgsrc={checklist} altname="checklist" Children="VIEW YOUR BOOKINGS" onClick={fetchReservations} />
          </div>
          <div className="flex justify-center items-center">
            {/*to="/student-select" */}
            <Card imgsrc={cardreserve} altname="cardreserve" Children="RESERVE EQUIPMENT" onClick={fetchLabs} />
          </div>
          <div className="flex justify-center items-center">
            <Card imgsrc={clock} altname="due-items" Children="BORROWED ITEMS" onClick={fetchBorrowed} />
          </div>
        </>
      </div>
    </div>
  );
};

export default StaffDash;
