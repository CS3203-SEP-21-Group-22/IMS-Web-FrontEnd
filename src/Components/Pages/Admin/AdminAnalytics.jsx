import React, { useState, useEffect } from "react";
import axios from "axios";

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

  return (
    <div className="min-h-screen w-full bg-[#202652] flex flex-col items-center justify-center">
      <h1 className="text-white">Admin Analytics Dashboard</h1>
      <div>
        <select onChange={(e) => setSelectedLabId(e.target.value)} value={selectedLabId}>
          <option value="">Select Lab</option>
          {labs.map((lab) => (
            <option key={lab.labId} value={lab.labId}>
              {lab.labName}
            </option>
          ))}
        </select>
        <button onClick={() => fetchEquipments(selectedLabId)}>Load Equipments</button>
      </div>

      {equipments.length > 0 && (
        <div>
          <select onChange={(e) => setSelectedEquipmentId(e.target.value)} value={selectedEquipmentId}>
            <option value="">Select Equipment</option>
            {equipments.map((equipment) => (
              <option key={equipment.equipmentId} value={equipment.equipmentId}>
                {equipment.name}
              </option>
            ))}
          </select>
          <button onClick={() => fetchEquipmentData(selectedEquipmentId)}>Get Equipment Data</button>
        </div>
      )}

      <div>
        <h2>Select Year and Month for Analytics</h2>
        <input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" min="2020" />
        <input
          type="number"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          placeholder="Month"
          min="1"
          max="12"
        />
        <button onClick={fetchAnalytics}>Get Analytics</button>
      </div>

      <div>
        <h2>Analytics Data:</h2>
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
        <h2>Equipment Data:</h2>
        {equipmentData.map((data, index) => (
          <div key={index}>
            <p>Year: {data.year}</p>
            <p>Month: {data.month}</p>
            <p>Count: {data.count}</p>
          </div>
        ))}
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default AdminAnalytics;
