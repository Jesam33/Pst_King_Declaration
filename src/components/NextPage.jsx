import React, { useState, useContext, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import TabContent from "./TabContent";
import Title from "./Title";
import TextContent from "./TextContent";
import Button from "./Button";
import pastorImg from "../assets/Logo.png";
import HouseJoy from "../assets/Group 8.png";
import vector from "../assets/Vector.png";
import Vector2 from "../assets/Social media 1.png";
import AGLogo from "../assets/AG_LOGO-removebg-preview.png";
import Vector3 from "../assets/youtube 1.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import InputContext from "../contexts/InputContext";
import SideBar from "./SideBar";
import Header from "./Header";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";

const App = () => {
  const {
    confession1,
    confession2,
    confession3,
    scripture1,
    scripture2,
    scripture3,
    setScripture1,
    setScripture2,
    setScripture3,
    setConfession1,
    setConfession2,
    setConfession3,
    counsel,
    prayer,
    setActiveTab,
    activeTab,
    prophecy,
    setProphecy,
    setCounsel,
    setPrayer,
    tabs,
    componentRef,
  } = useContext(InputContext);

 
  
  const navigate = useNavigate();
  const handleTabChange = (activeTab) => {
    if (activeTab === 0) {
      navigate("/");
    } else {
      navigate("/other");
    }
  };
  return (
    <div  className="flex w-full items-center">
      <SideBar />
      <div ref={componentRef} className=" heroImg text-white p-3 px-8 rounded-lg shadow-lg w-1/2 mx-auto my-auto"style={{
          backgroundSize: 'cover'  // Double the size
          }}>
        <Header />
        <div className="  w-flex ">
          <div className="flex justify-between  items-center mt-8">
            <div className="flex  h-full">
              {tabs.map((tab, index) => (
                <div
                  key={tab.id}
                  className={`h-1 w-8 mx-1 ${
                    index === activeTab ? "bg-[#4c1d95]" : "bg-gray-400"
                  }`}
                  style={{
                    borderRadius: index === activeTab ? "4px" : "4px",
                    height: "4px",
                  }}
                />
              ))}
            </div>

           
          </div>
          <div className="">
            <TabContent tab={tabs[activeTab]} />
            {/* Page Counter */}
            <div className="flex justify-between items-center mt2">
              <span className="linear rounded-[10px] px-[20px] text-[20px] quicksand py-2 hover:bg-green-500 text-white">
                {activeTab + 1}/{tabs.length}
              </span>
              {/* Navigation Buttons */}
            </div>
          </div>
        </div>

        {/* Confession Section */}

        {/* Footer Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-6 gap-4">
          <div className="flex items-center gap-2">
            <img src={AGLogo} className="w-[10%] lg:w-[12%]" alt="HouseJoy" />
            <div className=" border-l-2 px-2 items-center">
              <h2>Assemblies Of God Rumuolukwu</h2>
              {/* <h2>IKWERE DISTRICT</h2> */}
              <h2 className="italic text-purple-400">Come and be blessed ...</h2>
            </div>
           
          </div>
          <div className="flex gap-3 ">
              <h3 className="text-sm lg:text-[14px] flex gap-3 items-center italic text-purple-400 underline"><span className="text-white "><IoLogoYoutube className="text-[25px]" /></span> <a href="https://www.youtube.com/@REVISRAELKING">PASTOR ISRAEL KING</a></h3>

              <h3 className="text-sm lg:text-[14px] flex gap-3 items-center italic text-purple-400 underline"><span className="text-white "><FaFacebook className="text-[25px]" /></span> <a href="https://web.facebook.com/pstisrael.king">Pst Isreal King</a></h3>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default App;
