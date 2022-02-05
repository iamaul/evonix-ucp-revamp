import {
  Flex,
  Heading,
  Stack,
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

import NextChakraLink from "@/components/common/NextChakraLink";

const Login = () => {
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl">Sign in to your account</Heading>
          <Text fontSize="lg" color="gray.500">
            to enjoy all of our cool features 🤙
          </Text>
        </Stack>
        <Box
          rounded="lg"
          bg={useColorModeValue("white", "gray.700")}
          boxShadow="lg"
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Username or email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack pt={6}>
                <Text align="center">
                  Don&lsquo;t have an account?{" "}
                  <NextChakraLink href="/register" color="blue.400" passHref>
                    Sign Up
                  </NextChakraLink>
                  <br />
                  Forgotten your password?{" "}
                  <NextChakraLink href="#" color="blue.400" passHref>
                    Recover
                  </NextChakraLink>
                </Text>
              </Stack>
              <Button
                bg={useColorModeValue("red.700", "red.400")}
                color="white"
                _hover={{
                  bg: useColorModeValue("red.400", "red.700"),
                }}
              >
                Sign In
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
