import {
  Box,
  HStack,
  VStack,
  Text,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import parse from "html-react-parser";
import Link from "next/link";
import Moment from "react-moment";
import Truncate from "react-truncate";

import Image from "@/components/common/Image";
import { RecentPostsProps } from "@/components/layout/recent-posts/types";

const RecentPostsCard = ({ newsHeadline }: RecentPostsProps) => {
  const bgColor = useColorModeValue("white", "neutralD.100");
  const borderColor = useColorModeValue("neutral.400", "neutralD.400");
  const textColor = useColorModeValue("neutral.200", "gray.400");

  return (
    <>
      {newsHeadline?.map((data) => (
        <Link href={`/post/${data.slug}`} passHref>
          <HStack
            key={data.id}
            p={4}
            bg={bgColor}
            rounded="lg"
            borderWidth="1px"
            borderColor={borderColor}
            w="100%"
            h="100%"
            textAlign="left"
            cursor="pointer"
            align="start"
            spacing={4}
            transition="all 0.25s"
            transition-timing-function="spring(1 100 10 10)"
            _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
          >
            <Box
              rounded="lg"
              p={2}
              position="relative"
              overflow="hidden"
              lineHeight={0}
              boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.04)"
            >
              <Box
                position="absolute"
                top={0}
                bottom={0}
                left={0}
                right={0}
                opacity={0.25}
              />
              <Image
                src={data.image}
                height={40}
                width={40}
                layout="fixed"
                rounded="md"
              />
            </Box>

            <VStack align="start" justify="flex-start" spacing={1}>
              <VStack spacing={0} align="start">
                <HStack>
                  <Text fontWeight="bold" fontSize="sm" noOfLines={2}>
                    {data.title}
                  </Text>
                  <Tag size="sm" colorScheme="gray">
                    <Moment unix format="ll">
                      {data.created_at}
                    </Moment>
                  </Tag>
                </HStack>

                <Text fontSize="sm" color={textColor}>
                  <Truncate lines={2} ellipsis={<span>...</span>}>
                    {parse(data.content)}
                  </Truncate>
                </Text>
              </VStack>
            </VStack>
          </HStack>
        </Link>
      ))}
    </>
  );
};

export default RecentPostsCard;
