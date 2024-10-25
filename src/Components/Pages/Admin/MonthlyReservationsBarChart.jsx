import React, { useState, useEffect } from "react";
import axios from "axios";
import { BarChart } from "@mui/x-charts";
import { colors } from "@mui/material";
import { blue } from "@mui/material/colors";

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
          `https://ims-api-fbf3hheffacqe5ak.westus2-01.azurewebsites.net/api/admin/reservations?year=${currentYear}&month=${month}`,
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
    <div className="bg-transparent  flex-col items-center">
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

                labelStyle: {
                  fill: "#FFFFFF",
                },

                lineStyle: {
                  colors: blue,
                },
              },
            ]}
            yAxis={[
              {
                tickLabelStyle: {
                  fill: "#FFFFFF",
                },
                axisLineStyle: {
                  stroke: "#FFFFFF",
                },
              },
            ]}
            series={[
              {
                data: monthlyReservations.map((item) => item.count),
                label: "Reservations",
                labelStyle: {
                  fill: "#FFFFFF", // Green color for the series label
                },
              },
            ]}
            slotProps={{
              legend: {
                labelStyle: {
                  fontSize: 20,
                  fill: "#FFFFFF",
                },
              },
            }}
            width={600}
            height={400}
            sx={{
              "& .MuiChartsAxis-root .MuiChartsAxis-tick": {
                stroke: "#FFFFFF", // Sets tick mark color to green
              },
              "& .MuiChartsSeries-label": {
                fill: "#FFFFFF", // Sets the series label color to green
              },
              "& .MuiChartsAxis-root .MuiChartsAxis-line": {
                stroke: "#FFFFFF", // Sets axis line color to green
              },
              "& .MuiChartsAxis-tickLabel": {
                fill: "#FFFFFF", // Sets tick label color to green
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MonthlyReservationsBarChart;
