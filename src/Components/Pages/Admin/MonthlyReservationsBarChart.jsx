import React, { useState, useEffect } from "react";
import axios from "axios";
import { BarChart } from "@mui/x-charts";

const MonthlyReservationsBarChart = () => {
  const [monthlyReservations, setMonthlyReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchReservationsForYear = async () => {
    setLoading(true);
    const currentYear = new Date().getFullYear();
    const monthlyData = [];

    try {
      for (let month = 1; month <= 12; month++) {
        const response = await axios.get(
          `http://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/admin/reservations?year=${currentYear}&month=${month}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          },
        );

        const monthData = response.data;
        const totalReservationsForMonth = monthData.reduce((acc, item) => acc + item.count, 0);

        monthlyData.push({
          month: month,
          count: totalReservationsForMonth,
        });
      }

      setMonthlyReservations(monthlyData);
    } catch (error) {
      console.error("Error fetching monthly reservations", error);
      setError("Failed to load monthly reservations");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReservationsForYear();
  }, []);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="bg-transparent p-6">
      <h2 className="text-white text-[20px] font-semibold py-4">Monthly Reservations Bar Chart</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}

      {!loading && !error && monthlyReservations.length > 0 && (
        <div className="chart-container">
          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: monthlyReservations.map((item) => months[item.month - 1]),
                label: "Months",
                tickLabelStyle: {
                  fill: "#FFFFFF",
                },
              },
            ]}
            yAxis={[
              {
                tickLabelStyle: {
                  fill: "#FFFFFF",
                },
              },
            ]}
            series={[
              {
                data: monthlyReservations.map((item) => item.count),
                label: "Reservations",
              },
            ]}
            width={600}
            height={400}
            sx={{
              "& .MuiChart-axis": {
                stroke: "#FFFFFF",
              },
              "& .MuiChart-tick": {
                stroke: "#FFFFFF",
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MonthlyReservationsBarChart;
