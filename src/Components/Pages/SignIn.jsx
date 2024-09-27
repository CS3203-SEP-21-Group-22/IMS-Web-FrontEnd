import React from "react";
import { useState } from "react";
import signindesign from "../../styles/images/signindesign.png";

function SignIn() {

  const authServer = "http://localhost:3000/login";

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault();

    console.log("Form submitted");
    setError("");

    const redirectUri = "http://localhost:3001/student"; 
    const clientId = "group22-client-id"; 

    try{
      const response = await fetch(authServer, {
        method:"POST",
        headers:{"Content-Type":"application/json",},
        body:JSON.stringify({email,password,redirectUri, clientId}),
      }
      
    );
    console.log("Response Status:", response.status);
    const text = await response.text(); // Read the response as text
    console.log("Response Body:", text); // Log the response body
    if (!response.ok){
      throw new Error("Login failed.Please check your credentials");
    }
    console.log("Forming submitted");
    const data = await response.json();
    console.log("Login Successful",data)
    
    }

    
    catch(err){
      setError(err.message);
    }
  }

  return (
    <div className="h-[1000px] w-full bg-[#202652] flex">
      <div className="relative w-[349px] h-[400px] left-[200px] top-[53px] bg-gradient-to-br from-[#3C4D71] to-[#202652] shadow-[0_-20px_60px_rgba(0,0,0,0.25)] rounded-[30px] flex flex-col justify-center items-center z-[5] animate-[glowAnimation_3s_infinite]">
        <p className="absolute w-[156px] h-[32px] top-[10px] text-[32px] leading-[32px] font-bold text-center tracking-[-0.3px] text-white font-josefin">
          SIGN IN
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            className="h-[50px] w-[306px] rounded-[10px] border-transparent mb-[10px]"
            id="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
          />
          <input
            className="h-[50px] w-[306px] rounded-[10px] border-transparent m-[5px]"
            id="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
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

        </form>
        
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
