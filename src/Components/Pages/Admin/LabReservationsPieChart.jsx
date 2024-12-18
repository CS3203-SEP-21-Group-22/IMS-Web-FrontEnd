import React from "react";
import { PieChart } from "@mui/x-charts";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const LabReservationsPieChart = ({ analyticsData, totalCount }) => {
  const StyledText = styled("text")(() => ({
    textAnchor: "middle",
    dominantBaseline: "central",
  }));

  function PieCenterLabel() {
    const { width, height, left, top } = useDrawingArea();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    return (
      <>
        <StyledText x={centerX} y={centerY - 20} fontSize="70" fontWeight="bold" fill="#FFFFFF">
          {totalCount}
        </StyledText>
        <StyledText x={centerX} y={centerY + 30} fontSize="20" fontWeight="normal" fill="#FFFFFF">
          RESERVATIONS
        </StyledText>
      </>
    );
  }

  return (
    <div className="flex items-center justify-center  ">
      {analyticsData.length > 0 ? (
        <div className="flex  flex-row items-center justify-center w-full h-full">
          <PieChart
            className=" flex flex-row items-center pl-[72px]"
            series={[
              {
                data: analyticsData.map((data) => ({
                  id: data.labName,
                  label: data.labName,
                  value: data.count,
                })),
                innerRadius: 100,
                outerRadius: 150,
                labelRadius: 100,
              },
            ]}
            width={400}
            height={400}
            slotProps={{ legend: { hidden: true } }}
          >
            <PieCenterLabel />
          </PieChart>
        </div>
      ) : (
        <p className="text-white">No data available for the selected year and month.</p>
      )}
    </div>
  );
};

export default LabReservationsPieChart;
