import React from "react";
import HeaderMenu from "./HeaderMenu";
import Headeruser from "./HeaderUser";

const Header = () => {
  return (
    <div className="w-full h-auto">
      <div className="mx-14 w-auto py-6 flex items-center justify-between">
        <HeaderMenu />
        <Headeruser />
      </div>
    </div>
  );
};

export default Header;
