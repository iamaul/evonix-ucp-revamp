import {
  HStack,
  Stack,
  Image,
  Text,
  useColorModeValue,
  VStack,
  Tooltip,
} from "@chakra-ui/react";
import parse from "html-react-parser";
import Link from "next/link";
import Truncate from "react-truncate";

import { PostListProps } from "./types";

const PostList = ({ news }: PostListProps) => {
  const bgColor = useColorModeValue("white", "neutralD.100");
  const borderColor = useColorModeValue("neutral.400", "neutralD.400");
  const textColor = useColorModeValue("neutral.200", "gray.400");

  return (
    <>
      {news?.map((data) => (
        <Link href={`/post/${data.slug}`} passHref>
          <Tooltip label="Read more">
            <Stack
              w="100%"
              rounded="lg"
              borderWidth="1px"
              bg={bgColor}
              borderColor={borderColor}
              p={6}
              spacing={4}
              cursor="pointer"
              transition="all 0.25s"
              transition-timing-function="spring(1 100 10 10)"
              _hover={{ transform: "translateY(-4px)", shadow: "md" }}
            >
              <HStack
                spacing={{ base: 3, md: 8 }}
                w="100%"
                justifyContent="start"
              >
                <Image
                  src={data.image}
                  borderRadius="sm"
                  boxSize={{ base: "80px", md: "150px" }}
                  boxShadow="xs"
                />
                <VStack align="start">
                  <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }}>
                    {data.title}
                  </Text>
                  <Text
                    fontSize={["md", null, "sm"]}
                    align="justify"
                    color={textColor}
                  >
                    <Truncate lines={2} ellipsis={<span>...</span>}>
                      {parse(data.content)}
                    </Truncate>
                  </Text>
                </VStack>
              </HStack>
            </Stack>
          </Tooltip>
        </Link>
      ))}
    </>
  );
};

export default PostList;
