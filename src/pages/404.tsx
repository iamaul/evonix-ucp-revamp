import {
  Heading,
  Image,
  Button,
  VStack,
  Box,
  useColorModeValue,
  Text,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import useSound from "use-sound";

import Container from "@/components/common/Container";
import PageTransition from "@/components/common/PageTransitions";
import MotionBox from "@/components/motion/Box";

const Page404 = () => {
  const [playSound] = useSound("/static/sounds/here-we-go-again.mp3");

  React.useEffect(() => {
    playSound();
  }, [playSound]);

  return (
    <>
      <PageTransition>
        <Container>
          <Flex minH="100vh" align="center" justify="center">
            <VStack>
              <MotionBox
                animate={{ y: 20 }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  repeatType: "reverse",
                }}
                width={["100%", "80%", "68%", "68%"]}
                margin="0 auto"
                marginBottom={5}
              >
                <Image
                  src="/static/images/404.jpeg"
                  alt="page-404-not-found"
                  rounded="md"
                  shadow="lg"
                />
              </MotionBox>

              <Heading size="xl">404</Heading>
              <Box align="center" justify="center">
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
          </Flex>
        </Container>
      </PageTransition>
    </>
  );
};

export default Page404;
