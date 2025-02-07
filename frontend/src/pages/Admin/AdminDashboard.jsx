import { Bell } from "lucide-react";
import SideBar from "../../components/SideBar";
import { NavLink } from "react-router-dom";

function AdminDashboard() {
  // Sample admin data
  const admins = [
    { name: "Admin name", email: "ashan@gmail.com", status: "Active Now" },
    { name: "Admin name", email: "ashan@gmail.com", status: "3 Min Ago" },
    { name: "Admin name", email: "ashan@gmail.com", status: "2 hours Ago" },
    { name: "Admin name", email: "ashan@gmail.com", status: "Active Today" },
    { name: "Admin name", email: "ashan@gmail.com", status: "Active Today" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active Now":
      case "Active Today":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <SideBar />
      {/* Main Content */}
      <div className="bg-[#EDF6F7] flex-1 p-8">
        <div className="bg-white flex-1 overflow-auto rounded-lg">
          {/* Header */}
          <header className="bg-white shadow-sm">
            <div className="flex items-center justify-between px-8 py-4">
              <h1 className="text-2xl font-bold">Admin Panel</h1>
              <div className="flex items-center gap-4">
                <NavLink to="/add-admin">
                  <button className="px-4 py-2 bg-[#67CDCD] text-black rounded-lg hover:bg-[#7fcad3]">
                    Add Admin
                  </button>
                </NavLink>

                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Bell size={20} />
                </button>
                <div className="flex items-center gap-2">
                  <img
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span>Chanodya</span>
                </div>
              </div>
            </div>
          </header>

          {/* Welcome Section */}
          <div className="p-8">
            <div className="bg-[#EDF6F7] rounded-lg p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Admin"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h2 className="text-2xl font-bold">Hello,</h2>
                  <p className="text-xl">Admin name</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-[#67CDCD] text-black rounded-lg hover:bg-[#7fcad3]">
                <NavLink to="/admin/profile">Edit Profile</NavLink>
              </button>
            </div>
          </div>

          {/* Admin List */}
          <div className="px-8 pb-8">
            <div className="bg-[#EDF6F7] rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
              <div className="space-y-4">
                {admins.map((admin, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3 border-b last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                        alt={admin.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-medium">{admin.name}</h3>
                        <p className="text-sm text-gray-500">{admin.email}</p>
                      </div>
                    </div>
                    <span className={getStatusColor(admin.status)}>
                      {admin.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
