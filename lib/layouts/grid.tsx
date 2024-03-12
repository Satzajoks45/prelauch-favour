import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string | undefined;
};

const grid = (props: Props) => {
  return (
    <div
      className={`grid items-center justify-center justify-items-center justify-self-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default grid;
