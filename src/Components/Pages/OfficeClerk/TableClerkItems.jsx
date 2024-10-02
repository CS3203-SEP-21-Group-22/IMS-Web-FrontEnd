import React, { useState } from "react";

import ClerkItemRow from "./ClerkItemRow";
import axios from "axios";

const TableClerkItems = ({ equipmentId, itemData }) => {
  const [error, setError] = useState(null);

  return (
    <div className="w-[999px] h-[496px] bg-[#3C4D71] flex-row flex items-center justify-center gap-4 mt-10 text-white relative rounded-[60px]">
      <table className="table-auto w-[744px]  border-collapse">
        <tr className="bg-[#6D7AA4] shadow-lg border-[#3C4D71] border-[1px] text-center h-[50px]">
          <th className="">ITEM NAME</th>

          <th className="">LAST MAINTENANCE</th>
          <th className=" ">MAINTENANCE BY</th>
          <th className=" ">ITEM MODEL</th>
          <th></th>
        </tr>

        {itemData.map((item, index) => (
          <ClerkItemRow key={index} itemData={item} />
        ))}
      </table>
    </div>
  );
};

export default TableClerkItems;
