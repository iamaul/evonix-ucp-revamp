import { ServerResponse } from "@/types/server-response";
import { apiGet, useApiSWR } from "@/utils/swr-api";

const SERVER_PATH = "/api/v1/server/new";

export const getServerInfo = () => apiGet<ServerResponse>(SERVER_PATH);

export const useServerInfo = (fallbackData?: ServerResponse) =>
  useApiSWR<ServerResponse>(SERVER_PATH, undefined, fallbackData);
