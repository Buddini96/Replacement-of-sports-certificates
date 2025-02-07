/* eslint-disable react/prop-types */
import { CiSearch } from "react-icons/ci";
import certificate from "../assets/images/Certificate.png";
import { RiArrowDownSFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

function ChooseCertificate({ setSelectedCertificate }) {
  const certificateData = [
    {
      image: certificate,
      title: "Certificate Details A",
      date: "15 July 2024",
    },
    {
      image: certificate,
      title: "Certificate Details B",
      date: "15 July 2024",
    },
    {
      image: certificate,
      title: "Certificate Details C",
      date: "15 July 2024",
    },
    {
      image: certificate,
      title: "Certificate Details D",
      date: "15 July 2024",
    },
    {
      image: certificate,
      title: "Certificate Details E",
      date: "15 July 2024",
    },
    {
      image: certificate,
      title: "Certificate Details F",
      date: "15 July 2024",
    },
  ];

  return (
    <div className="">
      <div className="shadow p-5 rounded-md">
        <h1 className="py-3 mb-2 text-[2rem] font-bold">Certificates</h1>

        <div className="flex space-x-4 mb-6">
          <div className="relative flex items-center bg-[#EDF6F5] border border-[#E0E0E0] rounded-lg px-2">
            <h3 className="font-medium text-sm px-3">Sport Name</h3>
            <IoIosArrowDown className="cursor-pointer" />
          </div>

          <div className="relative flex items-center bg-[#EDF6F5] border border-[#E0E0E0] rounded-lg px-2">
            <h3 className="font-medium text-sm px-3">15 July 24</h3>
            <IoIosArrowDown className="cursor-pointer" />
          </div>

          <div className="relative flex items-center border border-[#E0E0E0] rounded-lg">
            <input
              type="text"
              className="pl-4 pr-10 py-2 rounded-lg bg-[#EDF6F5] outline-none font-medium text-sm w-full"
              placeholder="Search Certificates"
            />
            <CiSearch className="absolute right-3 text-black text-sm" />
          </div>
        </div>

        <div className="mb-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 space-x-3 ">
            {certificateData.map((data, index) => (
              <div
                key={index}
                className="bg-[#B9D8DB] rounded-xl shadow-md p-3 cursor-pointer"
                onClick={() => setSelectedCertificate(data)}
                
              >
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-auto mb-2 rounded-xl"
                />
                <h2 className="text-center font-semibold text-[18px] px-3 py-1">
                  {data.title}
                </h2>
                <p className="text-center text-sm font-normal">{data.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-evenly items-center pt-10 gap-10">
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
  );
}

export default ChooseCertificate;
