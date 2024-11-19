import React, { useState, useContext, useRef } from "react";
import InputContext from "../contexts/inputContext";
import { Link, useNavigate } from "react-router-dom";
import Title from "./Title";
import TextContent from "./TextContent";
import Button from "./Button";
import pastorImg from "../assets/Logo.png";
import AGLogo from "../assets/AG_LOGO-removebg-preview.png";
import vector from "../assets/Vector.png";
import Vector2 from "../assets/Social media 1.png";
import Vector3 from "../assets/youtube 1.png";
import SideBar from "./SideBar";
import Header from "./Header";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { BiLogoYoutube } from "react-icons/bi";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";

const DailyVictory = () => {
  const navigate = useNavigate();
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
    prophecy,
    setProphecy,
    setCounsel,
    setPrayer,
    componentRef,
  } = useContext(InputContext);

  const handleConfession = () => {
    navigate("/slide");
  };

  function insertLineBreaks(prayer) {
    return `~ ${String(prayer)
      .replace("~", "")
      .split("~")
      .join("<br/> <br/> ~ ")}`;
  }

  return (
    <div
    ref={componentRef}
      className="flex w-full items-center"
    >
      <SideBar />
      <div  className="heroImg text-white p-3 lg:p-8 rounded-lg shadow-lg w-full lg:w-1/2 mx-auto my-auto">
        <Header />

        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <Title
              text="MY CONFESSION:"
              className="text-lg lg:text-2xl font-semibold text-purple-400"
            />
          </div>

          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10">
            <div onClick={handleConfession} className="lg:w-1/2 space-y-5 mt-4">
              {/** Confession sections with responsive text sizes */}
              <div className="w-full flex flex-col gap-1">
                <TextContent
                  text={confession1 || "no default text"}
                  className="text-base lg:text-lg font-light"
                />
                <TextContent
                  text={scripture1 || "no default text"}
                  className="my-1 text-sm lg:text-base linearColor"
                />
              </div>
            </div>

            <div className="linear w-full lg:w-1/2 p-4 rounded-xl mb-4">
              <Title
                text="My Special prayers for you today:" className="text-xl text-purple-400 uppercase"
              />
              <TextContent
                innerHtml={insertLineBreaks(prayer)}
                className="text-base lg:text-lg"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <div className="lg:w-1/2 mb-4">
            <Title
              text="COUNSEL"
              className="text-lg lg:text-2xl linearColor my-2"
            />
            <TextContent
              text={counsel || "no default text"}
              className="text-base lg:text-lg font-light"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center mt-6 gap-4">
          <div className="flex items-center gap-2">
            <img src={AGLogo} className="w-[10%] lg:w-[12%]" alt="HouseJoy" />
            <div className=" border-l-2 px-2 items-center">
              <h2>Assemblies Of God Rumuolukwu, Eneka</h2>
              {/* <h2>IKWERE DISTRICT</h2> */}
              <h2 className="italic text-purple-400">Come and be blessed ...</h2>
            </div>
           
          </div>
          <div className="flex gap-3 ">
              <h3 className="text-sm lg:text-[14px] flex gap-3 items-center italic text-purple-400 underline"><span className="text-white "><IoLogoYoutube className="text-[25px]" /></span> <a href="https://www.youtube.com/@REVISRAELKING">PASTOR ISRAEL KING</a></h3>

              <h3 className="text-sm lg:text-[14px] flex gap-3 items-center italic text-purple-400 underline"><span className="text-white "><FaFacebook className="text-[25px]" /></span> <a href="https://web.facebook.com/pstisrael.king">Pst Israel King</a></h3>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default DailyVictory;
