import React from "react";
import { Container } from "../layouts";
import Link from "next/link";
import { Button } from "../components";
import {
  GrFacebookOption as Facebook,
  GrTwitter as Twitter,
  GrLinkedinOption as Linkedin,
  GrInstagram as Insta,
} from "react-icons/gr";
import Image from "next/image";

type Props = {
  topMargin?: boolean;
};

const footer = ({ topMargin }: Props) => {
  return (
    <footer className={`bg-black text-white ${topMargin && "pt-20"}`}>
      <Container className={`flex flex-col items-center py-20`}>
        <Image
          height={100}
          width={200}
          src="/images/logo.png"
          alt="logo"
          className="object-center object-cover"
        />
        <p className="text-justify mt-2">
          KOMAS500 stands out as an exclusive online shopping destination that
          specializes in foodstuff, groceries, and cosmetics. Our platform
          ensures an exciting shopping experience, with the convenience of
          same-day delivery and easily accessible pick-up centers. We are
          pleased to introduce our innovative service, the Shopmate, who is your
          dedicated online shopping assistant to guide you through the shopping
          process and foresee smooth deliveries. Shop with KOMAS500, the fun way
          to get your daily needs.
        </p>

        <div className="flex mt-2 items-center w-full">
          <div className="max-w-xl w-full mx-auto">
            <p className=" text-center md:text-start mt-3 font-medium text-xl">
              Connect with us
            </p>
            <div className="flex items-center justify-center flex-col md:flex-row gap-5 mt-2">
              <div className="text-black/90 flex items-center justify-center gap-3">
                <Link
                  className="p-3 bg-white/80 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-all ease-linear duration-200"
                  href="#"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link
                  className="p-3 bg-white/80 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-all ease-linear duration-200"
                  href="#"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link
                  className="p-3 bg-white/80 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-all ease-linear duration-200"
                  href="#"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
                <Link
                  className="p-3 bg-white/80 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-all ease-linear duration-200"
                  href="#"
                >
                  <Insta className="h-4 w-4" />
                </Link>
              </div>
              <div className="flex items-center justify-center gap-3 w-full">
                <Button variant="outline" rounded="medium" className="w-full">
                  Shopmate
                </Button>
                <Button variant="outline" rounded="medium" className="w-full">
                  FAQ
                </Button>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center md:text-start text-lg font-bold mt-10">
          c Setapat 2023 | All Rights Reserved
        </h2>
      </Container>
    </footer>
  );
};

export default footer;
