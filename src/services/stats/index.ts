import { StatsResponse } from "@/types/stats-response";
import { apiGet, useApiSWR } from "@/utils/swr-api";

const USERS_PATH = "/api/v1/server/stats/users";
const PLAYER_VEHICLES_PATH = "/api/v1/server/stats/player_vehicles";
const PLAYER_PROPERTIES_PATH = "/api/v1/server/stats/player_properties";
const USER_APPLICATIONS_PATH = "/api/v1/server/stats/user_applications";

export const getCountUsers = () => apiGet<StatsResponse>(USERS_PATH);
export const getCountPlayerVehicles = () =>
  apiGet<StatsResponse>(PLAYER_VEHICLES_PATH);
export const getCountPlayerProperties = () =>
  apiGet<StatsResponse>(PLAYER_PROPERTIES_PATH);
export const getCountUserApplications = () =>
  apiGet<StatsResponse>(USER_APPLICATIONS_PATH);

export const useCountUsers = (fallbackData?: StatsResponse) =>
  useApiSWR<StatsResponse>(USERS_PATH, undefined, fallbackData);
export const useCountPlayerVehicles = (fallbackData?: StatsResponse) =>
  useApiSWR<StatsResponse>(PLAYER_VEHICLES_PATH, undefined, fallbackData);
export const useCountPlayerProperties = (fallbackData?: StatsResponse) =>
  useApiSWR<StatsResponse>(PLAYER_PROPERTIES_PATH, undefined, fallbackData);
export const useCountUserApplications = (fallbackData?: StatsResponse) =>
  useApiSWR<StatsResponse>(USER_APPLICATIONS_PATH, undefined, fallbackData);
