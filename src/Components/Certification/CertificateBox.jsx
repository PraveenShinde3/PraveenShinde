import React from "react";
import CertificateIcon from "../../images/certificate.svg";

const CertificateBox = (props) => {
  return (
    <div className="flex gap-10 lg:gap-2 p-2">
      <div className="w-2/12 md:w-1/12">
        <img className="w-10" src={CertificateIcon} alt="" />
      </div>
      <div className="w-10/12 md:w-11/12 underline underline-offset-4">
        <a href={props.url} target="_blank" rel="noreferrer">
          <p>{props.name}</p>
        </a>
      </div>
    </div>
  );
};

export default CertificateBox;
