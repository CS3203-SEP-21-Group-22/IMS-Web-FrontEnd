import React from "react";

const MostReservedEquipment = ({ mostReserved }) => {
  return (
    <div className="text-white text-center mt-6 bg-[#3C4D71] px-10 py-4 w-[400px] rounded-[30px]">
      <p className="text-[25px] font-semibold">Most Reserved Equipment</p>
      <div className="bg-[#3C4D71] shadow-lg shadow-[#303d5a] rounded-[30px]">
        {mostReserved.length > 0 ? (
          mostReserved.map((item, index) => (
            <div className="flex flex-row items-center justify-center">
              <p key={index} className="px-2 text-[20px]">
                {item.name}
              </p>
              <div key={index} className="flex flex-col items-start justify-center">
                <p> {item.count} reservations</p>
                <p>{item.labName}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No reservations found for the selected period</p>
        )}
      </div>
    </div>
  );
};

export default MostReservedEquipment;
