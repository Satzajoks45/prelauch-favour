import React from "react";
import { Button, Input } from "../components";

type Props = {};

const newsletter = (props: Props) => {
  return (
    <div className="bg-emerald-500 rounded-lg text-white px-10 md:px-20 py-10 md:max-w-[80%] w-full mx-auto">
      <h2 className="text-lg md:text-5xl font-semibold text-center md:text-start">
        Enjoy the best convenient shopping experience with komas500
      </h2>
      <div className="hidden md:flex items-center justify-between gap-3 bg-white p-1 md:max-w-[100%] md:mx-auto rounded-full mt-5">
        <Input
          InputWidth="full"
          placeholder="Enter your email address"
          className="border-none bg-white px-5 font-medium text-gray-900 placeholder:text-sm md:placeholder:text-base"
        />
        <Button
          variant="filled"
          rounded="full"
          className="capitalize bg-emerald-500 px-5 py-3 text-white font-medium min-w-max"
        >
          get notified
        </Button>
      </div>
      <div className="w-full mt-2 flex flex-col items-center justify-center">
        <Input
          InputWidth="full"
          placeholder="Enter your email address"
          className="border-none bg-white px-5 font-medium text-gray-900 placeholder:text-sm md:placeholder:text-base"
        />
        <Button
          variant="filled"
          rounded="medium"
          className="capitalize mt-2 w-full bg-white px-5 py-3 text-emerald-500 font-medium min-w-max"
        >
          get notified
        </Button>
      </div>
    </div>
  );
};

export default newsletter;
