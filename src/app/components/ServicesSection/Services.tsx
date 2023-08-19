import React from "react";
import ServiceComponent from "./ServiceComponent";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      imgSrc: "/Rectangle 137.png",
      title: "Create Own Characters",
      sub_title: "You can create your own customized Animated characters",
    },
    {
      id: 2,
      imgSrc: "/animation.png",
      title: "Text to Animation",
      sub_title: "You can make your own animations at your fingertips",
    },
    {
      id: 3,
      imgSrc: "/Rectangle 6.png",
      title: "Text to AI image",
      sub_title: "You can easily Generate AI powered images",
    },
  ];
  return (
    <div className="bg-[#060622]">
      <div className="max-w-[90%] m-auto flex items-center justify-between py-32">
        {servicesData.map((item) => (
          <div key={item.id}>
            <ServiceComponent
              image={item.imgSrc}
              title={item.title}
              subTitle={item.sub_title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
