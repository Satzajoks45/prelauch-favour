import React from "react";

type Props = {
  fitImage?: boolean;
  img?: string;
  desc?: string;
  color?: string;
};

const top_categories = (props: Props) => {
  return (
    <div
      style={{
        background: props.color,
        color: props.color,
      }}
      className={`min-h-[250px] max-w-[400px] h-full w-full shadow-sm shadow-black/20 flex`}
    >
      <div className="flex-grow flex items-center justify-center relative">
        {/* bolb */}
        <div className="h-[80%] w-[85%] absolute right-0">
          <div className="h-full w-full relative">
            <div className="polygon-shape h-[90%] w-[90%] bg-[#E2DFDF] absolute top-[5%] right-[-3%]" />
            <div className="polygon-shape h-full w-full bg-white" />
          </div>
        </div>

        {/* image */}

        <img
          src={props.img}
          alt="grocery"
          className={`object-center object-contain absolute left-0
          ${
            props.fitImage ? "translate-x-[-10%] scale-90" : "translate-x-[5%]"
          } `}
        />
      </div>
      <div className="min-w-[150px] relative">
        <div className="absolute min-h-[50%] min-w-[90%] top-0 left-0 translate-y-[50%] translate-x-[-10%]">
          <p className="text-3xl font-bold leading-8 text-white text-center">
            {props.desc}
          </p>

          <p className="py-2 px-1 mt-3 bg-white rounded-md font-bold text-center">
            from komas500
          </p>
        </div>
      </div>
    </div>
  );
};

export default top_categories;
