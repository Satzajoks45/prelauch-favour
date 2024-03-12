"use client";

import Link from "next/link";
import React from "react";
import { Container } from "../layouts";

type Props = { active: boolean };

const Menu = (props: Props) => {
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

  return (
    <div
      className={`h-screen w-full top-[50px] left-0 absolute backdrop:bg-white/10 backdrop-blur-sm z-[999] hidden translate-x-[100%] ${
        props.active && "!translate-x-0 !block"
      } transition-all duration-75 ease-linear`}
    >
      <Container className="mt-10">
        {navOptions.map((data, i) => (
          <Link key={i} href={data.src}>
            <p className="opacity-90 hover:opacity-100 transition-opacity duration-200 ease-linear bg-[whitesmoke] mt-4 py-2 px-3 rounded-md text-lg font-semibold text-center">
              {data.name}
            </p>
          </Link>
        ))}
      </Container>
    </div>
  );
};

export default Menu;
