import { Box, Heading, Spinner, VStack } from "@chakra-ui/react";
import { GetStaticProps } from "next";

import PageTransition from "@/components/common/PageTransitions";
import Section from "@/components/common/Section";
import PostList from "@/components/posts";
import { PostsProps } from "@/components/posts/types";
import { getNewsList, useNewsList } from "@/services/news";

const Posts = ({ newsFallbackData }: PostsProps) => {
  const { data: news, isLoading } = useNewsList(newsFallbackData);

  if (isLoading) {
    <Spinner />;
  }

  return (
    <PageTransition>
      <>
        <Section>
          <VStack w="100%" align="left" spacing={6}>
            <Box>
              <Heading size="xl">📄 Posts</Heading>
            </Box>
            <PostList news={news} />
          </VStack>
        </Section>
      </>
    </PageTransition>
  );
};

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
  try {
    const newsFallbackData = await getNewsList();

    return {
      props: {
        newsFallbackData,
      },
      revalidate: 60,
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default Posts;
