"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Container } from "../layouts";
import { Navbar } from ".";
import { Button, Input } from "../components";
import Menu from "./menu";

type Props = {};

const hero = (props: Props) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Menu active={active} />
      <header className="relative bg-center object-center object-cover min-h-[80vh] md:min-h-screen">
        <Image src="/images/background.png" alt="background" fill />

        <div className="absolute h-full w-full top-0 left-0 ">
          <div className="h-full w-full overflow-hidden relative">
            {/* image */}
            <div className="absolute invisible lg:visible h-[600px] w-[950px] bottom-0 right-[-5%]">
              <div className="relative h-full w-full">
                <Image
                  src="/images/bg-girl.png"
                  alt="background"
                  fill
                  className="object-center"
                />
              </div>
            </div>

            {/* data */}
            <Container className="h-full flex flex-col">
              <Navbar active={active} setActive={setActive} />
              <div className="flex-grow flex items-center justify-center lg:justify-start">
                <div className="lg:ml-[7%] z-[30] md:max-w-[50%]">
                  <h2 className="text-white flex flex-col items-center lg:items-start">
                    <span className="text-5xl md:text-7xl font-semibold flex flex-col-reverse items-center justify-center lg:items-start">
                      <span className="text-center md:text-start">
                        Just around the corner:
                      </span>
                      <span>Komas500</span>
                    </span>
                    <span className="text-sm md:text-lg font-medium mt-4 text-center md:text-start">
                      Get ready to enjoy online shopping with same-day delivery
                      and your own personal assistant.
                    </span>
                  </h2>

                  <div className="flex items-center justify-between gap-3 border-white border-[2px] p-1 rounded-full mt-5">
                    <Input
                      InputWidth="full"
                      placeholder="Enter your email address"
                      className="border-none bg-transparent text-white placeholder:text-white px-5 font-medium"
                    />
                    <Button
                      variant="filled"
                      rounded="full"
                      className="capitalize bg-white px-5 py-3 text-green-600 font-medium min-w-max"
                    >
                      get notified
                    </Button>
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

export default hero;

