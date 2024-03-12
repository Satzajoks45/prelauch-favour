import { TriangleDown } from "@/public";
import React, { useState } from "react";

type Props = {
  topic?: string;
  subTopic?: string;
};

const accordion = (props: Props) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`border-[1.5px] py-3 px-5 border-gray-800 w-full rounded-lg`}
    >
      <div
        onClick={() => setActive(!active)}
        className="font-semibold text-[16px] text-gray-700 cursor-pointer flex items-center justify-between z-[1]"
      >
        {props.topic}
        <TriangleDown />
      </div>
      <div
        className={`leading-5 pt-1 text-[16px] font-medium text-gray-700/80 transition-all ease-linear w-full ${
          active ? "block" : "hidden"
        }`}
      >
        {props.subTopic}
      </div>
    </div>
  );
};

export default accordion;
