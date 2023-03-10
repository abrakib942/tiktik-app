import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "../utils/tiktik-logo.png";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <Image
            className="cursor-pointer"
            src={Logo}
            alt="TikTik"
            layout="responsive"
          ></Image>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
