import React, { useState, useEffect } from "react";
import axios from "axios";
import LabReservationsPieChart from "./LabReservationsPieChart";
import MonthlyEquipmentBarChart from "./MonthlyEquipmentBarChart";
import MonthlyReservationsBarChart from "./MonthlyReservationsBarChart";
import MostReservedEquipment from "./MostReservedEquipment";
import LoadingSpinner from "../../LoadingSpinner";
import YearMonthSelector from "./YearMonthSelector";

const AdminAnalytics = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [labs, setLabs] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [selectedLabId, setSelectedLabId] = useState("");
  const [selectedEquipmentId, setSelectedEquipmentId] = useState("");
  const [analyticsData, setAnalyticsData] = useState([]);
  const [equipmentData, setEquipmentData] = useState([]);
  const [monthlyCounts, setMonthlyCounts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [mostReserved, setMostReserved] = useState([]);

  // New states for year and month selection
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [showDateSelection, setShowDateSelection] = useState(false);

  console.log("Equipment Data:", equipmentData);

  // Fetch labs
  const fetchLabs = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}api/user/labs`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setLabs(response.data);
    } catch (error) {
      console.error("Error fetching labs", error);
      setError("Failed to load labs");
    }
  };

  // Fetch equipment based on selected lab
  const fetchEquipments = async (labId) => {
    setLoading(true);
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}api/user/equipments?labId=${labId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setEquipments(response.data);
    } catch (error) {
      console.error("Error fetching equipments", error);
      setError("Failed to load equipments");
    } finally {
      setLoading(false);
    }
  };

  const fetchAnalytics = async (year, month) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API_URL}api/admin/reservations?year=${year}&month=${month}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      setAnalyticsData(response.data);

      const totalReservations = response.data.reduce((acc, item) => acc + item.count, 0);
      setTotalCount(totalReservations);

      const maxCount = Math.max(...response.data.map((item) => item.count));
      const mostReservedItems = response.data.filter((item) => item.count === maxCount);
      setMostReserved(mostReservedItems);
    } catch (error) {
      console.error("Error fetching analytics data", error);
      setError("Failed to load analytics");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLabs();
    fetchAnalytics(selectedYear, selectedMonth); // Automatically fetch analytics for the current month and year on component mount
  }, [selectedYear, selectedMonth]);

  useEffect(() => {
    if (selectedLabId) {
      fetchEquipments(selectedLabId);
    } else {
      setEquipments([]);
      setSelectedEquipmentId("");
    }
  }, [selectedLabId]);

  useEffect(() => {
    if (selectedEquipmentId) {
      const fetchEquipmentData = async (equipmentId) => {
        setLoading(true);
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_API_URL}api/admin/reservations/${equipmentId}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              },
            },
          );
          setEquipmentData(response.data);

          const formattedData = response.data.map((item) => ({
            month: item.month,
            count: item.count,
          }));
          setMonthlyCounts(formattedData);
        } catch (error) {
          console.error("Error fetching equipment data", error);
          setError("Failed to load equipment data");
        } finally {
          setLoading(false);
        }
      };
      fetchEquipmentData(selectedEquipmentId);
    } else {
      setMonthlyCounts([]);
    }
  }, [selectedEquipmentId]);

  // Handler for fetching data based on the selected year and month
  const handleDateSelection = () => {
    fetchAnalytics(selectedYear, selectedMonth);
    setShowDateSelection(false); // Hide the date selection inputs after fetching
  };

  return (
    <div className="min-h-screen w-full bg-[#202652] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center  h-screen">
        <p className="text-white text-[25px] font-semibold p-4">Admin Analytics Dashboard</p>
        <p className="text-white text-[25px] font-semibold p-4">Stats of the Month</p>

        <div className="flex flex-row items-center justify-center ">
          <YearMonthSelector
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
          />
          <LabReservationsPieChart analyticsData={analyticsData} totalCount={totalCount} />

          <MostReservedEquipment mostReserved={mostReserved} />
        </div>
      </div>

      <div className="flex flex-row justify-center pb-20 ">
        <div className=" flex flex-col items-center">
          <h2 className="text-white text-[20px] font-semibold mb-[100px]">Monthly Reservations Bar Chart</h2>
          <MonthlyReservationsBarChart />
        </div>

        <div className="flex flex-col items-center  ">
          <h2 className="text-white text-[20px] font-semibold mb-4">Monthly Equipment Data</h2>
          <div className="flex flex-row items-center justify-center bg-[#3C4D71] rounded-[40px] w-[400px] mb-6">
            <div className="flex flex-row items-center justify-center bg-[#3C4D71] rounded-[40px] w-[300px] p-4 ">
              <select
                onChange={(e) => setSelectedLabId(e.target.value)}
                value={selectedLabId}
                className="bg-[#3C4D71] rounded-l-[30px] text-center text-[20px] shadow-lg shadow-[#252f44] text-white"
              >
                <option value="">Select Lab</option>
                {labs.map((lab) => (
                  <option key={lab.labId} value={lab.labId}>
                    {lab.labName}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-row items-center justify-center bg-[#3C4D71] rounded-[40px] w-[300px] p-4 ">
              <select
                onChange={(e) => setSelectedEquipmentId(e.target.value)}
                value={selectedEquipmentId}
                disabled={!selectedLabId}
                className={`bg-[#3C4D71] rounded-r-[30px] text-center text-[20px] shadow-lg shadow-[#252f44] text-white ${
                  !selectedLabId ? "cursor-not-allowed" : ""
                }`}
              >
                <option value="">Select Equipment</option>
                {equipments.map((equipment) => (
                  <option key={equipment.equipmentId} value={equipment.equipmentId}>
                    {equipment.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {loading && <LoadingSpinner />}
          {error && <p className="text-red-400">{error}</p>}
          <MonthlyEquipmentBarChart monthlyCounts={monthlyCounts} />
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
