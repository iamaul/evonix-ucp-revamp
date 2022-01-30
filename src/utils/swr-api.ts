/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from "swr";

import { get } from "@/config/network";
import { SWRHookResponse } from "@/types/swr-hook-response";

export const apiGet = <ResType>(path: string, params?: any) =>
  get<ResType>(path, params);

export const useApiSWR = <ResType>(
  path: string,
  params?: any,
  fallbackData?: ResType,
  status = true
): SWRHookResponse<ResType> => {
  const { data, error, mutate } = useSWR<ResType>(
    status ? [path, params] : null,
    apiGet,
    { fallbackData }
  );

  return {
    data,
    isLoading: status && !error && !data,
    isError: error,
    mutate,
  };
};
