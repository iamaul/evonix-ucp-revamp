import { Button, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

type MobileMenuItemProps = {
  href: string;
  label?: string;
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MotionButton = motion(Button);

const MobileMenuItem = ({ href, label }: MobileMenuItemProps) => {
  let isActive = false;
  const { pathname } = useRouter();

  if (href !== "/") {
    const [, group] = href.split("/");

    isActive = pathname.includes(group);
  } else if (href === pathname) {
    isActive = true;
  }

  return (
    <Link href={href} passHref>
      <MotionButton
        size="lg"
        aria-current={isActive ? "page" : undefined}
        w="100%"
        variants={variants}
        backgroundColor={useColorModeValue("white", "warmGray.900")}
        _activeLink={{
          color: useColorModeValue("blue.500", "blue.200"),
        }}
        _hover={{
          backgroundColor: useColorModeValue("gray.100", "gray.800"),
        }}
      >
        {label}
      </MotionButton>
    </Link>
  );
};
export default MobileMenuItem;
