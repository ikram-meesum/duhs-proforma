import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
// import { useForm } from "react-hook-form";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import { motion, easeOut } from "framer-motion";
// import { easeOut } from "framer-motion";

export default function Register() {
  const { width, height } = useWindowSize();
  let navigate = useNavigate();

  setTimeout(() => {
    console.log("navigation");
    navigate("/home");
  }, 7000);

  return (
    <>
      <Confetti width={width} height={height} />
      <div className="flex justify-center bg-slate-950 flex-col m-auto h-screen">
        <div className="mx-auto p-8 md:p-12 my-10 uppercase">
          <div>
            <motion.h2
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: easeOut }}
              className="sm:text-2xl md:text-4xl lg:text-5xl mb-3 text-center font-bold uppercase bg-linear-to-r from-blue-500 to-gray-300 bg-clip-text text-transparent"
            >
              dow university of health sciences
            </motion.h2>
          </div>
          <div>
            <motion.h2
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: easeOut }}
              className="sm:text-2xl md:text-4xl lg:text-5xl mb-3 text-center font-bold uppercase bg-linear-to-r from-blue-500 to-gray-300 bg-clip-text text-transparent"
            >
              school of postgraduate studies
            </motion.h2>
          </div>
        </div>
      </div>
    </>
  );
}
