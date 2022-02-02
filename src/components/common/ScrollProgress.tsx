import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ScrollProgress = ({ target }: any) => {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element = target.current;
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight;
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (windowScrollTop === 0) {
      // eslint-disable-next-line consistent-return
      return setScrollProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      // eslint-disable-next-line consistent-return
      return setScrollProgress(100);
    }

    setScrollProgress((windowScrollTop / totalHeight) * 100);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  return (
    <Box
      position="fixed"
      bg={useColorModeValue("red.700", "red.300")}
      left={0}
      right={0}
      top={{ base: "auto", md: "100" }}
      bottom={{ base: "63", md: "auto" }}
      h="2px"
      transition="all 0.10s"
      transition-timing-function="spring(1 100 10 10)"
      mt="-2px"
      w={`${scrollProgress}%`}
      zIndex={100}
      transform={{ base: "translateY(2px)", md: "translateY(2px)" }}
    />
  );
};

export default ScrollProgress;
