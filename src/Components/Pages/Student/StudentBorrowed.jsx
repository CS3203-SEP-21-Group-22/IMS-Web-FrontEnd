import React from "react";
import { useLocation } from "react-router-dom";
import BorrowedMiniCard from "./BorrowedMiniCard";

const StudentBorrowed = () => {
  const location = useLocation();
  const borrowed = location.state?.borrowed || [];
  console.log(borrowed);

  return (
    <div className="h-svh w-full bg-[#202652] p-10 flex justify-center">
      {borrowed.length === 0 ? (
        <p className="text-white text-[24px] font-semibold">No items have been borrowed.</p>
      ) : (
        <div className="flex flex-col items-center just">
          <div className="text-white text-[25px] font-semibold tracking-[0.06rem]">BORROWED EQUIPMENT</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {borrowed.map((borrow, index) => (
              <BorrowedMiniCard key={index} borrowData={borrow} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentBorrowed;
