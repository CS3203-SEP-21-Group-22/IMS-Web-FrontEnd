import React from "react";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};
