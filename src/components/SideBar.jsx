import React from 'react'
import { Link } from 'react-router-dom' 
import HouseJoy from "../assets/Group 8.png";
import AGLogo from "../assets/AG_LOGO-removebg-preview.png";

const SideBar = () => {
  return (
    <div className="  hidden w-[20%] lg:flex flex-col h-screen bg-white">
          <div className="px-5 heroImg py-5">
            {/* <img src={HouseJoy} className="w-40" alt="" /> */}
            <div className="flex items-center gap-2">
            <img src={AGLogo} className="w-[12%] lg:w-[14%]" alt="HouseJoy" />
            <div className=" border-l-2 px-2 items-center">
              <h2 className='text-white'>Assemblies Of God Rumuolukwu, Eneka</h2>
              {/* <h2>IKWERE DISTRICT</h2> */}
              <h2 className="italic text-purple-400">Come and be blessed ...</h2>
            </div>
           
          </div>
          </div>
          <div className="mt-4 \ px-2">
            <Link
              className="w-full block  border-2 border-[#1e2d52] shadow-lg font-[500] px-5 py-4 rounded-[5px]"
              to="/"
            >
              Home
            </Link>

            <Link
              className="w-full block border-2 border-[#1e2d52] shadow-lg  font-[500] px-5 py-4 rounded-[5px] mt-3"
              to="/form"
            >
              Dashboard
            </Link>

            <Link
              className="w-full block border-2 border-[#1e2d52] shadow-lg font-[500] px-5 py-4 rounded-[5px] mt-3"
              to="/slide"
            >
              Slides
            </Link>
          </div>

          <div className="px-11  mt-auto border-t-2 border-gray-400 py-4">
            <p className="text-center quicksand text-gray-500 text-sm">
              &copy; 2023 DVC Global. All rights reserved.
            </p>
          </div>
        </div>

  )
}

export default SideBar
