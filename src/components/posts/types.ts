import { News, NewsResponse } from "@/types/news-response";

export type PostsProps = {
  newsFallbackData?: NewsResponse;
};

export type PostListProps = {
  news?: NewsResponse;
};

export type PostDetailProps = {
  newsDetailFallbackData?: News;
};

export type PostDetailParams = {
  slug: string;
};
