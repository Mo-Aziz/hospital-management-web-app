import Image from "next/image";
import React from "react";

//import the logo from  the public folder then assets folder";
// import logo from "../public/assets/logo.svg";
import logo from "../../public/assets/logo.svg";

import Link from "next/link";
import { headerMenu } from "@/constants";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="p-8 shadow-md">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="flex flex-row items-center gap-2">
          <Image
            src={logo}
            alt="logo"
            width={80}
            height={80}
            className="text-[#5DBB63]"
            style={{}}
          />
          <p className="text-2xl font-bold text-[#5DBB63]">New Hope</p>
        </div>

        {/* header links */}

        <ul className="hidden lg:flex lg:gap-16">
          {headerMenu.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer list-none font-semibold text-primary transition-all ease-in-out hover:scale-105 hover:text-black"
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        {/* get started button*/}

        <Button>Get Started </Button>
      </div>
    </div>
  );
};

export default Header;
