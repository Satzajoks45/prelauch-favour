import React from "react";
import { Container } from "../layouts";
import Image from "next/image";

type Props = {};

const shopmateWork = (props: Props) => {
  const arr = [
    {
      index: 1,
      text: "text-emerald-600",
      details: `Select the sign-up button and select which area you would be able to serve (on campus, secretariats or Local Government Council).`,
    },
    {
      index: 2,
      text: "text-blue-600",
      details: `Select how many hours a day you would be able to work per week.`,
    },
    {
      index: 3,
      text: "text-yellow-600",
      details: `Complete all the necessary details and submit your application.`,
    },
    {
      index: 4,
      text: "text-pink-600",
      details: `We will review the process and notify you if you get selected.`,
    },
  ];

  return (
    <section>
      <Container className="py-20 flex flex-col items-center">
        <h2 className="text-center md:text-start text-xl md:text-2xl font-bold capitalize">
          How Shopmate works
        </h2>
        <p className="text-base font-semibold mt-7 text-[#636363]">
          The first thing you need to become is a shopmate, you have a
          smartphone and basic street smarts. Afterwards, you follow the
          following processes:
        </p>
      </Container>
      <div className="min-h-[600px] flex flex-col mr-2 md:mr-0 md:flex-row">
        <div className="flex-[0.5] overflow-hidden z-[999]">
          <div className="relative h-[300px] translate-y-[-30%] md:translate-y-0 md:h-full w-full md:overflow-hidden">
            <Image
              src="/images/yellowshirt.png"
              alt="background"
              fill
              className="md:translate-y-[-20%] object-contain object-center scale-[1.7] md:scale-[1.5] "
            />
          </div>
        </div>
        <div className="flex-[0.6] py-10 md:py-0 flex flex-col justify-center gap-10 md:gap-20">
          {arr.map((data) => (
            <div key={data.index} className="flex relative items-center">
              <div
                className={`md:absolute right-[100%] border-black border-[1.5px] ${
                  data.index % 2 === 0
                    ? "w-[150px] md:w-[250px]"
                    : "w-[250px] md:w-[350px]"
                }`}
              />
              <div
                className={`relative flex items-center justify-center p-4 rounded-full h-14 w-14 border-[5px] text-3xl ${data.text} font-bold border-current`}
              >
                {data.index}
              </div>
              <p className="ml-4 text-[#636363] font-bold md:min-w-[400px] md:mr-20">
                {data.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default shopmateWork;
