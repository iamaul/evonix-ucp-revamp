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
  Flex,
  useMediaQuery,
  theme,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

import Container from "@/components/common/Container";
import NextChakraLink from "@/components/common/NextChakraLink";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { ROUTES } from "@/config/env";

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
  const [isMobile] = useMediaQuery(`(max-width: ${theme.breakpoints.sm}`);

  return (
    <>
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
          <Box>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              maxWidth="1280px"
              w="full"
              h="35px"
              mx="auto"
              fontSize="12px"
              fontWeight="400"
            >
              <Flex alignItems="center" w={[null, null, "20%", "20%"]} h="full">
                <Menu>
                  {({ isOpen: menuIsOpen }) => (
                    <>
                      <MenuButton>{isMobile ? "EN" : "🇺🇸 English"}</MenuButton>
                      {menuIsOpen ? <BiChevronUp /> : <BiChevronDown />}

                      <MenuList>
                        <MenuItem>English</MenuItem>
                        <MenuItem>Indonesia</MenuItem>
                      </MenuList>
                    </>
                  )}
                </Menu>
              </Flex>

              <Text
                display={["none", null, "initial"]}
                textAlign="center"
                textTransform="uppercase"
              >
                Promo Donation Package Edisi Imlek 50%
              </Text>

              <Flex as="nav" h="full">
                <NextChakraLink
                  key="sign-in"
                  href={ROUTES.login.path}
                  display="flex"
                  alignItems="center"
                  px={4}
                  py={0}
                  h="full"
                  textTransform="capitalize"
                  _hover={{ textDecoration: "none" }}
                >
                  Sign In
                </NextChakraLink>
                <NextChakraLink
                  key="sign-up"
                  href={ROUTES.register.path}
                  display="flex"
                  alignItems="center"
                  px={4}
                  py={0}
                  h="full"
                  textTransform="capitalize"
                  _hover={{ textDecoration: "none" }}
                >
                  Sign Up
                </NextChakraLink>
              </Flex>
            </Flex>
          </Box>
          <VStack align="start" spacing={0}>
            <HStack justify="space-between" w="100%" h={16}>
              <NextLink href={ROUTES.home.path} passHref>
                <Avatar
                  name="logo-evonix"
                  size="sm"
                  src="/static/images/icons.png"
                  cursor="pointer"
                />
              </NextLink>
              <HStack ml={-4} spacing={2}>
                <NavLink href={ROUTES.server.path} label="Server" />
                <NavLink href={ROUTES.posts.path} label="Posts" />
                <NavLink
                  href={ROUTES.contentCreator.path}
                  label="Content Creator"
                />
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
                    bg={useColorModeValue("white", "warmGray.900")}
                    borderColor={useColorModeValue("gray.800", "neutral.400")}
                  >
                    <NextLink href={ROUTES.help.client.path} passHref>
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
                    </NextLink>
                    <NextLink href={ROUTES.help.faq.path} passHref>
                      <MenuItem
                        _hover={{
                          bg: useColorModeValue("neutral.200", "neutral.200"),
                        }}
                      >
                        <HStack>
                          <Text fontSize={["md", null, "sm"]}>F.A.Q</Text>
                        </HStack>
                      </MenuItem>
                    </NextLink>
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
    </>
  );
};
export default Header;
