import React from "react";
import { BarChart } from "@mui/x-charts";

const MonthlyEquipmentBarChart = ({ monthlyCounts }) => {
  return (
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
  );
};

export default MonthlyEquipmentBarChart;
