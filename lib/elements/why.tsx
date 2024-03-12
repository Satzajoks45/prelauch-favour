import React from "react";
import { Container, Grid } from "../layouts";
import { BestPrice, PickupMan, TimerCal } from "@/public";

type Props = {};

const options = [
  {
    icon: <BestPrice />,
    desc: "Best price no local/online store can offer",
  },
  {
    icon: <TimerCal />,
    desc: "Same day delivery",
  },
  {
    icon: <PickupMan />,
    desc: "Easy pickup near you",
  },
];

const why = (props: Props) => {
  return (
    <section className="py-10 text-[#253D4E]">
      <Container className="flex flex-col items-center">
        <h2 className="text-center md:text-start text-xl md:text-2xl font-bold capitalize">
          why shop with komas500
        </h2>
        <div className="w-full mt-7 min-h-[200px] flex flex-col">
          {options.map((data, i) => (
            <div key={i} className="w-full h-full md:mt-4 flex flex-col ">
              <div className="w-full flex items-center justify-center scale-[0.5] md:scale-1 h-[100px] md:h-[full] md:mb-10 md:flex-grow">
                {data.icon}
              </div>
              <p className="text-xs md:text-xl min-h-[100px] uppercase font-semibold text-center max-w-[80%] w-full mx-auto">
                {data.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default why;
