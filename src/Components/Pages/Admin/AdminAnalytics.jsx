import React, { useState, useEffect } from "react";
import axios from "axios";
import { BarChart } from "@mui/x-charts"; // Import BarChart from MUI X

const AdminAnalytics = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [labs, setLabs] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [selectedLabId, setSelectedLabId] = useState("");
  const [selectedEquipmentId, setSelectedEquipmentId] = useState("");
  const [analyticsData, setAnalyticsData] = useState([]);
  const [equipmentData, setEquipmentData] = useState([]);
  const [year, setYear] = useState("2024");
  const [month, setMonth] = useState("11");
  const [monthlyCounts, setMonthlyCounts] = useState([]);

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

  // Fetch analytics data based on year and month
  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/admin/reservations?year=${year}&month=${month}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      setAnalyticsData(response.data);
    } catch (error) {
      console.error("Error fetching analytics data", error);
      setError("Failed to load analytics");
    } finally {
      setLoading(false);
    }
  };

  // Fetch equipment data based on selected equipment
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

      // Process equipment data to get monthly counts
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
  }, []);

  // Automatically fetch equipments when a lab is selected
  useEffect(() => {
    if (selectedLabId) {
      fetchEquipments(selectedLabId);
    } else {
      setEquipments([]); // Clear equipments if no lab is selected
      setSelectedEquipmentId(""); // Reset selected equipment
    }
  }, [selectedLabId]);

  // Automatically fetch equipment data when an equipment is selected
  useEffect(() => {
    if (selectedEquipmentId) {
      fetchEquipmentData(selectedEquipmentId);
    } else {
      setMonthlyCounts([]); // Clear monthly counts if no equipment is selected
    }
  }, [selectedEquipmentId]);

  return (
    <div className="min-h-screen w-full bg-[#202652] flex flex-col items-center justify-center">
      <p className="text-white text-[25px] font-semibold p-4">Admin Analytics Dashboard</p>

      {/* Styled Selection for Labs */}
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

      {/* Styled Selection for Equipment */}
      <div className="flex flex-row items-center justify-center bg-[#3C4D71] rounded-[40px] p-4 mb-6">
        <label className="px-2 text-white">Select Equipment</label>
        <select
          onChange={(e) => setSelectedEquipmentId(e.target.value)}
          value={selectedEquipmentId}
          disabled={!selectedLabId} // Disable when no lab is selected
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

      {/* Styled Year and Month Inputs */}
      <div className="flex flex-row items-center justify-center bg-[#3C4D71] rounded-[40px] p-4 mb-6">
        <label className="px-2 text-white">Select Year and Month</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Year"
          min="2020"
          className="bg-[#3C4D71] rounded-l-[30px] text-center text-[20px] shadow-lg shadow-[#32405e] text-white px-2"
        />
        <input
          type="number"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          placeholder="Month"
          min="1"
          max="12"
          className="bg-[#3C4D71] rounded-l-[30px] text-center text-[20px] shadow-lg shadow-[#32405e] text-white px-2"
        />
        <div
          className="px-4 text-center text-[20px] bg-blue-300 rounded-r-[30px] cursor-pointer shadow-[#32405e] shadow-lg"
          onClick={fetchAnalytics}
        >
          Get Analytics
        </div>
      </div>

      {/* Visualization Section as it was */}
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

      <div>
        <h2 className="text-white text-[20px] font-semibold py-4">Monthly Equipment Data</h2>
        {monthlyCounts.length > 0 ? (
          <BarChart
            xAxis={[{ dataKey: "month", scaleType: "band" }]} // Provide xAxis with dataKey
            series={[{ dataKey: "count", label: "Count" }]} // Use series to provide data
            dataset={monthlyCounts} // Use dataset to provide data
            width={600}
            height={400}
          />
        ) : (
          <p>No data available for the selected equipment.</p>
        )}
      </div>

      {loading && (
        <div className="h-[800px] w-full bg-[#202652] flex justify-center items-center relative flex-col ">
          <span className="loading loading-spinner text-info w-12 h-12"></span>
          <p className="text-[30px] font-semibold text-white p-2">Loading</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default AdminAnalytics;
