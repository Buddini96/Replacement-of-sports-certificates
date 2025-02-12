import { FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";



function Contact() {
  return (
    <div className="flex mt-10 items-center justify-center h-max">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full bg-white  p-7 flex ">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">

            <div className="bg-[#67CDCD] flex flex-col  items-start text-black sm:p-20 p-2">
              <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
              <p className="text-medium mb-3">
                We offer a range of premium services, including hair styling,
                skincare, nail care, and more, tailored to enhance your natural
                beauty. Our experienced professionals ensure a relaxing and
                rejuvenating experience in a modern, comfortable setting. Book
                your appointment today and discover the perfect blend of luxury
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 sm:p-10">
                <div className="p-4 sm:ml-[6rem] md:ml-0">
                  <FaEnvelope className="w-6 h-6" />
                </div>
                <div className=" p-4">
                  <h1 className="text-black font-semibold">Email</h1>
                  <p className="text-sm">studiorange@gmail.com</p>
                </div>

                <div className="p-4 sm:ml-[6rem] md:ml-0">
                  <BsFillTelephoneFill className="w-5 h-5" />
                </div>
                <div className=" p-4">
                  <h1 className="text-black font-semibold">Phone</h1>
                  <p className="text-sm">+94 76 2666464</p>
                  <p className="text-sm">+94 76 2666464</p>
                </div>

                <div className="p-4 sm:ml-[6rem] md:ml-0">
                  <IoLocationSharp className="w-6 h-6" />
                </div>
                <div className=" p-4">
                  <h1 className="text-black font-semibold">Address</h1>
                  <p className="text-sm">No 300, Citrus Junction</p>
                  <p className="text-sm">Narawala, Poddala</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center p-8">
              <h2 className="text-[#67CDCD]   text-3xl font-bold mb-6">
                Send a Message
              </h2>
              <form className="w-full max-w-md">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 text-sm bg-[#EDF6F5]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#67CDCD]"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 text-sm bg-[#EDF6F5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#67CDCD]"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 text-sm bg-[#EDF6F5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#67CDCD]"
                    placeholder="Enter your Subject"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 text-sm bg-[#EDF6F5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#67CDCD]"
                    placeholder="Enter your message"
                    rows={4}
                  ></textarea>
                </div>
                <button className="bg-[#67CDCD] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#55b6b6] transition">
                  Contact
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
