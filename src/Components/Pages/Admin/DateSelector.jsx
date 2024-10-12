import React from "react";

const DateSelector = ({ selectedYear, setSelectedYear, selectedMonth, setSelectedMonth, onFetch }) => {
  return (
    <div className="flex flex-col items-center mb-4">
      <div className="flex items-center mb-2">
        <label className="text-white mr-2">Select Year:</label>
        <input
          type="number"
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="bg-[#3C4D71] text-white rounded p-2"
        />
      </div>
      <div className="flex items-center mb-4">
        <label className="text-white mr-2">Select Month:</label>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
          className="bg-[#3C4D71] text-white rounded p-2"
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
      <button onClick={onFetch} className="bg-green-500 text-white rounded p-2">
        Fetch Data
      </button>
    </div>
  );
};

export default DateSelector;
