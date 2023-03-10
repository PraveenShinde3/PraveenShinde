import React from "react";
import CertificateBox from "./CertificateBox";
import "aos/dist/aos.css";

const Certification = () => {
  return (
    <div data-aos="fade-up" className="lg:px-20">
      <div>
        <p className=" text-3xl md:text-4xl font-bold py-10">Certifications</p>
      </div>
      <div className="md:px-10">
        <CertificateBox
          name="Microsoft Certified: DevOps Engineer Expert          "
          url="https://www.credly.com/badges/f1c522b2-ec44-4457-8ed2-5a84f1438d01/public_url"
        />
        <CertificateBox
          name="Microsoft Certified: Azure Developer Associate"
          url="https://www.credly.com/badges/9bd66656-ced5-44e4-8e1b-e40c8110807d/public_url"
        />
        <CertificateBox
          name="Microsoft Certified: Azure Fundamentals"
          url="https://www.credly.com/badges/45b6a3cc-76ce-403b-ba8a-5b36af6519b9/public_url"
        />
      </div>
    </div>
  );
};

export default Certification;
