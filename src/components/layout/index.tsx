import { Box } from "@chakra-ui/react";
import React from "react";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileNavigation from "@/components/layout/mobile-navigation/MobileNavigation";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Box as="main" pt={{ base: 16, md: 32 }} pb={{ base: 24, md: 16 }}>
        {children}
      </Box>
      <MobileNavigation />
      <Footer />
    </>
  );
};

export default Layout;
