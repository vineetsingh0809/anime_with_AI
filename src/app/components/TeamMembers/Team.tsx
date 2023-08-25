import React from "react";
import TeamMember from "./TeamMember";

const Team = () => {
  const teamInfo = [
    {
      id: 1,
      src: "/user1.jpg",
      name: "VISHWAJEET SINGH",
      designation: "CHIEF EXECUTIVE OFFICER",
    },
    {
      id: 2,
      src: "/user2.jpg",
      name: "VISHWAJEET SINGH",
      designation: "CHIEF EXECUTIVE OFFICER",
    },
    {
      id: 3,
      src: "/user3.jpg",
      name: "VISHWAJEET SINGH",
      designation: "CHIEF EXECUTIVE OFFICER",
    },
    {
      id: 4,
      src: "/user4.jpg",
      name: "VISHWAJEET SINGH",
      designation: "CHIEF EXECUTIVE OFFICER",
    },
  ];

  return (
    <div className="bg-[#D9D9D9] relative py-12 md:py-20">
      <h1 className=" text-xl md:text-4xl font-semibold leading-8 absolute top-12 left-4 md:left-20">
        Team Members
      </h1>
      <div className=" mt-7 w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] m-auto flex flex-col md:flex-row items-center justify-between md:py-20">
        {teamInfo.map((member) => (
          <TeamMember
            key={member.id}
            imgSrc={member.src}
            memberName={member.name}
            memberDesignation={member.designation}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;