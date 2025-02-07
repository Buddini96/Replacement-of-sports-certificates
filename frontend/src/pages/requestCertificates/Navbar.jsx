/* eslint-disable react/prop-types */
import { FaBars } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import profile from "../../assets/images/profile.png";


function Navbar({ sidebarToggle, setSidebarToggle }) {


  return (
    <div>
      <div className="px-4  py-3 flex justify-between items-center ">
        <div className="flex items-center text-xl">
          <FaBars
            className="mr-4 cursor-pointer"
            onClick={() => setSidebarToggle(!sidebarToggle)}
          />

          <button className="p-1 focus:outline-none flex items-center "></button>
        </div>

        <div className="flex items-center gap-x-5">
          <FiBell className="w-6 h-6" />

          <div className="relative">
            <button className="flex items-center gap-2 focus:outline-none">
              <img
                src={profile}
                alt="User"
                className="w-8 h-8 rounded-full object-cover "
              />
              <span className="text-sm font-medium">Heshani</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
