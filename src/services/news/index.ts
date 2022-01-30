import { NewsResponse, News } from "@/types/news-response";
import { apiGet, useApiSWR } from "@/utils/swr-api";

const NEWS_PATH = "/api/v1/news";
const HEADLINE_NEWS_PATH = "/api/v1/news/headline";
const NEWS_DETAIL_PATH = "/api/v1/news";

export const getNewsList = () => apiGet<NewsResponse>(NEWS_PATH);
export const getNewsHeadlineList = () =>
  apiGet<NewsResponse>(HEADLINE_NEWS_PATH);
export const getNewsDetail = (slug: string) =>
  apiGet<News>(`${NEWS_DETAIL_PATH}/${slug}`);

export const useNewsList = (fallbackData?: NewsResponse) =>
  useApiSWR<NewsResponse>(NEWS_PATH, undefined, fallbackData);
export const useNewsHeadlineList = (fallbackData?: NewsResponse) =>
  useApiSWR<NewsResponse>(HEADLINE_NEWS_PATH, undefined, fallbackData);
export const useNewsDetail = (
  slug: string,
  fallbackData?: News,
  status?: boolean
) =>
  useApiSWR<News>(
    `${NEWS_DETAIL_PATH}/${slug}`,
    undefined,
    fallbackData,
    status
  );
