"use client";

import Link from "next/link";
import React, { useState } from "react";
import { MdMenuOpen as Menu } from "react-icons/md";
import { RxCross2 as Close } from "react-icons/rx";

type Props = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const navOptions = [
  {
    name: "About",
    src: "/about",
  },
  {
    name: "Shopmate",
    src: "/shopmate",
  },
  {
    name: "FAQ",
    src: "/faq",
  },
];

const navbar = ({ active, setActive }: Props) => {
  return (
    <nav className="flex items-center justify-between text-white py-2 z-[99999]">
      <Link href="/">
        <h2 className="uppercase  font-semibold text-2xl md:text-3xl">
          komas500
        </h2>
      </Link>

      <div className="hidden md:flex items-center justify-center gap-4 text-xs md:text-sm font-medium tracking-wide">
        {navOptions.map((data, i) => (
          <Link key={i} href={data.src}>
            <p className="opacity-90 hover:opacity-100 transition-opacity duration-200 ease-linear">
              {data.name}
            </p>
          </Link>
        ))}
      </div>

      <div
        className="md:hidden"
        role="button"
        onClick={() => setActive(!active)}
      >
        {active ? (
          <Close
            className={`h-6 w-6 text-white ${active && "text-slate-700"}`}
          />
        ) : (
          <Menu className={`h-6 w-6 text-white`} />
        )}
      </div>
    </nav>
  );
};

export default navbar;
