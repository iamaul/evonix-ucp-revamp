import { ScaleFade } from "@chakra-ui/react";
import React from "react";

type PageTransitionProps = {
  children: React.ReactNode;
};

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <ScaleFade initialScale={0.9} in>
      {children}
    </ScaleFade>
  );
};

export default PageTransition;
