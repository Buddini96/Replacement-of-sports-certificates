/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { MdArrowBackIosNew } from "react-icons/md";


function CertificateDetails({ certificate, setSelectedCertificate }) {
  CertificateDetails.propTypes = {
    certificate: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
    onBack: PropTypes.func.isRequired,
  };

  if (!certificate) {
    return <div>No certificate details available.</div>;
  }

  return (
    <div className="p-5">
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => setSelectedCertificate(null)}
      >
        <MdArrowBackIosNew className="text-xl" />
        <h1 className="text-3xl font-bold">{certificate.title}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
        <div className="flex flex-col space-y-4">
          <div>
            <label className="block text-sm font-medium text-black py-1">
              Certificate Name
            </label>
            <input
              type="text"
              className="w-full p-2 border bg-[#EDF6F5] border-[#B9D8DB] rounded-lg focus:ring focus:ring-[#B9D8DB] text-[15px] text-black"
              placeholder="Enter Certificate Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black py-1">
              Sport Name
            </label>
            <input
              type="text"
              className="w-full p-2 border bg-[#EDF6F5] border-[#B9D8DB] rounded-lg focus:ring focus:ring-[#B9D8DB] text-[15px] text-black"
              placeholder="Enter Sport Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black py-1">
              Place
            </label>
            <input
              type="text"
              className="w-full p-2 border bg-[#EDF6F5] border-[#B9D8DB] rounded-lg focus:ring focus:ring-[#B9D8DB] text-[15px] text-black"
              placeholder="Enter Place"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black py-1">
              Issue Date
            </label>
            <input
              type="text"
              className="w-full p-2 border bg-[#EDF6F5] border-[#B9D8DB] rounded-lg focus:ring focus:ring-[#B9D8DB] text-[15px] text-black"
              placeholder="Enter Issue Date"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              rows="4"
              className="w-full p-2 border bg-[#EDF6F5] border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              placeholder="Enter Description"
            ></textarea>
          </div>

          <button className="bg-[#67CDCD] text-white py-2 px-4 rounded-lg w-fit ">
            Download
          </button>
        </div>

        <div className="flex justify-center rounded-md">
          <img
            src={certificate.image}
            aria-label={certificate.title}
            className="w-[500px] h[400]- mt-4 rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default CertificateDetails;
