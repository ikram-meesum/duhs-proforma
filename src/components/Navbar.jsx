import React from "react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <section>
      <nav className="bg-slate-900 text-white fixed w-full z-20 top-0 start-0 border-b border-default">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to={"/"}
            // href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-7"
              alt="Flowbite Logo"
            /> */}
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
              <span className="text-blue-400">DUHS</span> SPGS
            </span>
          </Link>
        </div>
      </nav>
    </section>
  );
}
