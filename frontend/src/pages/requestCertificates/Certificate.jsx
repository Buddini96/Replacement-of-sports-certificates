import  {useState} from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

function Certificate() {

  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className="flex mt-19 px-7">
      <Sidebar sidebarToggle={sidebarToggle} />
      <Dashboard
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
    </div>
  );
}

export default Certificate;
