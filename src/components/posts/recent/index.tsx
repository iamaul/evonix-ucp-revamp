import { SimpleGrid, Spinner } from "@chakra-ui/react";
import type { GetStaticProps } from "next";

import type { RecentPostsProps } from "./types";

import RecentPostsCard from "@/components/layout/recent-posts";
import { getNewsHeadlineList, useNewsHeadlineList } from "@/services/news";

const RecentPosts = ({ newsHeadlineFallbackData }: RecentPostsProps) => {
  const { data: newsHeadline, isLoading } = useNewsHeadlineList(
    newsHeadlineFallbackData
  );

  return isLoading ? (
    <Spinner />
  ) : (
    <SimpleGrid columns={1} spacing={4} mt={8} w="100%">
      <RecentPostsCard newsHeadline={newsHeadline} />
    </SimpleGrid>
  );
};

export const getStaticProps: GetStaticProps<RecentPostsProps> = async () => {
  try {
    const newsHeadlineFallbackData = await getNewsHeadlineList();

    return {
      props: {
        newsHeadlineFallbackData,
      },
      revalidate: 60,
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default RecentPosts;
