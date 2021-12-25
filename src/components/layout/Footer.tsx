import { HStack, Button, Text, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

import Container from "@/components/common/Container";

type FooterLinkProps = {
  href: string;
  label?: string;
};

const FooterLink = ({ href, label, ...rest }: FooterLinkProps) => {
  return (
    <NextLink href={href} passHref>
      <Button
        size="sm"
        variant="unstyled"
        {...rest}
        color={useColorModeValue("gray.500", "gray.200")}
        _hover={{ color: useColorModeValue("gray.900", "gray.400") }}
      >
        {label}
      </Button>
    </NextLink>
  );
};

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <Container>
      <HStack
        justify="space-between"
        w="100%"
        display={{ base: "none", md: "flex" }}
        py={4}
      >
        <Text fontSize="sm" color={useColorModeValue("gray.500", "gray.200")}>
          © {date} EvoniX Roleplay{" "}
        </Text>
        <HStack spacing={4}>
          <FooterLink href="https://iamaul.me" label="Developer" />
        </HStack>
      </HStack>
    </Container>
  );
};

export default Footer;
