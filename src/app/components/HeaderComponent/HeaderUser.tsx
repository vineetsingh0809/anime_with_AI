import Image from "next/image";
import React from "react";

const Headeruser = () => {
  return (
    <div className="flex items-center space-x-8">
      <div>
        <select name="features" id="features" className="bg-transparent border py-1 px-2">
          <option value="default">Features</option>
          <option value="animation">Text to Animation</option>
          <option value="image">Text to Image</option>
          <option value="speech">Text to Speech</option>
        </select>
      </div>
      <div className="flex items-center space-x-1">
        <Image src={"/user.png"} alt="user" width={"35"} height={"35"} />
        <button className="border py-1 px-2">Login/Sign-Up</button>
      </div>
    </div>
  );
};

export default Headeruser;
