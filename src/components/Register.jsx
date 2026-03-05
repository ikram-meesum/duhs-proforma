import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

export default function Register() {
  let navigate = useNavigate();

  const login = () => {
    console.log("test");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // INSERT DATA
  const onSubmit = (data) => {
    console.log(data);

    const traineeData = {
      sname: data.sname,
      fname: data.fname,
      depart: data.depart,
    };

    // Convert object to string and save
    localStorage.setItem("trainee", JSON.stringify(traineeData));

    navigate("/rotation");

    // if (data.email == "raheel@gmail.com" && data.password == "12345") {
    //   // alert("ok");
    //   navigate("vehical");
    // } else {
    //   alert("Invalid username or password. Please try again.");
    // }
  };

  return (
    <>
      <div className="flex justify-center bg-black items-center h-screen">
        {/* <!-- Left: Image --> */}
        <div className="h-screen bg-black lg:block">
          <div className="mt-56">
            <h2 className="text-5xl mb-3 text-center font-bold uppercase">
              <span className="bg-linear-to-r from-pink-400 to-teal-300 via-purple-300 bg-clip-text text-transparent">
                dow university of health sciences
              </span>
            </h2>

            <h2 className="text-5xl mb-3 text-center font-bold uppercase">
              <span className="bg-linear-to-r from-pink-400 to-teal-300 via-purple-300 bg-clip-text text-transparent">
                school of postgraduate studies
              </span>
            </h2>

            <h2 className="text-5xl mb-3 text-center font-bold uppercase">
              <span className="bg-linear-to-r from-pink-400 to-teal-300 via-purple-300 bg-clip-text text-transparent">
                civil hospital - dow universit hospital
              </span>
            </h2>
          </div>
        </div>

        {/*
        
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          

          <div className="w-72">
            
            <h1 className="text-2xl font-semibold">Register Please</h1>
            <small className="text-gray-400">
              Please enter your valid information.
            </small>

            
            <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="mb-2 block text-sm font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  {...register("sname", { required: true })}
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1.5 px-2 text-gray-500"
                />
                {errors.sname && (
                  <p className="text-red-700 text-sm">
                    Trainee name is required.
                  </p>
                )}
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-sm font-semibold">
                  Father Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your father name"
                  {...register("fname", { required: true })}
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1.5 px-2 text-gray-500"
                />
                {errors.fname && (
                  <p className="text-red-700 text-sm">
                    Father name is required.
                  </p>
                )}
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-sm font-semibold">
                  Department Name
                </label>

                <select
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1.5 px-2 text-gray-500"
                  {...register("depart")}
                >
                  <option value={"ANAESTHESIA"}>ANAESTHESIA</option>
                  <option value={"BREAST SURGERY"}>BREAST SURGERY</option>
                  <option value={"CARDIOLOGY"}>CARDIOLOGY</option>
                </select>
              </div>

              <div className="mb-3 mt-5">
                <button
                  
                  className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
                >
                  Register Now
                </button>
              </div>
            </form>

            
          </div>
        </div>
        */}
      </div>
    </>
  );
}
