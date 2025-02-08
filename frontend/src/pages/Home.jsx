import HomeBg from "../assets/images/homeBg.png";
import Footer from "../components/Footer";
import AboutPage from "./AboutPage";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <div className="sm:m-7 ">
        <img
          src={HomeBg}
          alt="Home Background"
          aria-label="Background image"
          className="w-full h-screen object-cover"
          loading="lazy"
        />

        <div className="absolute inset-0 flex items-center justify-center text-white px-5 sm:px-10 text-center">
          <div>
            <h1 className="text-3xl font-bold">
              Replace Your Sports Certificate Easily
            </h1>
            <p className="text-medium max-w-md mt-2">
              A secure and efficient platform for replacing lost or damaged
              sports certificates
            </p>
            <div className="mt-6 font-normal flex flex-col sm:flex-row sm:space-x-4 justify-center">
              <button className="bg-[#67CDCD] px-6 py-2 text-black rounded-[10px] mb-4 sm:mb-0">
                Request Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About page */}
      <div>
        <AboutPage />
      </div>

      {/* Contact Info Page */}
      <div>
       <Contact />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
