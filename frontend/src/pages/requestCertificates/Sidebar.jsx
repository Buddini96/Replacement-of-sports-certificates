/* eslint-disable react/prop-types */
import { IoPersonSharp } from "react-icons/io5";
import { TbCertificate } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

function Sidebar({ sidebarToggle, onSelectPage }) {
  const navigate = useNavigate();
  const sidebarItems = [
    {
      label: "Personal Details",
      icon: <IoPersonSharp className="w-6 h-6" />,
      route: "",
    },
    {
      label: "Certificates",
      icon: <TbCertificate className="w-6 h-6" />,
      route: "",
    },
  ];

  const handleNavigation = (route, label) => {
    navigate(route);
    onSelectPage(label);
  };

  return (
    <div
      className={`${
        sidebarToggle ? "hidden" : "block"
      } w-64 bg-[#EDF6F5] fixed h-full px-6 py-4 shadow-lg flex flex-col justify-between`}
    >
      <div className="mt-6 text-center">
        <ul className="mt-10 space-y-5">
          {sidebarItems.map((item, index) => (
            <li key={index} className="relative">
              <div
                className="flex relative items-center border border-[#B9D8DB] rounded-2xl px-3 py-3 space-x-4 text-gray-700 cursor-pointer hover:bg-[#67CDCD]"
                onClick={() => handleNavigation(item.route, item.label)}
              >
                {item.icon}
                <span className="text-[17px] font-medium">{item.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Log Out Button */}
      <div className="absolute bottom-4 left-6 right-6">
        <div
          className="flex items-center  bg-[#EF4747] text-white rounded-2xl px-3 py-3 space-x-4 cursor-pointer hover:opacity-90"
          onClick={() => handleNavigation("", "Log out")}
        >
          <BiLogOut className="w-6 h-6" />
          <span className="text-[17px] font-medium">Log out</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
