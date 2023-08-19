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
    <div className="bg-[#D9D9D9] relative">
      <h1 className="text-4xl font-semibold leading-8 absolute top-12 left-20">
        Team Members
      </h1>
      <div className="w-[80%] m-auto flex items-center justify-between py-40">
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
