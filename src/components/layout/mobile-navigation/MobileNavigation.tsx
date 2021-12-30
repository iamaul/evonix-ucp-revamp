import { Box, Center, HStack, useColorModeValue } from "@chakra-ui/react";
import { motion, useCycle } from "framer-motion";
import Link from "next/link";
import { FaDollarSign } from "react-icons/fa";

import ThemeToggle from "../ThemeToggle";

import MobileMenuButton from "./MobileMenuButton";
import MenuToggle from "./MobileMenuToggle";

const MobileNavigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const MotionBox = motion(Box);

  return (
    <MotionBox
      initial={false}
      animate={isOpen ? "open" : "closed"}
      position="fixed"
      bottom="0"
      right="0"
      left="0"
      display={{ base: "block", md: "none" }}
    >
      <HStack
        justify="space-around"
        align="center"
        py={2}
        mt="auto"
        height={16}
        bg={useColorModeValue("white", "warmGray.900")}
        borderTopWidth="2px"
        borderTopColor={useColorModeValue("gray.200", "neutral.400")}
        shadow="0 -2px 10px 0 rgba(0,0,0, 0.035);"
      >
        <Center w="100%">
          <Link href="/donation" passHref>
            <MobileMenuButton label="Donation" icon={<FaDollarSign />} />
          </Link>
        </Center>
        <Center w="100%">
          <ThemeToggle />
        </Center>
        <Center w="100%">
          <MenuToggle mobile={() => toggleOpen()} />
        </Center>
      </HStack>
    </MotionBox>
  );
};

export default MobileNavigation;
