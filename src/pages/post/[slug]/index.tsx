import {
  Box,
  Divider,
  Heading,
  Spinner,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  VStack,
} from "@chakra-ui/react";
import parse from "html-react-parser";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Moment from "react-moment";

import PageTransition from "@/components/common/PageTransitions";
import ScrollProgress from "@/components/common/ScrollProgress";
import Section from "@/components/common/Section";
import PostSeo from "@/components/posts/PostSeo";
import { PostDetailProps, PostDetailParams } from "@/components/posts/types";
import { getNewsDetail, useNewsDetail } from "@/services/news";

const PostDetail = ({ newsDetailFallbackData }: PostDetailProps) => {
  const router = useRouter();

  const [postSlug, setPostSlug] = React.useState<string>();
  const target = React.createRef<HTMLElement>();

  const {
    query: { slug },
  } = router;

  React.useEffect(() => {
    if (slug) {
      setPostSlug(String(slug));
    }
  }, [slug]);

  const { data, isLoading } = useNewsDetail(
    postSlug ?? "",
    newsDetailFallbackData,
    !!postSlug
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <PageTransition>
      <>
        <Section>
          <PostSeo
            url={`${process.env.NEXT_PUBLIC_SITE_URL}/post/${data?.slug}`}
            image={data?.image}
            title={data?.title}
            content={data?.content}
            createdBy={data?.newsCreatedBy.name}
            createdAt={data?.created_at}
          />
          <article ref={target}>
            <VStack w="100%" align="left" spacing={6} mt={10}>
              <Breadcrumb>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink href="/posts">Posts</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">{data?.slug}</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <Box
                mt={4}
                rounded="lg"
                shadow="md"
                overflow="hidden"
                lineHeight={0}
              >
                <Image
                  alt={data?.slug}
                  src={data?.image ?? ""}
                  priority
                  width={2240}
                  height={1500}
                />
              </Box>
              <VStack align="stretch" spacing={6} mb={4}>
                <Heading as="h1">{data?.title}</Heading>
                <Text fontSize={["md", null, "sm"]} align="justify">
                  Posted by <b>{data?.newsCreatedBy.name}</b> on{" "}
                  <Moment unix format="lll">
                    {data?.created_at}
                  </Moment>
                </Text>
                {data?.updated_at && (
                  <Text fontSize={["md", null, "sm"]} align="justify">
                    Last updated on{" "}
                    <Moment unix format="lll">
                      {data?.updated_at}
                    </Moment>{" "}
                    by <b>{data?.newsUpdatedBy.name}</b>
                  </Text>
                )}
              </VStack>
            </VStack>
            <Divider orientation="horizontal" mb={5} />
            {parse(data?.content ?? "")}
          </article>
        </Section>
        <ScrollProgress target={target} />
      </>
    </PageTransition>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<
  PostDetailProps,
  PostDetailParams
> = async (ctx) => {
  const { params } = ctx;

  if (!params?.slug) {
    return {
      notFound: true,
    };
  }

  try {
    const slug = String(params.slug);
    const newsDetailFallbackData = await getNewsDetail(slug);

    return {
      props: {
        newsDetailFallbackData,
      },
      revalidate: 60,
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default PostDetail;
