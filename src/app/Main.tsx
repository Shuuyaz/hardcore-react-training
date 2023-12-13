import React from "react";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Main: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Main;
