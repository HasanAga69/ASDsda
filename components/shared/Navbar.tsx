// import { NavbarItems, Socials } from "@/constants";
// import { FaBars } from "react-icons/fa6";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed flex w-full h-[65px] top-0 shadow-lg bg-[#03001417] backdrop-blur-md z-50 px-10 md:px-32 lg:px-52 xl:64 transition-all">
      <div className="flex justify-between items-center w-full">
          <Image 
          src='/assets/sechil.png'
          alt="sechil"
          width={34}
          height={34}/>
      </div>
      </nav>

  );
};

export default Navbar;
