import { SimpleGrid, Spinner } from "@chakra-ui/react";
import type { GetStaticProps } from "next";

import type { StatsProps } from "./types";

import { Stat } from "@/components/common/stats/Stat";
import { StatLabel } from "@/components/common/stats/StatLabel";
import { StatNumber } from "@/components/common/stats/StatNumber";
import {
  getCountUsers,
  getCountPlayerVehicles,
  getCountPlayerProperties,
  getCountUserApplications,
  useCountUsers,
  useCountPlayerVehicles,
  useCountPlayerProperties,
  useCountUserApplications,
} from "@/services/stats";
import { formatNumber } from "@/utils/format-number";

const Stats = ({
  usersFallbackData,
  playerVehiclesFallbackData,
  playerPropertiesFallbackData,
  userApplicationsFallbackData,
}: StatsProps) => {
  const { data: countUsers, isLoading: usersLoading } =
    useCountUsers(usersFallbackData);
  const { data: countPlayerVehicles, isLoading: playerVehiclesLoading } =
    useCountPlayerVehicles(playerVehiclesFallbackData);
  const { data: countPlayerProperties, isLoading: playerPropertiesLoading } =
    useCountPlayerProperties(playerPropertiesFallbackData);
  const { data: countUserApplications, isLoading: userApplicationsLoading } =
    useCountUserApplications(userApplicationsFallbackData);

  return (
    <SimpleGrid columns={[2, 4]} spacing={4}>
      <Stat key="users">
        <StatLabel>Users</StatLabel>
        {usersLoading ? (
          <Spinner />
        ) : (
          <StatNumber>{formatNumber(countUsers ?? 0)}</StatNumber>
        )}
      </Stat>
      <Stat key="player_vehicles">
        <StatLabel>Player Vehicles</StatLabel>
        {playerVehiclesLoading ? (
          <Spinner />
        ) : (
          <StatNumber>{formatNumber(countPlayerVehicles ?? 0)}</StatNumber>
        )}
      </Stat>
      <Stat key="player_properties">
        <StatLabel>Player Properties</StatLabel>
        {playerPropertiesLoading ? (
          <Spinner />
        ) : (
          <StatNumber>{formatNumber(countPlayerProperties ?? 0)}</StatNumber>
        )}
      </Stat>
      <Stat key="user_applications">
        <StatLabel>User Applications</StatLabel>
        {userApplicationsLoading ? (
          <Spinner />
        ) : (
          <StatNumber>{formatNumber(countUserApplications ?? 0)}</StatNumber>
        )}
      </Stat>
    </SimpleGrid>
  );
};

export const getStaticProps: GetStaticProps<StatsProps> = async () => {
  try {
    const usersFallbackData = await getCountUsers();
    const playerVehiclesFallbackData = await getCountPlayerVehicles();
    const playerPropertiesFallbackData = await getCountPlayerProperties();
    const userApplicationsFallbackData = await getCountUserApplications();

    return {
      props: {
        usersFallbackData,
        playerVehiclesFallbackData,
        playerPropertiesFallbackData,
        userApplicationsFallbackData,
      },
      revalidate: 60,
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default Stats;
