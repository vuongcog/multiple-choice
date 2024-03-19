import React from "react";

const Header = () => {
  return (
    <div className=" w-full h-[100px] flex items-center justify-around bg-[#252b2d]">
      <div className="navbar-header">
        <h1 className="title-header text-[36px] font-bold text-white">
          TriviaMaker
        </h1>
      </div>
      <nav>
        <ul className="flex text-white font-medium space-x-5">
          <li>Launch TriviaMaker</li>
          <li>Class</li>
          <li>Help</li>
          <li>Manage Account</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
