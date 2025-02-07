import { Home, Award, Users, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <>
      {/* Sidebar */}
      <div className="w-64 bg-[#EDF6F7] shadow-lg">
        <div className="flex flex-col h-full">
          <div className="p-4">
            <h1 className="text-xl font-bold">Logo Here</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-2 text-left rounded-lg bg-[#91D9E2] text-black">
                <Home size={20} />
                <NavLink to="/admin">Admin</NavLink>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 text-left rounded-lg hover:bg-gray-100">
                <Award size={20} />
                <NavLink to="/admin/certification">Certificate</NavLink>
              </button>
              <NavLink to="/studenet-details">
                <button className="w-full flex items-center gap-3 px-4 py-2 text-left rounded-lg hover:bg-gray-100">
                  <Users size={20} />
                  <span>Student</span>
                </button>
              </NavLink>
            </div>
          </nav>

          {/* Logout Button */}
          <div className="p-4">
            <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600">
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
