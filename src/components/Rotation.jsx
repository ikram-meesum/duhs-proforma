import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link } from "react-router";
import { FaUserGraduate } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
// import { MdLocalHospital } from "react-icons/md";
import { RiHospitalFill } from "react-icons/ri";
import { FaHospitalAlt } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { AiFillPrinter } from "react-icons/ai";

import toast, { Toaster } from "react-hot-toast";
import dayjs from "dayjs";
import AnimationPage from "./AnimationPage";

export default function Rotation() {
  // const [rotation, setRotation] = useState([]);
  // const [items, setItems] = useState([]);
  // const [allRotation, setAllRotation] = useState([]);

  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("rotation");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const {
    register,
    //watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // const storedItems = JSON.parse(localStorage.getItem("rotation")) || [];
    // setAllRotation(storedItems);
    // console.log("use effect: ", storedItems);
    localStorage.setItem("rotation", JSON.stringify(items));
    console.log(items);
  }, [items]);

  const onSubmit = (data) => {
    console.log("all data: ", data);

    const newItem = {
      id: nanoid(9),
      tname: data.tname,
      fname: data.fname,
      pward: data.pward,
      pinst: data.pinst,
      fdate: data.fdate,
      tdate: data.tdate,
      rward: data.rward,
      rinst: data.rinst,
      created: Date.now(),
    };
    setItems((prevItems) => [...prevItems, newItem]);
    toast.success("Rotation created successfully! Please take a printout.");

    // navigate("/currentfcps");
  };
  return (
    <>
      <Navbar />
      <br />
      <br />
      <AnimationPage>
        <h2 className="text-3xl text-center font-bold text-slate-800 mt-9">
          School of Postgraduate Studies
        </h2>
        <h2 className="text-3xl text-center font-bold text-slate-800 mt-1 mb-2">
          Rotation Application
        </h2>
        <h2 className="text-sm text-center font-medium mb-9 text-slate-600">
          Create new FCPS-II Rotation Application
        </h2>

        <div
          className="flex items-center p-4 mt-6 mb-6 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 w-4/5 mx-auto"
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
            the rotation details for FCPS-II postgraduate trainees, you should
            ensure the information is accurate, complete, and matches as per
            CPSP requirements.
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 w-4/5 mx-auto">
          <h1 className="text-xl font-semibold mb-3">TRAINEE'S DETAILS</h1>
        </div>
        {/* start form */}
        <div className="flex items-center justify-center p-1">
          <div className="mx-auto `max-w-500` w-4/5 bg-white">
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

              <div className="mb-5 pt-3">
                <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                  ROTATION DETAILS
                </label>

                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <div className="flex">
                        <p className="mr-1 mt-1 text-[#07074D]">
                          <FaCalendarDays />
                        </p>
                        <label
                          // htmlFor="date"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          From Date
                        </label>
                      </div>
                      <input
                        type="date"
                        {...register("fdate", { required: true })}
                        // name="date"
                        // id="date"
                        className="w-full rounded-md border border-[#e0e0e0] bg-gray-50 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md"
                      />
                      {errors.fdate && (
                        <p className="text-red-700">Start date is required.</p>
                      )}
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <div className="flex">
                        <p className="mr-1 mt-1 text-[#07074D]">
                          <FaCalendarDays />
                        </p>
                        <label
                          // htmlFor="time"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          To Date
                        </label>
                      </div>
                      <input
                        type="date"
                        {...register("tdate", { required: true })}
                        // name="time"
                        // id="time"
                        className="w-full rounded-md border border-[#e0e0e0] bg-gray-50 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md"
                      />
                      {errors.tdate && (
                        <p className="text-red-700">End date is required.</p>
                      )}
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <div className="flex">
                        <p className="mr-1 mt-1 text-[#07074D]">
                          <RiHospitalFill />
                        </p>
                        <label
                          // htmlFor="time"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Rotation Department
                        </label>
                      </div>
                      <select
                        className="w-full rounded-md border border-[#e0e0e0] bg-gray-50 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md"
                        name="pets"
                        {...register("rward", { required: true })}
                        // id="pet-select"
                      >
                        <option value="ANAESTHESIOLOGY">ANAESTHESIOLOGY</option>
                        <option value="BREAST SURGERY">
                          BREAST SURGERY - 2ND FELLOW
                        </option>
                        <option value="CARDIAC SURGERY">CARDIAC SURGERY</option>
                        <option value="CARDIOLOGY">CARDIOLOGY</option>
                        <option value="COMMUNITY MEDICINE">
                          COMMUNITY MEDICINE
                        </option>
                        <option value="CHEMICAL PATHOLOGY">
                          CHEMICAL PATHOLOGY
                        </option>
                        <option value="CLINICAL HEMATOLOGY">
                          CLINICAL HEMATOLOGY
                        </option>
                        <option value="DERMATOLOGY">DERMATOLOGY</option>
                        <option value="ENDOCRINOLOGY">ENDOCRINOLOGY</option>
                        <option value="ENT UNIT-I">ENT UNIT-I</option>
                        <option value="ENT UNIT-II">ENT UNIT-II</option>
                        <option value="EYE UNIT-I">EYE UNIT-I</option>
                        <option value="EYE UNIT-II">EYE UNIT-II</option>
                        <option value="FORENSIC MEDICINE">
                          FORENSIC MEDICINE
                        </option>
                        <option value="FAMILY MEDICINE">FAMILY MEDICINE</option>
                        <option value="GASTROENTEROLOGY">
                          GASTROENTEROLOGY
                        </option>
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
                        <option value="MEDICAL UNIT-III">
                          MEDICAL UNIT-III
                        </option>
                        <option value="MEDICAL UNIT-IV">MEDICAL UNIT-IV</option>
                        <option value="MEDICAL UNIT-V">MEDICAL UNIT-V</option>
                        <option value="NEPHROLOGY">NEPHROLOGY</option>
                        <option value="NEUROLOGY">NEUROLOGY</option>
                        <option value="NEUROSURGERY">NEUROSURGERY</option>
                        <option value="ONCOLOGY">ONCOLOGY</option>
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
                        <option value="PAEDS ORTHOPEDIC-I">
                          PAEDS ORTHOPEDIC-I
                        </option>
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
                        <option value="SURGICAL UNIT-II">
                          SURGICAL UNIT-II
                        </option>
                        <option value="SURGICAL UNIT-III">
                          SURGICAL UNIT-III
                        </option>
                        <option value="SURGICAL UNIT-IV">
                          SURGICAL UNIT-IV
                        </option>
                        <option value="SURGICAL UNIT-V">SURGICAL UNIT-V</option>
                        <option value="SURGICAL UNIT-VI">
                          SURGICAL UNIT-VI
                        </option>
                        <option value="UROLOGY">UROLOGY</option>
                        <option value="VIR">VIR</option>
                        <option value="NEURO IMAGING">NEURO IMAGING</option>
                        <option value="WOMEN IMAGING">WOMEN IMAGING</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <div className="flex">
                        <p className="mr-1 mt-1 text-[#07074D]">
                          <FaHospitalAlt />
                        </p>
                        <label
                          // htmlFor="time"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Rotation Institute Name
                        </label>
                      </div>
                      <select
                        className="w-full rounded-md border border-[#e0e0e0] bg-gray-50 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md"
                        name="pets"
                        {...register("rinst", { required: true })}
                        // id="pet-select"
                      >
                        <option value="Dr Ruth KM Pfau, Civil Hospital Karachi">
                          Dr Ruth KM Pfau, Civil Hospital Karachi
                        </option>
                        <option value="Dow University Hospital">
                          Dow University Hospital
                        </option>
                        <option value="Dow Dental College">
                          Dow Dental College
                        </option>
                        <option value="Dow International Dental College">
                          Dow International Dental College
                        </option>
                        <option value="DIKIOHS, DUHS">DIKIOHS, DUHS</option>
                        <option value="OICD, DUHS">OICD, DUHS</option>
                        <option value="NIDE, DUHS">NIDE, DUHS</option>
                      </select>
                    </div>
                  </div>
                  {/* end */}
                </div>
              </div>

              <div>
                <button className="hover:shadow-form w-full rounded-md bg-blue-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Create Application
                </button>
                <Toaster
                  toastOptions={{
                    className: "font-semibold",
                    success: {
                      style: {
                        background: "#bbf451",
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
        <h2 className="text-2xl text-center mt-9 font-semibold text-slate-800 mb-2">
          DETAILS OF ALL ROTATIONS
        </h2>

        <section>
          <div className="rounded-lg mx-5 mt-5 overflow-hidden shadow-lg">
            <table
              id="my-table"
              className="w-full text-sm text-left rtl:text-right text-gray-500"
            >
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="bg-slate-900 rounded-lg text-white">
                  <th scope="col" className="pl-5 w-10 py-3">
                    S #
                  </th>

                  <th scope="col" className="pl-5 py-3">
                    TRAINEE NAME
                  </th>

                  <th scope="col" className="pl-5 py-3">
                    FATHER NAME
                  </th>

                  <th scope="col" className="pl-5 py-3">
                    PARENT DEPARTMENT
                  </th>

                  <th scope="col" className="pl-5 py-3">
                    ROTATION DEPARTMENT
                  </th>
                  <th scope="col" className="pl-5 py-3">
                    ROTATION INSTITUTE
                  </th>
                  <th scope="col" className="pl-5 py-3">
                    FROM
                  </th>

                  <th scope="col" className="pl-5 py-3">
                    TO
                  </th>

                  <th scope="col" className="py-3 pr-3">
                    PRINT
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.length > 0 &&
                  items.map((veh, ind) => {
                    return (
                      <tr
                        key={ind}
                        className="bg-white hover:bg-gray-100 odd:bg-white even:bg-gray-50"
                      >
                        <td className="pl-3 text-center py-3">{ind + 1}</td>

                        <td className="pl-3 font-medium text-gray-900">
                          {/* {prod.productname.substring(0, 35)}... */}
                          {veh.tname}
                        </td>

                        <td className="pl-3 font-medium text-gray-900">
                          {/* {prod.productname.substring(0, 35)}... */}
                          {veh.fname}
                        </td>

                        <td className="pl-3 text-gray-900">
                          {/* {prod.productname.substring(0, 35)}... */}
                          {veh.pward}
                        </td>

                        <td className="pl-3 text-gray-900">
                          {/* {prod.productname.substring(0, 35)}... */}
                          {veh.rward}
                        </td>

                        <td className="pl-3 text-gray-900">
                          {/* {prod.productname.substring(0, 35)}... */}
                          {veh.rinst}
                        </td>

                        <td className="pl-3 text-gray-900">
                          {/* {prod.productname.substring(0, 35)}... */}
                          {dayjs(veh.fdate).format("DD-MMM-YYYY")}
                        </td>
                        {/* <td className="mr-3 py-3">{veh.carrierInfo}</td>
                      <td className="mr-3 py-3">{veh.drivername}</td> */}

                        <td className="pl-3 text-gray-500">
                          {/* {veh.fdate} */}
                          {dayjs(veh.tdate).format("DD-MMM-YYYY")}
                        </td>

                        <td className="flex py-3">
                          {/* <Link to={`/edit/${veh._id}`}> */}
                          {/* <FaRegEdit size="19px" color="#0984e3" /> */}
                          {/* </Link> */}
                          {/* <Link className="ml-2" to={`/detail/${veh._id}`}>
                          {/* <BiSolidMessageSquareDetail
                            size="20px"
                            color="#00b894"
                          /> */}
                          {/* </Link> */}
                          <Link className="ml-2" to={`/report/${veh.id}`}>
                            {/* <TbReportSearch size="20px" color="#9b59b6" /> */}
                            <AiFillPrinter color="#0f172b" size={"18px"} />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </section>
        <p className="mt-8 mb-4 text-center font-semibold">
          Develop by School of Postgraduate Studies - Dow University of Health
          Sciences Karachi.
        </p>
      </AnimationPage>
    </>
  );
}
