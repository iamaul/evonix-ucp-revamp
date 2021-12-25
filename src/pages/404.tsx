import {
  Heading,
  Image,
  Center,
  Button,
  VStack,
  Box,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

import Container from "@/components/common/Container";
import MotionBox from "@/components/motion/Box";

const Page404 = () => {
  return (
    <>
      <Container>
        <Center>
          <MotionBox
            animate={{ y: 20 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: "reverse",
            }}
            width={["100%", "70%", "60%", "60%"]}
            margin="0 auto"
          >
            <Image
              src="/static/images/404.jpeg"
              alt="page-404-not-found"
              rounded="md"
              shadow="lg"
            />
          </MotionBox>

          <VStack>
            <Heading size="xl">404</Heading>
            <Box textAlign="center">
              <Text fontSize={["sm", null, "sm"]}>
                Ah shit, here we go again
              </Text>
            </Box>
            <Link href="/" passHref>
              <Button
                size="sm"
                colorScheme="red.300"
                backgroundColor={useColorModeValue("red.700", "red.300")}
              >
                Back
              </Button>
            </Link>
          </VStack>
        </Center>
      </Container>
    </>
  );
};

export default Page404;
