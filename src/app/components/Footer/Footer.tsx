import Image from "next/image";
import React from "react";

const FancyFooter: React.FC = () => {
  const title = [
    { id: 1, title: "Features" },
    { id: 2, title: "Company" },
    { id: 3, title: "Social" },
  ];
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="ml-16">
        <Image src={"/logo.png"} alt="logo" width={100} height={55} />
      </div>
      <div className="w-[90%] h-40 m-auto flex items-center justify-between">
        {title.map((item) => (
          <h1 className="text-[32px] font-semibold leading-10" key={item.id}>{item.title}</h1>
        ))}
      </div>
    </footer>
  );
};

export default FancyFooter;
