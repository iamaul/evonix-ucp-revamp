import {
  VStack,
  HStack,
  Button,
  Text,
  Box,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
} from "@chakra-ui/react";
// eslint-disable-next-line import/no-duplicates
import NextLink from "next/link";
// eslint-disable-next-line import/no-duplicates
import Link from "next/link";
import { useRouter } from "next/router";

import Container from "@/components/common/Container";
import ThemeToggle from "@/components/layout/ThemeToggle";

type NavLinkProps = {
  href: string;
  label?: string;
};

const NavLink = ({ href, label, ...rest }: NavLinkProps) => {
  let isActive = false;
  const { pathname } = useRouter();

  if (href !== "/") {
    const [, group] = href.split("/");

    isActive = pathname.includes(group);
  } else if (href === pathname) {
    isActive = true;
  }

  return (
    <NextLink href={href} passHref>
      <Button
        aria-current={isActive ? "page" : undefined}
        variant="ghost"
        size="md"
        {...rest}
        _activeLink={{
          color: useColorModeValue("black", "white"),
          bg: useColorModeValue("gray.100", "gray.800"),
        }}
        _hover={{
          // eslint-disable-next-line sonarjs/no-duplicate-string
          bg: useColorModeValue("gray.100", "gray.800"),
        }}
        px={8}
      >
        {label}
      </Button>
    </NextLink>
  );
};

const Header = () => {
  return (
    <Box
      bg={useColorModeValue("white", "warmGray.900")}
      display={{ base: "none", md: "block" }}
      position="fixed"
      w="100%"
      zIndex={99}
      borderBottomWidth="2px"
      // eslint-disable-next-line sonarjs/no-duplicate-string
      borderBottomColor={useColorModeValue("neutral.400", "neutral.500")}
      shadow="0 0 10px 0 rgba(0,0,0, 0.035);"
    >
      <Container>
        <VStack align="start" spacing={0}>
          <HStack justify="space-between" w="100%" h={16}>
            <Link href="/" passHref>
              <Avatar
                name="logo-evonix"
                size="sm"
                src="/static/images/icons.png"
                cursor="pointer"
              />
            </Link>
            <HStack ml={-4} spacing={2}>
              <NavLink href="/server" label="Server" />
              <NavLink href="/posts" label="Posts" />
              <NavLink href="/content-creator" label="Content Creator" />
              <Menu>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  size="md"
                  px={6}
                  _hover={{
                    bg: useColorModeValue("gray.100", "gray.800"),
                  }}
                >
                  Help
                </MenuButton>
                <MenuList
                  bg={useColorModeValue("white", "neutral.100")}
                  borderColor={useColorModeValue("neutral.400", "neutral.400")}
                >
                  <Link href="/client" passHref>
                    <MenuItem
                      _hover={{
                        // eslint-disable-next-line sonarjs/no-duplicate-string
                        bg: useColorModeValue("neutral.200", "neutralD.200"),
                      }}
                    >
                      <HStack>
                        <Text fontSize={["md", null, "sm"]}>
                          GTA:SA & SA-MP Client Version
                        </Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link href="/faq" passHref>
                    <MenuItem
                      _hover={{
                        bg: useColorModeValue("neutral.200", "neutral.200"),
                      }}
                    >
                      <HStack>
                        <Text fontSize={["md", null, "sm"]}>F.A.Q</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </HStack>
            <HStack>
              <ThemeToggle />
            </HStack>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};
export default Header;
