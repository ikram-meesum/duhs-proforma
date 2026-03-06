import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import { useRef } from "react";
import dayjs from "dayjs";
// import generatePDF from "react-to-pdf";
// import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";
// import Logo from "./duhs-logo.png";
// import Logo from "/public/duhs-logo.png";
import { IoMdPrint } from "react-icons/io";
// Import Logo
// import imgUrl from "/public/duhs-logo.png";
// document.getElementById("logo").src = imgUrl;

export default function RotationRep() {
  const { id } = useParams();
  // console.log(id);
  const navigate = useNavigate();

  const contentRef = useRef(null);

  const [student, setStudent] = useState(() => {
    const savedName = sessionStorage.getItem("sessionCart");
    return savedName ? JSON.parse(savedName) : "";
  });

  console.log("before", student);
  // navigate(0);

  let finalData = null;
  // let studentObj = {};

  useEffect(() => {
    const trainee = localStorage.getItem("rotation");
    let data = JSON.parse(trainee);

    console.log("after");
    // console.log("abc", data);

    let i = null;
    for (i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        console.log("xyz", data[i]);
        finalData = data[i];
        console.log("final: ", finalData);
        // const jsonString = JSON.parse(finalData);
        // console.log("parse: ", jsonString);
        // const jsonString = JSON.stringify(finalData);
        // sessionStorage.setItem("sessionCart", jsonString);

        setStudent(finalData);
      }
    }
  }, [finalData]);

  console.log("student state: ", student);

  const convertToPdf = () => {
    // Define configuration options (optional)
    const options = {
      margin: 0,
      filename: "rotation.pdf",
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
      <br />
      <br />
      <br />
      <br />

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
            <button className="flex items-center bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded">
              <IoMdPrint className="" />
              &nbsp; Go Back
            </button>
          </div>
        </div>
      </div>

      <section ref={contentRef} className="px-8 pt-5 mx-3">
        <div className="flex">
          <img src={"/public/duhs-logo.PNG"} alt="duhs log" />
          {/* <img src="" id="logo" alt="logo" /> */}
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
          ROTATION APPLICATION
        </div>

        <p className="text-right text-sm">
          Print Date: {dayjs(Date.now()).format("DD-MMM-YYYY")}
        </p>
        <p className="text-right text-sm">
          Created Date: {dayjs(student.created).format("DD-MMM-YYYY")}
        </p>

        {/* <h2 className="text-sm text-center font-medium mb-9 text-slate-600">
          Print FCPS-II Rotation Application
        </h2> */}

        <p>
          <span className="font-bold">Applicant Instructions: </span>
        </p>
        <p className="text-justify">
          <br />
          Postgraduate trainees must submit their rotation application at least
          <span className="font-bold"> 15 days</span> prior to the intended date
          of joining. The application must be duly forwarded through both the
          <span className="font-bold">
            {" "}
            parent unit and the rotation unit.
          </span>{" "}
          For external candidates, a No Objection Certificate (NOC) must be
          submitted along with the rotation application.
        </p>
        <br />
        <br />
        {/*  */}
        {console.log("size: ", student.tname)}
        <div className="text-justify">
          Dr{" "}
          <span className="font-bold">
            {" "}
            {student.tname} S/o D/o {student.fname}{" "}
          </span>{" "}
          FCPS-II postgraduate trainee of{" "}
          <span className="font-bold">{student.pward}</span> at{" "}
          <span className="font-bold">{student.pinst}</span> wants to do
          rotation in the <span className="font-bold">{student.rward}</span>{" "}
          department at <span className="font-bold">{student.rinst}</span>{" "}
          Karachi from{" "}
          <span className="font-bold">
            {dayjs(student.fdate).format("DD-MMM-YYYY")}
          </span>{" "}
          to{" "}
          <span className="font-bold">
            {dayjs(student.tdate).format("DD-MMM-YYYY")}
          </span>
          . <br />
          <br /> Kindly allow the rotation and issue me a letter.
          <br /> Remarks or comments for the HOD / Supervisor
          ________________________________________________________
          <br />
          <br />
          _____________________________________________________________________________________________________________
          <br />
          <p className="mt-24"></p>
          ______________________________________
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          ________________________________________ <br />
          Parent HOD / Supervisor with stamp
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Rotation HOD / Supervisor with stamp
          <br />
          <br />
          <br />
          <br />
          _________________________________________ <br />
          <span className="font-medium">
            Vice-Principal / Program Coordinator
          </span>{" "}
          <br /> School of Postgraduate Studies <br /> Dow University of Health
          Sciences Karachi
        </div>
        {/* end */}
        <br />
        <div className="mt-10 pb-1 font-medium text-center text-sm">
          Develop by School of Postgradate Studies. Dow University of Health
          Sciences Karachi
        </div>
        {/* {student && student.map((std, ind) => <div key={key}></div>)} */}

        {/*  */}
      </section>
    </>
  );
}
