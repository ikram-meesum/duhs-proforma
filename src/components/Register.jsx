import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
// import { useForm } from "react-hook-form";

export default function Register() {
  let navigate = useNavigate();

  setTimeout(() => {
    console.log("navigation");
    navigate("/home");
  }, 3000);

  return (
    <>
      <div className="flex justify-center bg-black flex-col m-auto h-screen">
        <div className="mx-auto p-8 md:p-12 my-10 uppercase">
          <div>
            <h2 className="sm:text-2xl md:text-4xl lg:text-5xl mb-3 text-center font-bold uppercase bg-linear-to-r from-blue-500 to-gray-300 bg-clip-text text-transparent">
              dow university of health sciences
            </h2>
          </div>
          <div>
            <h2 className="sm:text-2xl md:text-4xl lg:text-5xl mb-3 text-center font-bold uppercase bg-linear-to-r from-blue-500 to-gray-300 bg-clip-text text-transparent">
              school of postgraduate studies
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
