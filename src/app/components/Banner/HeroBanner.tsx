import React from "react";
import BannerText from "../BannerText/BannerText";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="w-full bg-[#060622]">
      <div className="mx-14 flex items-center justify-between">
        <div className="space-y-28 my-32">
          <BannerText
            title="Ani69"
            description="We present to you an innovative tool that combines the artificial intelligence with human emotions."
            h1FontSize="text-5xl"
            h1FontWeight="font-bold"
            h3FontSize="text-2xl"
            h3FontWeight="font-normal"
            textColor="text-white"
            spaceBetween="space-y-8"
            maxWidth="max-w-xl"
          />
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
        <div>
          <Image src={"/gifs.gif"} alt="gif" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
