import { NewsHeadlineResponse } from "@/types/news-response";
import { apiGet, useApiSWR } from "@/utils/swr-api";

const NEWS_PATH = "/api/v1/news";
const HEADLINE_NEWS_PATH = "/api/v1/news/headline";

export type NewsResponse = NewsHeadlineResponse;

export const getNewsList = () => apiGet<NewsResponse>(NEWS_PATH);
export const getNewsHeadlineList = () =>
  apiGet<NewsResponse>(HEADLINE_NEWS_PATH);

export const useNewsList = (fallbackData?: NewsResponse) =>
  useApiSWR<NewsResponse>(NEWS_PATH, undefined, fallbackData);
export const useNewsHeadlineList = (fallbackData?: NewsResponse) =>
  useApiSWR<NewsResponse>(HEADLINE_NEWS_PATH, undefined, fallbackData);
