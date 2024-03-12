import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const container = (props: Props) => {
  return (
    <div
      className={`w-full max-w-[90%] xl:max-w-7xl mx-auto ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default container;
