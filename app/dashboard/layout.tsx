import React from "react";
import { LayoutProps } from "../interfaces/layoutIntefaces";
import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <div className=" bg-[#182237] p-4 min-h-screen">
        <Sidebar />
      </div>
      <div className="flex-4 p-4">
        <Navbar />
        {children}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Layout;
