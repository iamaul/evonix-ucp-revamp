import { Box, ContainerProps } from "@chakra-ui/react";

const Container = (props: ContainerProps) => (
  <Box w="full" mx="auto" maxW="3xl" px={{ base: "6", md: "8" }} {...props} />
);

export default Container;
