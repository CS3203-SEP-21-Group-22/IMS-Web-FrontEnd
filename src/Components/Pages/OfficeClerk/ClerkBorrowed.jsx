import React from "react";
import { useLocation } from "react-router-dom";
import ClerkBorrowCard from "./ClerkBorrowCard";

const ClerkBorrowed = () => {
  const location = useLocation();
  const borrowings = location.state?.borrowings || [];
  console.log("Borrowings", borrowings);

  return (
    <div className="min-h-screen w-full bg-[#202652] flex p-8 flex-col items-center">
      <div className="text-white text-[25px] font-semibold tracking-[0.06rem] mb-5">BORROWED ITEMS</div>

      {borrowings.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 h-[138px]">
          {borrowings.map((borrow, index) => (
            <ClerkBorrowCard key={index} borrowData={borrow} />
          ))}
        </div>
      ) : (
        <div className="text-white text-[20px]">No items have been borrowed</div>
      )}
    </div>
  );
};

export default ClerkBorrowed;
