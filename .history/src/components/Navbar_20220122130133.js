import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-semibold text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
           Joseph Kitheka
          </a>
        </a>
             <nav className="md:mr-auto md:ml-4 md:py-1 md:border-1 md:border-gray-700 flex flex-wrap items-center text-base justify-center">
               <a href="#projects" className="mr-5 hover:bg-gray-900">
                 Past Work
               </a>
               <a href="#skills" className="mr-5 hover:bg-gray-900">
                 Skills
               </a>
               <a href="#testimonials" className="mr-5 hover:bg-gray-900">
                  Testimonials

               </a>
             </nav>
             <a className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-500">
               Work with me 
             </a>
        {/* <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>
        </nav> */}
        {/* <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a> */}
      </div>
    </header>
  );
}