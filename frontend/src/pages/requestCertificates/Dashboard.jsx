/* eslint-disable react/prop-types */
import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MainContent from "./MainContent";

function Dashboard({ sidebarToggle, setSidebarToggle }) {
  const [selectedPage, setSelectedPage] = useState("Personal Details");
  
  return (
    <div className="flex w-full">
      <Sidebar sidebarToggle={sidebarToggle} onSelectPage={setSelectedPage} />
      <div className={`${sidebarToggle ? "" : "ml-64"} flex-1`}>
        <Navbar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
        <MainContent selectedPage={selectedPage} />
      </div>
    </div>
  );
}

export default Dashboard;
