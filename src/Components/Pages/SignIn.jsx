import React from "react";

import signindesign from "../../styles/images/signindesign.png";

function SignIn() {
  return (
    <div className="h-[1000px] w-full bg-gradient-to-b from-[#202652] to-[#E3EDF8] flex">
      <div className="relative w-[349px] h-[400px] left-[200px] top-[53px] bg-gradient-to-br from-[#3C4D71] to-[#202652] shadow-[0_-20px_60px_rgba(0,0,0,0.25)] rounded-[30px] flex flex-col justify-center items-center z-[5] animate-[glowAnimation_3s_infinite]">
        <p className="absolute w-[156px] h-[32px] top-[10px] text-[32px] leading-[32px] font-bold text-center tracking-[-0.3px] text-white font-josefin">
          SIGN IN
        </p>
        <input
          className="h-[50px] w-[306px] rounded-[10px] border-transparent mb-[10px]"
          id="email"
          placeholder="Email"
          required
        />
        <input
          className="h-[50px] w-[306px] rounded-[10px] border-transparent m-[5px]"
          id="password"
          placeholder="Password"
          required
        />
        <button
          type="submit"
          className="box-border w-[306px] h-[46.99px] bg-gradient-to-br from-[#34C8E8] to-[#4E4AF2] shadow-[0px_30px_60px_#1A1F2C] rounded-[10px] mt-[30px] border-transparent"
        >
          LOGIN
        </button>
        <button className="bg-transparent border-transparent text-white mt-[5px] cursor-pointer hover:underline">
          Forgot your password?
        </button>
      </div>
      <div>
        <img
          src={signindesign}
          alt="siginpic"
          className="absolute w-[700px] h-[450px] left-[485px] top-[90px] z-[1] border-none"
        />
      </div>
    </div>
  );
}

export default SignIn;
