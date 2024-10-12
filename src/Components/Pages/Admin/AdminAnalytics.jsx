import React, { useState, useEffect } from "react";
import axios from "axios";
import { BarChart } from "@mui/x-charts";
import LabReservationsPieChart from "./LabReservationsPieChart";
import MonthlyEquipmentBarChart from "./MonthlyEquipmentBarChart";
import MonthlyReservationsBarChart from "./MonthlyReservationsBarChart";
import MostReservedEquipment from "./MostReservedEquipment";

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

  // Fetch labs
  const fetchLabs = async () => {
    try {
      const response = await axios.get("http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/user/labs", {
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
      const response = await axios.get(
        `http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/user/equipments?labId=${labId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      setEquipments(response.data);
    } catch (error) {
      console.error("Error fetching equipments", error);
      setError("Failed to load equipments");
    } finally {
      setLoading(false);
    }
  };

  const fetchAnalytics = async () => {
    setLoading(true);

    // Automatically get current year and month
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Month is 0-indexed, so we add 1

    try {
      const response = await axios.get(
        `http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/admin/reservations?year=${currentYear}&month=${currentMonth}`,
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

  const fetchEquipmentData = async (equipmentId) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/admin/reservations/${equipmentId}`,
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

  useEffect(() => {
    fetchLabs();
    fetchAnalytics(); // Automatically fetch analytics for the current month and year on component mount
  }, []);

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
      fetchEquipmentData(selectedEquipmentId);
    } else {
      setMonthlyCounts([]);
    }
  }, [selectedEquipmentId]);

  return (
    <div className="min-h-screen w-svw bg-[#202652] flex flex-col items-center justify-center">
      <p className="text-white text-[25px] font-semibold p-4">Admin Analytics Dashboard</p>

      <div className="flex flex-row items-center">
        <LabReservationsPieChart analyticsData={analyticsData} totalCount={totalCount} />

        <MostReservedEquipment mostReserved={mostReserved} />
      </div>
      <div>
        <MonthlyReservationsBarChart />
      </div>

      <div className="flex flex-row items-center justify-center bg-[#3C4D71] rounded-[40px] p-4 mb-6">
        <label className="px-2 text-white">Select Lab</label>
        <select
          onChange={(e) => setSelectedLabId(e.target.value)}
          value={selectedLabId}
          className="bg-[#3C4D71] rounded-l-[30px] text-center text-[20px] shadow-lg shadow-[#32405e] text-white"
        >
          <option value="">Select Lab</option>
          {labs.map((lab) => (
            <option key={lab.labId} value={lab.labId}>
              {lab.labName}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-row items-center justify-center bg-[#3C4D71] rounded-[40px] p-4 mb-6">
        <label className="px-2 text-white">Select Equipment</label>
        <select
          onChange={(e) => setSelectedEquipmentId(e.target.value)}
          value={selectedEquipmentId}
          disabled={!selectedLabId}
          className={`bg-[#3C4D71] rounded-l-[30px] text-center text-[20px] shadow-lg shadow-[#32405e] text-white ${
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

      <div>
        <h2 className="text-white text-[20px] font-semibold py-4">Analytics Data</h2>
        {analyticsData.map((data, index) => (
          <div key={index}>
            <p>Count: {data.count}</p>
            <p>Lab Name: {data.labName}</p>
            <p>Model: {data.model}</p>
            <p>Name: {data.name}</p>
          </div>
        ))}
      </div>
      <MonthlyEquipmentBarChart monthlyCounts={monthlyCounts} />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}
    </div>
  );
};

export default AdminAnalytics;
