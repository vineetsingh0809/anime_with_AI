import Image from "next/image";
import React from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ComputerScreen = () => {
  return (
    <div className="w-full pt-20 pb-20 bg-gradient-to-t from-rose-900 via-rose-900 to-black flex items-center justify-center">
      <div className="w-[50%] flex flex-col items-center justify-center space-y-20">
        <h1 className="text-5xl font-bold leading-[58px] text-center text-[#D9D9D9]">
          Convert your <br /> <span className="text-[#32BED2]">Text</span> to{" "}
          <span className="text-[#EB41B1]">Animation</span> <br /> in just 3
          steps{" "}
        </h1>
        <div className="flex items-center justify-center text-white space-x-32">
          <div className="flex flex-col items-center justify-center">
            <Image src={"/Vector.png"} alt="anime" width={60} height={60} />
            <h1>Write your script</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={"/Group.png"} alt="anime" width={55} height={60} />
            <h1>Write your script</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={"/avatar.png"} alt="anime" width={51} height={60} />
            <h1>Write your script</h1>
          </div>
        </div>
        <ButtonComponent
          title="Try Now"
          bgColor="bg-gradient-to-l from-[#2200AC] to-[#6343E2]"
          textColor="text-white"
          paddingLeftRight="px-10"
          paddingTopBottom="py-3"
          borderRadius="rounded-3xl"
          border="border-none"
          fontSize="text-xl"
          onHover="hover:bg-gradient-to-r from-[#2200AC] to-[#6343E2]"
        />
      </div>
      <div className="w-[50%] flex items-center justify-center">
        <Image src={"/Computer.png"} alt="computer" width={465} height={540} />
      </div>
    </div>
  );
};

export default ComputerScreen;
