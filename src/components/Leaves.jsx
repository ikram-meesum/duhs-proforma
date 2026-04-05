import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

import { useNavigate } from "react-router";

import { useForm, useWatch, useFormContext } from "react-hook-form";
import { nanoid } from "nanoid";
// import { Link } from "react-router";
import { FaUserGraduate } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { RiHospitalFill } from "react-icons/ri";
import { FaHospitalAlt } from "react-icons/fa";
// import { FaCalendarDays } from "react-icons/fa6";
// import { AiFillPrinter } from "react-icons/ai";
import { IoMdListBox } from "react-icons/io";

import toast, { Toaster } from "react-hot-toast";
import AnimationPage from "./AnimationPage";
// import dayjs from "dayjs";

export default function Leaves() {
  const navigate = useNavigate();
  // const { control } = useFormContext();

  const [trainee, setTrainee] = useState([]);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const inputNameValue = useWatch({
  //   control,
  //   name: "reason",
  //   defaultValue: "",
  // });
  const MAX_LENGTH = 370;

  const onSubmit = (data) => {
    console.log("all data: ", data);

    const newItem = {
      id: nanoid(9),
      tname: data.tname,
      fname: data.fname,
      pward: data.pward,
      pinst: data.pinst,
      reason: data.reason,
      cmsid: data.cmsid,
      doj: data.doj,
      fdate: data.fdate,
      tdate: data.tdate,
    };
    // setItems((prevItems) => [...prevItems, newItem]);
    window.sessionStorage.setItem("leave", JSON.stringify(newItem));
    setTrainee(newItem);
    toast.success(
      "Leave application created successfully! Please take a printout and submit in School of Postgraduate Studies.",
    );

    setTimeout(() => {
      console.log("Leave Application.");
      navigate("/leavereport");
    }, 4000);

    // navigate("/currentfcps");
  };

  return (
    <section>
      <Navbar />
      <br />
      <br />
      <br />
      <AnimationPage>
        <br />
        <h2 className="text-center text-2xl font-medium text-slate-900">
          Leave Application for FCPS & MCPS Trainees
        </h2>
        <h2 className="text-center text-xl mb-10 text-slate-900">
          Generate your leave application
        </h2>

        <div
          className="flex items-center p-4 mt-6 mb-6 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 w-3/5 mx-auto"
          role="alert"
        >
          <svg
            className="shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Important Message!</span> Please fill
            the leave details for FCPS-II / MCPS postgraduate trainees, you
            should ensure the information is accurate, complete, and matches as
            per CPSP requirements.
          </div>
        </div>

        {/* start form */}
        <div className="flex items-center justify-center p-1">
          <div className="mx-auto `max-w-500` w-3/5 bg-white">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5">
                <div className="flex">
                  <p className="mr-1 mt-1 text-[#07074D]">
                    <FaUserGraduate />
                  </p>
                  <label
                    // htmlFor="name"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Trainee's Full Name
                  </label>
                </div>
                <input
                  type="text"
                  {...register("tname", { required: true })}
                  // name="name"
                  // id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md bg-gray-50 border border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md"
                />
                {errors.tname && (
                  <p className="text-red-700">Trainee name is required.</p>
                )}
              </div>
              <div className="mb-5">
                <div className="flex">
                  <p className="mr-1 mt-1 text-[#07074D]">
                    <FaUserTie />
                  </p>
                  <label
                    // htmlFor="phone"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Father Name
                  </label>
                </div>
                <input
                  type="text"
                  {...register("fname", { required: true })}
                  // name="phone"
                  // id="phone"
                  placeholder="Enter your father name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-gray-50 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md"
                />
                {errors.fname && (
                  <p className="text-red-700">Father name is required.</p>
                )}
              </div>
              <div className="mb-5">
                <div className="flex">
                  <p className="mr-1 mt-1 text-[#07074D]">
                    <RiHospitalFill />
                  </p>
                  <label
                    // htmlFor="email"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Parent Department
                  </label>
                </div>
                <select
                  className="w-full rounded-md border border-[#e0e0e0] bg-gray-50 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md"
                  name="pets"
                  // id="pet-select"
                  {...register("pward", { required: true })}
                >
                  <option value="">PLEASE SELECT...</option>
                  <option value="ANAESTHESIOLOGY">ANAESTHESIOLOGY</option>
                  <option value="BREAST SURGERY - 2ND FELLOW">
                    BREAST SURGERY - 2ND FELLOW
                  </option>
                  <option value="CARDIAC SURGERY">CARDIAC SURGERY</option>
                  <option value="CARDIOLOGY">CARDIOLOGY</option>
                  <option value="COMMUNITY MEDICINE">COMMUNITY MEDICINE</option>
                  <option value="CHEMICAL PATHOLOGY">CHEMICAL PATHOLOGY</option>
                  <option value="CLINICAL HEMATOLOGY">
                    CLINICAL HEMATOLOGY
                  </option>
                  <option value="DERMATOLOGY">DERMATOLOGY</option>
                  <option value="ENDOCRINOLOGY">ENDOCRINOLOGY</option>
                  <option value="ENT UNIT-I">ENT UNIT-I</option>
                  <option value="ENT UNIT-II">ENT UNIT-II</option>
                  <option value="EYE UNIT-I">EYE UNIT-I</option>
                  <option value="EYE UNIT-II">EYE UNIT-II</option>
                  <option value="FORENSIC MEDICINE">FORENSIC MEDICINE</option>
                  <option value="FAMILY MEDICINE">FAMILY MEDICINE</option>
                  <option value="GASTROENTEROLOGY">GASTROENTEROLOGY</option>
                  <option value="GYNAE UNIT-I">GYNAE UNIT-I</option>
                  <option value="GYNAE UNIT-II">GYNAE UNIT-II</option>
                  <option value="GYNAE UNIT-III">GYNAE UNIT-III</option>
                  <option value="HEPATO-PANCREATO-BILIARY & LIVER-TRANSPLANT SURGERY">
                    HEPATO-PANCREATO-BILIARY & LIVER-TRANSPLANT SURGERY
                  </option>
                  <option value="HISTOPATHOLOGY">HISTOPATHOLOGY</option>
                  <option value="INFECTIOUS DISEASES">
                    INFECTIOUS DISEASES
                  </option>
                  <option value="INTERVENTIONAL CARDIOLOGY">
                    INTERVENTIONAL CARDIOLOGY{" "}
                  </option>
                  <option value="LAB HEMATOLOGY">LAB HEMATOLOGY</option>
                  <option value="MEDICAL UNIT-I">MEDICAL UNIT-I</option>
                  <option value="MEDICAL UNIT-II">MEDICAL UNIT-II</option>
                  <option value="MEDICAL UNIT-III">MEDICAL UNIT-III</option>
                  <option value="MEDICAL UNIT-IV">MEDICAL UNIT-IV</option>
                  <option value="MEDICAL UNIT-V">MEDICAL UNIT-V</option>
                  <option value="NEPHROLOGY">NEPHROLOGY</option>
                  <option value="NEUROLOGY">NEUROLOGY</option>
                  <option value="NEUROSURGERY">NEUROSURGERY</option>
                  <option value="OPERATIVE DENTISTRY">
                    OPERATIVE DENTISTRY
                  </option>
                  <option value="ORTHODONTICS">ORTHODONTICS</option>
                  <option value="ORAL & MAXILLOFACIAL SURGERY">
                    ORAL & MAXILLOFACIAL SURGERY
                  </option>
                  <option value="ORTHOPEDIC-I">ORTHOPEDIC-I</option>
                  <option value="ORTHOPEDIC-II">ORTHOPEDIC-II</option>
                  <option value="PAEDIATRICS-I">PAEDIATRICS-I</option>
                  <option value="PAEDIATRICS-II">PAEDIATRICS-II</option>
                  <option value="PAEDIATRICS-III">PAEDIATRICS-III</option>
                  <option value="PAEDS ORTHOPEDIC-I">PAEDS ORTHOPEDIC-I</option>
                  <option value="PAEDS ORTHOPEDIC-II">
                    PAEDS ORTHOPEDIC-II
                  </option>
                  <option value="PAEDS SURGERY">PAEDS SURGERY</option>
                  <option value="PAEDS OPHTHALMOLOGY">
                    PAEDS OPHTHALMOLOGY
                  </option>
                  <option value="PHYSICAL MEDICINE & REHABILITATION">
                    PHYSICAL MEDICINE & REHABILITATION
                  </option>
                  <option value="PLASTIC SURGERY">PLASTIC SURGERY</option>
                  <option value="PROSTHODONTICS">PROSTHODONTICS</option>
                  <option value="PSYCHIATRY">PSYCHIATRY</option>
                  <option value="PULMONOLOGY">PULMONOLOGY</option>
                  <option value="RADIOLOGY">RADIOLOGY</option>
                  <option value="SURGICAL UNIT-I">SURGICAL UNIT-I</option>
                  <option value="SURGICAL UNIT-II">SURGICAL UNIT-II</option>
                  <option value="SURGICAL UNIT-III">SURGICAL UNIT-III</option>
                  <option value="SURGICAL UNIT-IV">SURGICAL UNIT-IV</option>
                  <option value="SURGICAL UNIT-V">SURGICAL UNIT-V</option>
                  <option value="SURGICAL UNIT-VI">SURGICAL UNIT-VI</option>
                  <option value="UROLOGY">UROLOGY</option>
                  <option value="VIR">VIR</option>
                  <option value="NEURO IMAGING">NEURO IMAGING</option>
                  <option value="WOMEN IMAGING">WOMEN IMAGING</option>
                </select>
                {errors.pward && (
                  <p className="text-red-700">Please select parent ward.</p>
                )}
              </div>
              {/*  */}
              <div className="mb-5">
                <div className="flex">
                  <p className="mr-1 mt-1 text-[#07074D]">
                    <FaHospitalAlt />
                  </p>
                  <label
                    // htmlFor="email"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Parent Institute Name
                  </label>
                </div>
                <select
                  className="w-full rounded-md border border-[#e0e0e0] bg-gray-50 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md"
                  name="pets"
                  {...register("pinst", { required: true })}
                  // id="pet-select"
                >
                  <option value="Dr Ruth KM Pfau, Civil Hospital Karachi">
                    Dr Ruth KM Pfau, Civil Hospital Karachi
                  </option>
                  <option value="Dow University Hospital">
                    Dow University Hospital
                  </option>
                  <option value="Dow Dental College">Dow Dental College</option>
                  <option value="Dow International Dental College">
                    Dow International Dental College
                  </option>
                  <option value="DIKIOHS, DUHS">DIKIOHS, DUHS</option>
                  <option value="OICD, DUHS">OICD, DUHS</option>
                  <option value="NIDE, DUHS">NIDE, DUHS</option>
                </select>
              </div>

              <div className="mb-5">
                <div className="flex">
                  <p className="mr-1 mt-1 text-[#07074D]">
                    <IoMdListBox />
                  </p>
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Reason
                  </label>
                </div>
                <input
                  type="text"
                  {...register("reason", {
                    required: true,
                    maxLength: MAX_LENGTH,
                  })}
                  // name="phone"
                  // id="phone"
                  placeholder="Enter your reason"
                  className="w-full rounded-md border border-[#e0e0e0] bg-gray-50 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md"
                />
                {watch("reason") && watch("reason").length > 0 ? (
                  <div className="text-blue-400">
                    Character Count: {watch("reason").length} / {MAX_LENGTH}
                    {/* {watch("reason") ? watch("reason").length / MAX_LENGTH : ""} */}
                  </div>
                ) : (
                  ""
                )}

                {errors.reason && errors.reason.type === "maxLength" && (
                  <span className="text-red-700">
                    Max length exceeded (370 characters)
                  </span>
                )}

                {errors.reason && errors.reason.type === "required" && (
                  <span className="text-red-700">This field is required</span>
                )}

                {/* {errors.reason && (
                <p className="text-red-700">Reason is required.</p>
              )} */}
              </div>

              <div className="mb-5">
                <div className="flex">
                  <p className="mr-1 mt-1 text-[#07074D]">
                    <IoMdListBox />
                  </p>
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    CMS ID / Enrollment #
                  </label>
                </div>
                <input
                  type="text"
                  {...register("cmsid", { required: true })}
                  // name="phone"
                  // id="phone"
                  placeholder="Enter your cms id or enrollment #"
                  className="w-full rounded-md border border-[#e0e0e0] bg-gray-50 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md"
                />
                {errors.cmsid && (
                  <p className="text-red-700">CMS Id is required.</p>
                )}
              </div>

              <div className="mb-5">
                <div className="flex">
                  <p className="mr-1 mt-1 text-[#07074D]">
                    <IoMdListBox />
                  </p>
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    First date of joining
                  </label>
                </div>
                <input
                  type="date"
                  {...register("doj", { required: true })}
                  // name="phone"
                  // id="phone"
                  placeholder="Enter your first date of joining"
                  className="w-full rounded-md border border-[#e0e0e0] bg-gray-50 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md"
                />
                {errors.doj && (
                  <p className="text-red-700">
                    First date of joining is required.
                  </p>
                )}
              </div>

              <div className="mb-5">
                <div className="flex">
                  <p className="mr-1 mt-1 text-[#07074D]">
                    <IoMdListBox />
                  </p>
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Leave from date
                  </label>
                </div>
                <input
                  type="date"
                  {...register("fdate", { required: true })}
                  // name="phone"
                  // id="phone"
                  placeholder="Enter your first date of joining"
                  className="w-full rounded-md border border-[#e0e0e0] bg-gray-50 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md"
                />
                {errors.fdate && (
                  <p className="text-red-700">Leave from date is required.</p>
                )}
              </div>

              <div className="mb-5">
                <div className="flex">
                  <p className="mr-1 mt-1 text-[#07074D]">
                    <IoMdListBox />
                  </p>
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Leave To date
                  </label>
                </div>
                <input
                  type="date"
                  {...register("tdate", { required: true })}
                  // name="phone"
                  // id="phone"
                  placeholder="Enter your first date of joining"
                  className="w-full rounded-md border border-[#e0e0e0] bg-gray-50 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md"
                />
                {errors.tdate && (
                  <p className="text-red-700">Leave to date is required.</p>
                )}
              </div>

              <div>
                <button className="mt-3 hover:shadow-form w-full rounded-md bg-blue-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Create Leave Application
                </button>
                <Toaster
                  toastOptions={{
                    // className: "font-medium",
                    success: {
                      style: {
                        background: "#e0ffff",
                      },
                    },
                    error: {
                      style: {
                        background: "red",
                      },
                    },
                  }}
                />
              </div>
            </form>
          </div>
        </div>

        {/* end form */}
        <div className="w-3/5 m-auto">
          <div className="mt-20 py-3 font-medium text-center text-sm">
            <p className="border border-slate-600 text-slate-700 mb-2"></p>
            Develop by School of Postgradate Studies. Dow University of Health
            Sciences Karachi
          </div>
        </div>
      </AnimationPage>
    </section>
  );
}
