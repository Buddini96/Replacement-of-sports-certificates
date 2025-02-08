import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";

function Footer() {
  return (
    <div className="text-gray-600 body-font bg-[#EDF6F5]">
      <div className="container px-15 py-15 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div className="w-full">
          <h1 className="horizon font-moul font-bold mb-2 text-black">
            HORIZON CAMPUS
          </h1>
          <p className="text-sm text-left mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className="flex justify-center items-center text-[#84D0FF] space-x-5">
            <FaFacebookF className="bg-white rounded-full p-2 text w-8 h-8" />
            <FaTwitter className="bg-white rounded-full p-2 text w-8 h-8" />
            <RiInstagramFill className="bg-white rounded-full p-2 text w-8 h-8" />
            <FaPinterestP className="bg-white rounded-full p-2 text w-8 h-8" />
          </div>
        </div>
        <div className="w-full">
          <h1 className="font-bold mb-2 text-black uppercase tracking-[0.3em]">
            Navigation
          </h1>
          <ul className="uppercase text-sm space-y-1">
            <li>Home</li>
            <li>About</li>
            <li>Request</li>
            <li>Certificate</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="w-full">
          <h1 className="font-bold mb-2 text-black uppercase">Contact</h1>
          <p className="text-sm ">011 2985221</p>
          <p className="text-sm mb-5">011 2985221</p>

          <h1 className="font-bold mb-1 text-black uppercase">
            EMAIL BUSINESS
          </h1>
          <p className="text-sm ">replacementcertificate@gmail.com</p>
        </div>
      </div>

      <div className="bg-white">
        <div className="bg-white">
          <div className="container mx-auto py-4 px-5 flex flex-col items-center">
            <p className="text-gray-500 text-sm text-center">
              Copyright © 2025 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
