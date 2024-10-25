import React from "react";

const YearMonthSelector = ({ selectedYear, setSelectedYear, selectedMonth, setSelectedMonth }) => {
  return (
    <div className="flex flex-col mb-4 bg-[#3C4D71] p-4 items-center rounded-[30px]">
      <div className="items-start">
        <div className="flex items-center mb-2">
          <label className="text-white mr-2">Select Year:</label>
          <input
            type="number"
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="bg-[#3C4D71] text-white rounded p-2 shadow-lg shadow-[#2f333a]"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="text-white mr-2">Select Month:</label>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
            className="bg-[#3C4D71] text-white rounded p-2 shadow-lg shadow-[#2f3c58]"
          >
            <option value={1}>January</option>
            <option value={2}>February</option>
            <option value={3}>March</option>
            <option value={4}>April</option>
            <option value={5}>May</option>
            <option value={6}>June</option>
            <option value={7}>July</option>
            <option value={8}>August</option>
            <option value={9}>September</option>
            <option value={10}>October</option>
            <option value={11}>November</option>
            <option value={12}>December</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default YearMonthSelector;
