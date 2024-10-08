import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import checklist from "../../../styles/images/checklist.png";
import cardreserve from "../../../styles/images/cardreserve.png";
import laptop from "../../../styles/images/laptop.png";
import clock from "../../../styles/images/clockk.png";
import Card from "../../Card";
import TableBookings from "../../TableBookings";
import axios from "axios";

const StudentDashboard = () => {

  const [expandedBox1, setExpandedBox1] = useState(false);
  const [expandedBox2, setExpandedBox2] = useState(false);
  const navigate = useNavigate();

  const [reqItems, setReqItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleBox1 = () => {
    setExpandedBox1(!expandedBox1);
    if (!expandedBox1) {
      fetchReservations();
    }
    if (expandedBox2) setExpandedBox2(false);
  };

  const toggleBox2 = () => {
    setExpandedBox2(!expandedBox2);
    if (!expandedBox2) {
    }
    if (expandedBox1) setExpandedBox1(false);
  };

  const fetchReservations = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/student/reservations",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      setReqItems(response.data);
      console.log("Fetched reqItems:", response.data);
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
      const response = await axios.get(`http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/user/labs`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log("Fetched labs:", response.data);
      navigate("/student-select", { state: { labs: response.data } });
    } catch (errror) {
      console.error("Error when fetching res", error);
      setError("Failed to load reservations");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="h-[600px] w-full  bg-[#202652]  flex relative justify-center">
      <div className="h-full w-[1000px] grid grid-cols-3 gap-5">
        {!expandedBox1 && !expandedBox2 ? (
          <>
            <div className="flex justify-center items-center">
              <Card imgsrc={checklist} altname="checklist" Children="VIEW YOUR BOOKINGS" onClick={toggleBox1} />
            </div>
            <div className="flex justify-center items-center">
              {/*to="/student-select" */}
              <Card imgsrc={cardreserve} altname="cardreserve" Children="RESERVE EQUIPMENT" onClick={fetchLabs} />
            </div>
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
