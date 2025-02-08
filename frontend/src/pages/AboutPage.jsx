// bg-gray-100 p-6

const AboutPage = () => {
  return (
    <div className="flex items-center justify-center h-screen "> 
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full bg-white shadow-lg p-8 flex">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full w-full">
            <div className="h-full w-full flex items-center justify-center overflow-hidden">
              <img
                src="https://s3-alpha-sig.figma.com/img/d497/3986/87e79d837c3f075d753f05da0bb4633d?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gGrmsgQ5FbUNY17iRItwB4Daf7nBTTLwMpmtpvv0T1xXmG-61AIR85Bz49FgisHwoDdeeJPHCD2~1yunyzo9h6E0Eei2WYylZKP6uDzgU42rDWnUiu64v8HXXtsY1qAzZk6vS12DA6WYBYR9AGq5gzU9mclTf8U-3~YNh~wZTCFKwd9b4D8hJvMc3JQTtny4mkTd1X5wmEhoo9~M4BL2vHI6OSdcylqKrQFTUWMfEAFripCfnX~W6XaMeHXqKXadF74Te0Yp86HhSAX5KNchdZGtBPNyYZHcxC7dOQIvKmpwMbSJgeyHACEzNzYMCBEvr7r1gBIu89ZYKYVn8f1Fjg__"
                alt="Kick"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-full w-full flex flex-col justify-center p-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">ABOUT US</h2>
              <p className="text-gray-700 mb-4">
                We understand the importance of sports certificates in recognizing
                and celebrating the achievements of athletes. Whether it’s for
                scholarships, career opportunities, or personal milestones, these
                certificates are a vital part of an athlete’s journey. However, we
                also recognize that losing or damaging these important documents
                can be a frustrating and time-consuming experience.
              </p>
              <p className="text-gray-700 mb-4">
                That’s why we’ve developed the Sports Certificate Replacement
                System a secure, efficient, and user-friendly platform designed to
                simplify the process of replacing lost or damaged sports
                certificates.
              </p>
              <h2 className="text-2xl font-bold text-blue-600 mt-6 mb-4">OUR MISSION</h2>
              <p className="text-gray-700">
                Our mission is to empower athletes and sports organizations by
                providing a reliable and efficient solution for replacing sports
                certificates. We believe that no one should miss out on
                opportunities due to lost or damaged documents, and we’re here to
                help you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
