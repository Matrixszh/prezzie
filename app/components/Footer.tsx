import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.png";

const Footer = () => {
  return (
    <div className="flex flex-col gap-20 justify-center items-center">
      <div>
        <div className="lg:flex lg:flex-row lg:gap-[40px] lg:w-full lg:px-[100px] py-20 font-Jakarta sm:flex sm:flex-col sm:text-center sm:gap-0 sm:px-8 md:w-full ">
          <div className="lg:flex lg:items-center">
            <p className="text-[34px] font-extrabold tracking-tighter text-center md:text-[40px] lg:text-[84px] lg:leading-[84px] lg:text-left md:text-center">
              Let&apos;s <br className="hidden" />{" "}
              <span className="text-blue-800">Connect</span>
            </p>
          </div>
          <div className="bg-gray-400" />
          <div className="lg:flex w-fit sm:flex sm:flex-col md:flex md:flex-row md:mt-4">
            <div className="flex flex-col p-6 items-center w-fit max-sm:p-10 max-sm:items-center max-sm:justify-center">
              <p className="lg:text-3xl font-Jost">Qawi Shaikh</p>
              <div className="flex flex-col mt-[18px] font-Jost text-center gap-1 text-black text-opacity-75 max-sm:text-[15px]">
                <p>8919533978</p>
                <p>qawishaikh17@gmail.com</p>
              </div>
              <div className="mt-2 flex flex-col gap-1 text-black text-opacity-75 max-sm:text-[15px]">
                <p className="text-center font-Jost">
                  Hyderabad,
                  <br className="sm:hidden lg:block" /> Telengana
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white w-full text-black py-8 px-4">
        <div className="mx-auto">
          <div className="flex flex-row items-center justify-between">
            {/* Logo on the left */}
            <div className="flex-shrink-0">
              <Image
                src={logo}
                alt="Logo"
                className="h-20 w-20"
              />
            </div>

            {/* Copyright in the center */}
            <div className="flex-grow text-center">
              <span className="uppercase text-black tracking-[0.3em] font-medium font-Jost text-sm sm:text-base">
               <span className="text-blue-800 font-Jost">© PRE</span>ZZIE
              </span>
            </div>

            {/* Social Icons on the right */}
            <div className="flex space-x-4 flex-shrink-0">
             
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
