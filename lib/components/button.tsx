import React, { forwardRef } from "react";

type Props = React.ButtonHTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
  className?: string;
  variant?: "filled" | "outline";
  rounded?: "small" | "medium" | "full";
};

const button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children, className, variant, rounded, ...others } = props;
  return (
    <button
      ref={ref}
      className={`px-4 py-2 outline-none text-sm transition-all ease-in duration-100 hover:bg-opacity-95 ${
        props.variant === "filled" && "border-none"
      } ${props.variant === "outline" && "border-[2px] border-current !bg-none"}
      ${props.rounded === "small" && "rounded-lg"} ${
        props.rounded === "medium" && "rounded-xl"
      } ${props.rounded === "full" && "rounded-full"} ${props.className}`}
      {...others}
    >
      {props.children}
    </button>
  );
});

export default button;
