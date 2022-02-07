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
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";

import NextChakraLink from "@/components/common/NextChakraLink";
import { formikSubmitButtonDisabled } from "@/utils/formik";

type LoginFormValueType = {
  usermail: string;
  password: string;
};

const INITIAL_VALUES: LoginFormValueType = {
  usermail: "",
  password: "",
};

const Login = () => {
  const [formBody, setFormBody] = React.useState<LoginFormValueType>();
  const [shouldFetch, setShouldFetch] = React.useState<boolean>(false);

  const {
    values: { usermail, password },
    errors,
    dirty,
    handleChange,
    // setFieldValue,
    handleSubmit,
    // resetForm,
  } = useFormik<LoginFormValueType>({
    initialValues: INITIAL_VALUES,
    onSubmit: (formValues: LoginFormValueType) => {
      setShouldFetch(false);
      setFormBody(formValues);
      setShouldFetch(true);
    },
  });

  const toast = useToast();

  if (shouldFetch) {
    toast.closeAll();
    toast({
      position: "top",
      title: "Something went wrong",
      description: "Please check your internet connection and try again",
      status: "error",
      isClosable: true,
      duration: 10000,
    });
  }

  const signInButtonDisabled = formikSubmitButtonDisabled(dirty, errors);

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
            <FormControl id="usermail">
              <FormLabel>Username or email address</FormLabel>
              <Input
                type="text"
                name="usermail"
                value={usermail}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
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
                disabled={signInButtonDisabled}
                onClick={() => handleSubmit()}
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
