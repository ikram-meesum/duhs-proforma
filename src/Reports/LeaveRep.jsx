// import React from 'react'
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
    let data = sessionStorage.getItem("leave");
    let document = JSON.parse(data);
    console.log(document);
    setTrainee(document);
    if (data === null) {
      navigate("/leave");
    }
  }, []);

  const date1 = dayjs(trainee.tdate);
  const date2 = dayjs(trainee.fdate);

  // Calculate the difference in days
  const daysDifference = date1.diff(date2, "day");
  console.log(daysDifference);
  let total = trainee.reason;
  // console.log("total: ", total.length);

  const convertToPdf = () => {
    // Define configuration options (optional)
    const options = {
      margin: 0,
      filename: "leave application.pdf",
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
      <div>Leave Application</div>
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

      <div ref={contentRef} className="w-5/6 mx-auto mt-10">
        <div className="flex">
          <img src={Logo} alt="logo" />
          <div>
            <div className="text-xl font-bold uppercase">
              Dow Universit of Health Sciences
            </div>
            <div className=" font-bold uppercase mt-1 mb-1">
              School of Postgraduate Studies
            </div>
          </div>
        </div>
        <div className=" text-center text-2xl font-bold mt-5 mb-2">
          LEAVE APPLICATION
        </div>
        <div className=" text-center font-bold mt-1 mb-2">
          FCPS-II & MCPS TRAINEES
        </div>
        <p className="text-right text-sm mt-8 mb-3">
          Print Date: {dayjs(Date.now()).format("DD-MMM-YYYY")}
        </p>
        <div className="text-justify">
          {/* <p className="text-sm"> //border p-4 rounded-lg  */}
          <p className="text-sm">
            <span className="font-medium">Applicant Instructions:</span>
            <br />
            Postgraduate trainees must submit their leave application at least
            15 days prior to the intended date of leave. The application must be
            duly forwarded by the Parent Unit Supervisor. In case of rotation,
            the application must be forwarded by both the Parent and Rotation
            Supervisors. All leaves exceeding four days will be considered as a
            deficit and must be completed without pay.{" "}
            <span className="font-medium">
              You are allowed 15 days leave every 6 months.
            </span>
            <br />
          </p>

          {/* <span className="font-medium">
            The Principal <br /> School of Postgraduate Studies <br /> Dow
            University of Health Sciences <br /> Karachi
          </span> */}

          {/* <p>Respected Sir / Madam</p> */}
        </div>
        {/* <section>
          <div className="flex">
            <div className="border flex">
              <p>Trainee Name</p>
              <p>{trainee.tname}</p>
            </div>
            <div>
              <p>Father Name</p>
              <p>{trainee.fname}</p>
            </div>
          </div>
        </section> */}
        <p className="text-justify">
          <br /> I{" "}
          <span className="font-medium">
            {" "}
            {trainee.tname} S/o, D/o {trainee.fname}{" "}
          </span>{" "}
          currently an FCPS / MCPS trainee in{" "}
          <span className="font-medium"> {trainee.pward} </span> at{" "}
          {trainee.pinst}&nbsp;respectfully request that I may be granted{" "}
          {/* <span className="font-medium">{trainee.reason}</span> */}
          for {/* {trainee.fdate.diff(trainee.tdate, "day")}  */}
          <span className="font-medium">{daysDifference + 1} days</span> from
          <span className="font-medium">
            {" "}
            {trainee.fdate} to {trainee.tdate}.
          </span>{" "}
          Kindly grant me leave for the mentioned days. I shall be very thankful
          for your consideration.
          <br />
          <br />
        </p>
        <p className="font-medium h-28 text-justify">
          REASON: {trainee.reason}
          {/* {trainee.reason.length} */}
          <br />
          <br />
        </p>
        Remarks by HOD / Supervisor:
        ____________________________________________________________________
        <p className="mt-5">
          _____________________________________________________________________________________________________
        </p>
        <p className="text-right">HOD / Supervisor Signature with Stamp</p>
        <p className="mt-5">
          Remarks by Principal of SPGS:
          ____________________________________________________________________
        </p>
        <p className="mt-5">
          _____________________________________________________________________________________________________
        </p>
        <p className="text-right">Principal SPGS Signature with Stamp</p>
        <p className="mt-9">
          <span className="font-medium">Applicant Signature</span>
          <br />
          {/* {trainee.pward} */}
          <span className="text-sm">{trainee.cmsid}</span>
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
