import React from "react";
import TableTop from "../TableTop";
import Entry from "../Entry";

const Testpage = () => {
  return (
    <div className="bg-blue-900 w-screen h-screen flex flex-col justify-center items-center">
      <div className="bg-green-200 w-[700px] h-[500px] flex flex-col items-center gap-2">
        <TableTop />
      </div>
    </div>
  );
};

export default Testpage;
