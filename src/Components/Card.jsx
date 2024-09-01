import React, { Children } from "react";

const Card = ({ imgsrc, altname, Children, onClick }) => {
  return (
    <div
      className="w-[297px] h-[278px] bg-[#3C4D71] rounded-[60px] mx-6 flex flex-col justify-center items-center relative cursor-pointer hover:scale-[1.1] transition duration-200 shadow-lg"
      onClick={onClick}
    >
      <img className=" absolute top-10" src={imgsrc} alt={altname} />

      <p className="font-josefin-sans font-normal text-[20px] text-white leading-[20px] tracking-[0.06em] mb-8 absolute top-[235px]">
        {Children}
      </p>
    </div>
  );
};

export default Card;
