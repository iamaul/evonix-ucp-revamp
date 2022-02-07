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
  FormHelperText,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import * as yup from "yup";

import NextChakraLink from "@/components/common/NextChakraLink";
import { formikSubmitButtonDisabled } from "@/utils/formik";

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 minimum characters")
    .matches(
      /^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/,
      "Password must be at least have one special character"
    )
    .required("Password is required"),
  password_confirmation: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("password"), null], "Password confirmation not match"),
});

type RegisterFormValueType = {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const INITIAL_VALUES: RegisterFormValueType = {
  username: "",
  email: "",
  password: "",
  password_confirmation: "",
};

const Register = () => {
  const [shouldFetch, setShouldFetch] = React.useState<boolean>(false);
  const [recaptcha, setRecaptcha] = React.useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recaptchaRef = React.useRef<any>(null);

  const handleRecaptcha = () => {
    if (recaptchaRef) {
      setRecaptcha(recaptchaRef?.current?.getValue());
    }
  };

  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    values: { username, email, password, password_confirmation },
    errors,
    dirty,
    handleChange,
    // setFieldValue,
    handleSubmit,
    // resetForm,
  } = useFormik<RegisterFormValueType>({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit: (formValues: RegisterFormValueType) => {
      setShouldFetch(false);
      // eslint-disable-next-line no-console
      console.log(formValues);
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

  const signUpButtonDisabled = formikSubmitButtonDisabled(dirty, errors);

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
              <Input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
              />
              <FormHelperText color={useColorModeValue("red.700", "red.400")}>
                {errors.username || ""}
              </FormHelperText>
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
              <FormHelperText color={useColorModeValue("red.700", "red.400")}>
                {errors.email || ""}
              </FormHelperText>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
              <FormHelperText color={useColorModeValue("red.700", "red.400")}>
                {errors.password || ""}
              </FormHelperText>
            </FormControl>
            <FormControl id="password_confirmation" isRequired>
              <FormLabel>Password confirmation</FormLabel>
              <Input
                type="password"
                name="password_confirmation"
                value={password_confirmation}
                onChange={handleChange}
              />
              <FormHelperText color={useColorModeValue("red.700", "red.400")}>
                {errors.password_confirmation || ""}
              </FormHelperText>
            </FormControl>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
              onChange={handleRecaptcha}
            />
            <Stack spacing={10}>
              <Stack pt={6}>
                <Text align="center">
                  Already have an account?{" "}
                  <NextChakraLink href="/login" color="blue.400">
                    Sign In
                  </NextChakraLink>
                </Text>
              </Stack>
              <Button
                disabled={signUpButtonDisabled || recaptcha === ""}
                onClick={() => handleSubmit()}
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
