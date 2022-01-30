import { StatsResponse } from "@/types/stats-response";

export type StatsProps = {
  usersFallbackData?: StatsResponse;
  playerVehiclesFallbackData?: StatsResponse;
  playerPropertiesFallbackData?: StatsResponse;
  userApplicationsFallbackData?: StatsResponse;
};
