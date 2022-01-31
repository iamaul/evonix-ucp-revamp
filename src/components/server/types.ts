import { ServerResponse } from "@/types/server-response";

export type ServerInfoProps = {
  serverFallbackData?: ServerResponse;
};

export type ServerProps = {
  server: ServerResponse;
};
