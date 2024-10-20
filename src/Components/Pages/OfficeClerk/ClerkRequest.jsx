import React from "react";
import { useLocation } from "react-router-dom";
import ClerkRequestCard from "./ClerkRequestCard";

const ClerkRequest = () => {
  const location = useLocation();
  const requests = location.state?.requests || []; // Handle undefined case safely
  console.log(requests);

  return (
    <div className="min-h-screen w-full bg-[#202652] flex p-8 flex-col items-center">
      <div className="text-white text-[25px] font-semibold tracking-[0.06rem] mb-5">RESERVED ITEMS</div>

      {requests.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 h-[138px]">
          {requests.map((request, index) => (
            <ClerkRequestCard key={index} requestData={request} />
          ))}
        </div>
      ) : (
        <div className="text-white text-[20px]">No requests available</div>
      )}
    </div>
  );
};

export default ClerkRequest;
