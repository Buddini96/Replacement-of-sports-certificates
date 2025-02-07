import { Bell, ChevronLeft } from "lucide-react";
import SideBar from "../../components/SideBar";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowDownSFill } from "react-icons/ri";

function StudentDetails() {
  const studentData = [
    {
      registerNo: "REG-001",
      studentName: "John Doe",
      facultyName: "Computer Science",
      phoneNo: "123-456-7890",
      joinDate: "2023-01-15",
      RegNo: "0656504",
    },
    {
      registerNo: "REG-002",
      studentName: "John Doe",
      facultyName: "Computer Science",
      phoneNo: "123-456-7890",
      joinDate: "2023-01-15",
      RegNo: "0656504",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <SideBar />
      {/* Main Content */}
      <div className="bg-[#EDF6F7] flex-1 p-4 md:p-8">
        <div className="bg-white flex-1 overflow-auto rounded-lg">
          {/* Header */}
          <header className="bg-white shadow-sm">
            <div className="flex items-center justify-between px-4 md:px-8 py-4">
              <div className="flex items-center gap-2">
                <NavLink to="/admin">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                </NavLink>

                <h1 className="text-lg md:text-xl font-semibold">
                  Student Details
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Bell className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium">Chanodya</span>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}

          <div className="flex flex-col md:flex-row justify-between items-center pt-10 gap-10 p-5 mb-5">
            <div className="flex space-x-4 font-medium">
              <p className="p-2">Select</p>
              <div className="relative flex items-center bg-[#EDF6F5] border border-[#E0E0E0] rounded-lg px-2 py-2">
                <h3 className="font-medium text-sm px-3">Faculty Name</h3>
                <IoIosArrowDown className="cursor-pointer" />
              </div>
            </div>

            <div className="flex space-x-6 font-medium">
              <div className="relative flex items-center border border-[#E0E0E0] rounded-lg">
                <input
                  type="text"
                  className="pl-4 pr-10 py-2 rounded-lg bg-[#EDF6F5] outline-none font-medium text-sm w-full"
                  placeholder="Search Student Id"
                />
                <CiSearch className="absolute right-3 text-black text-sm" />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-5">
            <table className="min-w-full table-auto shadow-md">
              <thead>
                <tr>
                  <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Register No
                  </th>
                  <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Student Name
                  </th>
                  <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Faculty Name
                  </th>
                  <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Phone No
                  </th>
                  <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Join Date
                  </th>
                  <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Register No
                  </th>
                  <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody>
                {studentData.map((student, index) => (
                  <tr key={index} className="">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900">
                      {student.registerNo}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-700">
                      {student.studentName}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-700">
                      {student.facultyName}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-700">
                      {student.phoneNo}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-700">
                      {student.joinDate}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-700">
                      {student.RegNo}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button className="text-blue-600 hover:text-blue-800">
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex flex-col md:flex-row justify-evenly items-center pt-10 gap-10 py-5 px-5">
              <div className="flex space-x-4 font-medium">
                <p>Showing</p>
                <button className="flex items-center gap-4 focus:outline-none bg-[#67CDCD] rounded-lg py-1 px-2">
                  <span className="text-sm font-medium">15</span>
                  <RiArrowDownSFill className="cursor-pointer" />
                </button>
                <p>items per page</p>
              </div>

              <div className="flex space-x-6 font-medium">
                <p className="bg-[#67CDCD] rounded-lg px-3 py-1">1</p>
                <p>2</p>
                <p>Next</p>
                <p>End</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;
