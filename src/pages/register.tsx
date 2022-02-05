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

const Register = () => {
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl">Sign up your account</Heading>
          <Text fontSize="lg" color="gray.500">
            One more step to get into the game 🙌
          </Text>
        </Stack>
        <Box
          rounded="lg"
          bg={useColorModeValue("white", "gray.700")}
          boxShadow="lg"
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input type="username" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl id="password_confirmation" isRequired>
              <FormLabel>Password confirmation</FormLabel>
              <Input type="password_confirmation" />
            </FormControl>
            <Stack spacing={10}>
              <Stack pt={6}>
                <Text align="center">
                  Already have an account?{" "}
                  <NextChakraLink href="/login" color="blue.400" passHref>
                    Sign In
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
                Sign Up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Register;
