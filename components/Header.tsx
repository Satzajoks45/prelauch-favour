"use client";

import React from "react";
import userImg from "../public/assets/dashboard/user.png";
import Image from "next/image";
import {
  MenuIcon,
  MessageIcon,
  NotifyIcon,
  SearchIcon,
} from "../public/assets/icons/header";

type HeaderProps = {
  setOpen: (value: React.SetStateAction<boolean>) => void;
};

const Header = ({ setOpen }: HeaderProps) => {
  return (
    <header
      className={`flex justify-between items-center z-[30] relative font-barlow w-full`}
    >
      {/*hamburger menu*/}
      <div className="lg:hidden" onClick={() => setOpen((prev) => !prev)}>
        <MenuIcon />
      </div>
      {/*search bar */}
      <div className="relative flex items-center justify-start">
        <div className="absolute inset-y-0 right-0 flex items-center xl:pr-7 lg:rp-4 pr-3 pointer-events-none">
          <SearchIcon className="xl:w-6 xl:h-6 lg:w-[18px] lg:h-[18px] w-3 h-3" />
        </div>
        <input
          type="text"
          className="block xl:py-[18px] lg:py-3 py-[9px] xl:px-7 lg:px-[15px] px-3 xl:min-w-[866px] lg:min-w-[500px] md:min-w-[300px] placeholder:text-dark_400 max-w-[40px] text-dark_400 bg-[#fdfdfd] rounded-lg border border-[#ebebeb]  xl:text-base lg:text-sm text-xs focus:outline-none transition duration-300 focus:border-primary_100 focus:ring-[0.5px] focus:ring-primary_100 outline-none placeholder:text-xs"
          placeholder="Search here..."
        />
      </div>
      {/*user details*/}
      <div className="flex items-center justify-between divide-x-[1px] divide-[#d0d6de]">
        <div className="flex items-center xl:gap-8 lg:gap-6 gap-4 xl:pr-10 lg:pr-[30px] pr-5">
          <div className="group flex items-center justify-center bg-primary_200 rounded-[15px] xl:w-[48px] lg:w-[37px] w-7 xl:h-[48px] lg:h-[37px] h-7 xl:p-[10px] p-[7.5px] relative">
            <MessageIcon />
            <p className="bg-red_100 text-white rounded-full xl:text-xs text-[9px] p-1 leading-none font-normal absolute top-0 -right-1">
              53
            </p>
          </div>

          <div className="group flex items-center justify-center bg-primary_200 rounded-[15px] xl:w-[48px] lg:w-[37px] w-7 xl:h-[48px] lg:h-[37px] h-7 xl:p-[10px] p-[7.5px] relative">
            <NotifyIcon />
            <p className="bg-red_100 text-white rounded-full xl:text-xs text-[9px] p-1 leading-none font-normal absolute top-0 -right-1">
              19
            </p>
          </div>
        </div>

        <div className="flex items-center xl:gap-5 lg:gap-[15px] gap-[10px] xl:pl-10 lg:pl-[30px] pl-5">
          <p className="xl:text-base lg:text-sm text-xs font-normal text-[#464255]">
            {" "}
            Hello, <span className="font-medium">Samantha</span>
          </p>
          <Image
            src={userImg}
            width={56}
            height={56}
            alt="user-img"
            className="object-contain rounded-full w-full h-auto xl:max-w-[56px] lg:max-w-[42px] max-w-[28px]"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
