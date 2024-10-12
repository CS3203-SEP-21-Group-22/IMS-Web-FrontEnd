import React from "react";

const HomePageCard = ({ image, topic, description }) => {
  return (
    <div className="h-[400px] w-[320px] mx-2 flex flex-col justify-center items-center bg-[#3C4D71] shadow-lg gap-2 rounded-[30px] hover:scale-[1.05] transition duration-[200]">
      <div className="text-[90px] text-[#00ABE4] h-[200px]">{image}</div>
      <div className="flex flex-col items-center  mt-[-30px] p-2">
        <p className=" font-bold text-[25px] leading-[28px] tracking-[0.06em] text-white text-center">{topic}</p>
        <p className="text-[18px] text-center text-white mt-2 tracking-[0.06em]">{description}</p>
      </div>
    </div>
  );
};

export default HomePageCard;
