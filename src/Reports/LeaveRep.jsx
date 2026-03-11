import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import dayjs from "dayjs";
import { IoMdPrint } from "react-icons/io";
import { PiArrowArcLeftBold } from "react-icons/pi";
import html2pdf from "html2pdf.js";
import { useNavigate } from "react-router";
import Logo from "../assets/duhs-logo.PNG";

export default function LeaveRep() {
  const contentRef = useRef(null);
  const navigate = useNavigate();

  const [trainee, setTrainee] = useState([]);

  useEffect(() => {
    // console.log(results); // results is empty on the first render
    // window.sessionStorage.setItem("results", JSON.stringify(results));
    let data = sessionStorage.getItem("document");
    let document = JSON.parse(data);
    console.log(document);
    setTrainee(document);
    if (data === null) {
      navigate("/original");
    }
  }, []);

  const convertToPdf = () => {
    // Define configuration options (optional)
    const options = {
      margin: 0,
      filename: "original docment.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    // Use html2pdf with the referenced content and options
    html2pdf().set(options).from(contentRef.current).save();
    sessionStorage.clear();
  };

  return (
    <>
      <Navbar />
      <p className="mt-20"></p>

      <div className="flex items-center justify-center">
        <div className="flex">
          <div className="mr-2">
            <button
              onClick={() => convertToPdf()}
              className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              <IoMdPrint className="" />
              &nbsp; Print
              {/* <span>Print</span> */}
            </button>
          </div>
          <div>
            <button
              onClick={() => navigate("/home")}
              className="flex items-center bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded"
            >
              <PiArrowArcLeftBold className="" />
              &nbsp; Go Back
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <section></section>

      <div ref={contentRef} className="w-5/6 mx-auto mt-10">
        <div className="flex">
          <img src={Logo} alt="logo" />
          <div>
            <div className="text-xl font-bold">
              Dow Universit of Health Sciences
            </div>
            <div className="text-xl font-bold  mt-1 mb-1">
              School of Postgraduate Studies
            </div>
          </div>
        </div>
        <div className=" text-center text-2xl font-bold mt-5 mb-2">
          ORIGINAL DOCUMENTS
        </div>
        <p className="text-right text-sm mt-8">
          Print Date: {dayjs(Date.now()).format("DD-MMM-YYYY")}
        </p>
        <p className="font-medium">
          The Principal
          <br />
          School of Postgraduate Studies
          <br />
          DUHS Karachi.
          <br />
          <br />{" "}
          <span className="font-medium">
            Subject: Request for Return of Original Documents.
          </span>
        </p>
        <br /> Respected Sir/Madam,
        <br />
        <p className="text-justify">
          <br /> I{" "}
          <span className="font-medium">
            {" "}
            {trainee.tname} S/o, D/o {trainee.fname}{" "}
          </span>{" "}
          , currently an FCPS / MCPS trainee in{" "}
          <span className="font-medium"> {trainee.pward} </span> at{" "}
          {trainee.pinst}&nbsp;respectfully request the return of my original
          documents which were submitted at the time of interview to Dow
          University of Health Sciences Karachi for verification / record
          purposes.
        </p>
        <br />
        REASON:
        <br />
        <p className="font-medium text-justify">{trainee.reason}</p>
        <br />
        <p className="text-justify">
          I request you to please return of my original documents at your
          earliest convenience. I shall be very grateful for your cooperation in
          this matter.
          <br />
          <br /> Thank you.
          <br /> Sincerely,
          <br />
          <br /> <span className="font-medium">{trainee.tname}</span>
          <br />
          <span className="text-sm">Signature </span>
        </p>
        {/* Footer */}
        <div className="mt-20 pb-1 font-medium text-center text-sm">
          Develop by School of Postgradate Studies. Dow University of Health
          Sciences Karachi
        </div>
      </div>
    </>
  );
}
