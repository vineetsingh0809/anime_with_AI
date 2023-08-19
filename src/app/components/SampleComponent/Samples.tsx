import Image from "next/image";
import React from "react";

const Samples = () => {
  return (
    <div className="w-full h-[100vh] relative flex items-center">
      <div className="absolute top-0 left-0">
        <Image
          src={"/Rectangle 155.png"}
          alt="shadow"
          width={397}
          height={263}
        />
      </div>
      <div className="absolute bottom-0 left-0">
        <Image
          src={"/Rectangle 162.png"}
          alt="shadow"
          width={114}
          height={112}
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image
          src={"/Rectangle 154.png"}
          alt="shadow"
          width={158}
          height={605}
        />
      </div>
      <div className="w-[75%] z-50 m-[auto] flex items-center justify-between">
        <Image src={"/71.png"} alt="sample" width={535} height={478} />
        <div className="max-w-[450px] space-y-6">
          <div className="max-w-[390px] text-[55px] leading-[66px] text-[#141414] font-bold">
            Convert your{" "}
            <span className="text-[#32BED2]">
              Text{" "}
              <span>
                to <span className="text-[#D9343B]">image</span>
              </span>
            </span>{" "}
            using Ai
          </div>
          <h4 className="text-base leading-6 font-weight text-[#141414]">
            COMPANY NAME text to image converter is an useful tool to convert
            any text into quality images using Artificial intelligence
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Samples;
