import React, { forwardRef } from "react";

type Props = React.InputHTMLAttributes<HTMLElement> & {
  className?: string;
  InputWidth?: string | "full";
  showLine?: boolean;
};

const input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, InputWidth, showLine, ...others } = props;
  return (
    <div
      style={{ width: InputWidth === "full" ? "100%" : InputWidth }}
      className="w-max relative"
    >
      {showLine === true ? (
        <svg
          className="absolute top-[50%] translate-y-[-50%] left-[25px]"
          width="2"
          height="15"
          viewBox="0 0 2 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.698242 0.703857L0.698242 13.8465"
            stroke="#4B5563"
            strokeWidth="0.625841"
            strokeLinecap="round"
          />
        </svg>
      ) : null}

      <input
        ref={ref}
        className={`px-10 py-2 w-full border-[2px] rounded-lg placeholder:text-gray-600 placeholder:font-medium border-gray-600/80 outline-none ${className}`}
        {...others}
      />
    </div>
  );
});

export default input;
