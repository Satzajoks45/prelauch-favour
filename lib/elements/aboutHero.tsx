"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Container } from "../layouts";
import { Navbar } from ".";
import { Button, Input } from "../components";
import Menu from "./menu";
import Link from "next/link";

type Props = {};

const aboutHero = (props: Props) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Menu active={active} />
      <header className="relative bg-[#211D19] min-h-[80vh] md:min-h-screen">
        <div className="absolute h-full w-full top-0 left-0 ">
          <div className="h-full w-full overflow-hidden relative">
            {/* image */}
            <div className="absolute invisible lg:visible h-[600px] w-[950px] bottom-0 right-[-5%]">
              <div className="relative h-full w-full scale-x-[-1]">
                <Image
                  src="/images/shopmate.png"
                  alt="background"
                  fill
                  className="object-left object-contain scale-[1.3]"
                />
              </div>
            </div>

            {/* data */}
            <Container className="h-full flex flex-col">
              <Navbar active={active} setActive={setActive} />
              <div className="flex-grow flex items-center justify-center lg:justify-start">
                <div className="z-[30] max-w-2xl">
                  <h2 className="text-white flex flex-col items-center lg:items-start">
                    <span className="text-center md:text-start text-3xl md:text-6xl font-semibold flex flex-col-reverse items-center justify-center lg:items-start">
                      komas500 Shop mate
                    </span>
                  </h2>

                  <p className="text-white/80 text-[16px] text-center md:text-start md:text-[23.61px] mx-auto max-w-[90%] md:mx-0 md:max-w-none font-thin">
                    Are you ready to work with one of the leading innovations in
                    the e-commerce industry? Imagine being able to make up to
                    150k a month with no skills needed and zero risks involved.
                    No need for advertising, investments or referrals. Yes, it's
                    possible by signing up as a SHOPMATE for KOMAS500
                  </p>

                  <div className="flex items-center justify-center gap-5 mt-auto min-h-[100px] w-full mx-auto max-w-[90%] md:mx-0 md:max-w-none">
                    <Button
                      variant="outline"
                      rounded="small"
                      className="text-emerald-500 text-lg w-full py-4"
                    >
                      Learn more
                    </Button>

                    <Link
                      className="w-full h-max"
                      href="https://docs.google.com/forms/d/e/1FAIpQLScx23ygcKnyohGp08qpIPv3rgMMkRBIkwf00TICw2fABn4iuw/viewform?embedded=true"
                      target="_blank"
                    >
                      <Button
                        variant="filled"
                        rounded="small"
                        className="bg-emerald-500 text-white text-lg w-full py-4"
                      >
                        {" "}
                        Submit
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </header>
    </>
  );
};

export default aboutHero;
