import React from "react";
import { useState } from "react";
import signindesign from "../../styles/images/signindesign.png";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectUri] = useState("https://your-redirect-uri.com"); // Set your redirectUri
  const [clientId] = useState("group22-client-id"); // Client ID from your auth server
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          redirectUri,
          clientId,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      // Store tokens in localStorage or sessionStorage
      localStorage.setItem("id_token", data.id_token);
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);

      // Redirect or navigate to the next page
      window.location.href = "/student"; // Redirect to dashboard or another page
    } catch (error) {
      setError("Invalid credentials or server error");
    }
  };

  return (
    <div className="h-[1000px] w-full bg-[#202652] flex">
      <div className="relative w-[349px] h-[400px] left-[200px] top-[53px] bg-gradient-to-br from-[#3C4D71] to-[#202652] shadow-[0_-20px_60px_rgba(0,0,0,0.25)] rounded-[30px] flex flex-col justify-center items-center z-[5] animate-[glowAnimation_3s_infinite]">
        <p className="absolute w-[156px] h-[32px] top-[10px] text-[32px] leading-[32px] font-bold text-center tracking-[-0.3px] text-white font-josefin">
          SIGN IN
        </p>
        <form onSubmit={handleLogin} className="flex flex-col items-center">
          <input
            className="h-[50px] w-[306px] rounded-[10px] border-transparent mb-[10px]"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="h-[50px] w-[306px] rounded-[10px] border-transparent m-[5px]"
            id="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
