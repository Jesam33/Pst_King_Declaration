import React, { useContext } from "react";
import pastorImg from "../assets/Kings.jpg";
import Title from "./Title";
import TextContent from "./TextContent";
import Button from "./Button";
import InputContext from "../contexts/inputContext";

const Header = () => {
  const { day, month, title } = useContext(InputContext);

  return (
    <div className=" w-full py-2 ">
      {/* Grid Layout */}
      <div className="flex justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <Title text={`DAY ${day}`} className="text-xl font-bold text-white-800" />
          <TextContent text={`${month} 2024`} className="text-white-800 text-sm" />
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-center space-y-2">
          {/* <Title text={title} className="text-2xl font-[600] text-white-800" /> */}
          <Button
            text='"INDEED, I SEE A GLORIOUS FUTURE AHEAD"'
            className="bg-purple-900 hover:bg-green-500 text-white text-[25px] py-2 px-6 rounded-lg"
          />
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <img
            src={pastorImg}
            alt="Pastor"
            className="rounded-[2px] border-2 object-center border-white-600 w-40 h-40 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
