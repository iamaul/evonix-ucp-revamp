import { Box, Spinner } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import React from "react";
import useSound from "use-sound";

import PageTransition from "@/components/common/PageTransitions";
import Section from "@/components/common/Section";
import ServerInfo from "@/components/server";
import ServerSeo from "@/components/server/ServerSeo";
import { ServerInfoProps } from "@/components/server/types";
import { getServerInfo, useServerInfo } from "@/services/server";

const Server = ({ serverFallbackData }: ServerInfoProps) => {
  const [error, setError] = React.useState<boolean>(false);
  const [playSound] = useSound("/static/sounds/cj-falling-down.mp3");

  const {
    data: server,
    isLoading,
    isError,
  } = useServerInfo(serverFallbackData);

  if (isError) {
    setError(true);
  }

  React.useEffect(() => {
    if (error) {
      playSound();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playSound]);

  if (isLoading) {
    return (
      <Box textAlign="center">
        <Spinner size="lg" />
      </Box>
    );
  }

  return (
    <PageTransition>
      <>
        <ServerSeo
          hostname={server?.hostname}
          address={server?.address}
          gamemode={server?.gamemode}
          mapname={server?.rules.mapname}
          maxplayers={server?.maxplayers}
          online={server?.online}
        />
        <Section>
          <ServerInfo server={server} error={error} />
        </Section>
      </>
    </PageTransition>
  );
};

export const getStaticProps: GetStaticProps<ServerInfoProps> = async () => {
  const serverFallbackData = await getServerInfo();

  return {
    props: {
      serverFallbackData,
    },
    revalidate: 60,
  };
};

export default Server;
