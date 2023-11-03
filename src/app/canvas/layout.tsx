import React, { ReactNode } from "react";

export const metadata = {
  title: "Canvas",
  description: "This is canvas component test  page",
};
const canvasLayout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default canvasLayout;
