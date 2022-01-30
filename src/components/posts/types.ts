import { News } from "@/types/news-response";

export type PostDetailProps = {
  newsDetailFallbackData?: News;
};

export type PostDetailParams = {
  slug: string;
};
