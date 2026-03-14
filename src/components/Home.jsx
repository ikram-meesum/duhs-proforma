import React from "react";
import Navbar from "./Navbar";
import { GiOpenBook } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa";
import { FaRectangleList } from "react-icons/fa6";
import { GiCometSpark } from "react-icons/gi";
import { Link } from "react-router";
import AnimationPage from "./AnimationPage";

export default function Home() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <AnimationPage>
        <h2 className="text-center font-semibold text-3xl text-slate-900">
          Welcome to School of Postgradate Studies
        </h2>
        <p className="text-center font-semibold text-base mt-2 text-slate-700">
          You can fill and download all types of Postgradate proforma.
        </p>
        <section className="text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <Link to={"/rotation"}>
                  <div className="bg-[#74d4ff] px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                    <FaClipboardList size={"40px"} className="inline-block" />
                    <h2 className="title-font font-medium text-3xl text-gray-900">
                      Rotation
                    </h2>
                    <p className="leading-relaxed">Application</p>
                  </div>
                </Link>
              </div>
              {/* second */}
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <Link to={"/leave"}>
                  <div className="bg-[#ff637e] px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                    <FaRectangleList size={"40px"} className="inline-block" />
                    <h2 className="title-font font-medium text-3xl text-gray-900">
                      Leaves
                    </h2>
                    <p className="leading-relaxed">Application</p>
                  </div>
                </Link>
              </div>
              {/* third */}
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <Link to={"/original"}>
                  <div className="bg-[#ffdf20] px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                    <GiOpenBook size={"40px"} className="inline-block" />
                    <h2 className="title-font font-medium text-3xl text-gray-900">
                      Document
                    </h2>
                    <p className="leading-relaxed">Application</p>
                  </div>
                </Link>
              </div>
              {/* forth */}
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="bg-[#bbf451] px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                  <GiCometSpark size={"40px"} className="inline-block" />
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    Coming Soon
                  </h2>
                  <p className="leading-relaxed">.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimationPage>
    </>
  );
}
