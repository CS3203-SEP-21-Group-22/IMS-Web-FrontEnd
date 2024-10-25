import React from "react";
import { BarChart } from "@mui/x-charts";

const MonthlyEquipmentBarChart = ({ monthlyCounts }) => {
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
    <div>
      {monthlyCounts.length > 0 ? (
        <BarChart
          xAxis={[
            {
              dataKey: "month",
              tickLabelStyle: {
                fill: "#FFFFFF",
              },
              scaleType: "band",
              data: monthlyCounts.map((item) => months[item.month - 1]),
            },
          ]} // Provide xAxis with dataKey
          yAxis={[
            {
              tickLabelStyle: {
                fill: "#FFFFFF",
              },
            },
          ]}
          series={[{ dataKey: "count", label: "Count" }]} // Use series to provide data
          dataset={monthlyCounts} // Use dataset to provide data
          width={600}
          height={400}
          slotProps={{
            legend: {
              labelStyle: {
                fontSize: 20,
                fill: "#FFFFFF",
              },
            },
          }}
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
      ) : (
        <p>No data available for the selected equipment.</p>
      )}
    </div>
  );
};

export default MonthlyEquipmentBarChart;
