import React from "react";

const Card = ({ imgsrc, altname, Children, onClick, imgWidth = "200px", imgHeight = "200px" }) => {
  return (
    <div
      className="w-[297px] h-[278px] bg-[#3C4D71] rounded-[60px] flex flex-col justify-center items-center relative cursor-pointer hover:scale-[1.1] transition duration-200 shadow-lg"
      onClick={onClick}
    >
      <img className="object-contain" src={imgsrc} alt={altname} style={{ width: imgWidth, height: imgHeight }} />
      <p className="font-josefin-sans font-normal text-[20px] text-white leading-[20px] tracking-[0.06em] ">
        {Children}
      </p>
    </div>
  );
};

export default Card;
