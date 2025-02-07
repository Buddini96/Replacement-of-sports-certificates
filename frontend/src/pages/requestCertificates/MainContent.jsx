/* eslint-disable react/prop-types */
import { useState } from "react";
import ChooseCertificate from "../../components/ChooseCertificate";
import PersonalDetails from "../../components/PersonalDetails";
import CertificateDetails from "../requestCertificates/CertificateDetails";

function MainContent({ selectedPage }) {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const renderContent = () => {
    if (selectedCertificate) {
    return (
      <CertificateDetails
        certificate={selectedCertificate}
        setSelectedCertificate={setSelectedCertificate} 
      />
    );
  }

    switch (selectedPage) {
      case "Personal Details":
        return <PersonalDetails />;
      case "Certificates":
        return (
          <ChooseCertificate setSelectedCertificate={setSelectedCertificate} />
        );
      default:
        return (
          <ChooseCertificate setSelectedCertificate={setSelectedCertificate} />
        );
    }
  };

  return <div className="p-5">{renderContent()}</div>;
}

export default MainContent;
