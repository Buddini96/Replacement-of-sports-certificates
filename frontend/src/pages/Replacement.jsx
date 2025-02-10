import replacementBg from '../assets/images/replacement.png'

function Replacement() {
  return (
    <div className="flex items-center justify-center h-max">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full bg-white  p-8 flex ">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
            <div className="flex flex-col justify-center items-center text-black sm:p-20 p-4 text-center">
              <h2 className="text-3xl text-[#67CDCD] mb-5 font-bold break-words max-w-lg leading-relaxed">
                Request a Replacement <br />
                Certificate
              </h2>
              <p className="text-medium mb-6 max-w-lg break-words leading-7">
                The Request Certificate Page allows users to apply for a
                replacement of lost or damaged sports certificates through a
                structured and user-friendly process. It includes a multi-step
                form to collect necessary details, verify documents, and submit
                requests efficiently. The system ensures secure data submission,
                real-time validation, and tracking capabilities.
              </p>
              <button className="bg-[#67CDCD] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#55b6b6] transition">
                Request Now
              </button>
            </div>

            <div className="flex flex-col justify-center items-center p-8">
              <img
                src={replacementBg}
                alt="Replacement Certificate"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Replacement