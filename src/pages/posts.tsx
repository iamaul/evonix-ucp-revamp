import { Box, Heading, Spinner, VStack } from "@chakra-ui/react";
import { GetStaticProps } from "next";

import PageTransition from "@/components/common/PageTransitions";
import Section from "@/components/common/Section";
import Layout from "@/components/layout";
import PostList from "@/components/posts";
import { PostsProps } from "@/components/posts/types";
import { getNewsList, useNewsList } from "@/services/news";

const Posts = ({ newsFallbackData }: PostsProps) => {
  const { data: news, isLoading } = useNewsList(newsFallbackData);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Layout>
      <PageTransition>
        <Section>
          <VStack w="100%" align="left" spacing={6}>
            <Box mt={10}>
              <Heading size="xl">📄 Posts</Heading>
              <Heading size="sm" fontWeight="thin">
                All the latest posts you can find here!
              </Heading>
            </Box>
            <PostList news={news} />
          </VStack>
        </Section>
      </PageTransition>
    </Layout>
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
