import { Heading, Image, VStack, Text, Box, Spinner } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import React from "react";
import useSound from "use-sound";

import PageTransition from "@/components/common/PageTransitions";
import Section from "@/components/common/Section";
import MotionBox from "@/components/motion/Box";
import PlayerList from "@/components/server/PlayerList";
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
    return <Spinner />;
  }

  return (
    <PageTransition>
      <>
        <Section>
          <ServerSeo
            hostname={server?.hostname}
            address={server?.address}
            gamemode={server?.gamemode}
            mapname={server?.rules.mapname}
            maxplayers={server?.maxplayers}
            online={server?.online}
          />
          <VStack w="100%" align="left" spacing={6}>
            <MotionBox
              animate={{ y: 20 }}
              transition={{
                repeat: Infinity,
                duration: 4,
                repeatType: "reverse",
              }}
              width={["100%", "80%", "48%", "48%"]}
              margin="0 auto"
              marginBottom={5}
            >
              <Image
                src={
                  error
                    ? "/static/images/server-offline.svg"
                    : "/static/images/server-online.svg"
                }
                alt="server"
                rounded="md"
                shadow="sm"
              />
            </MotionBox>
            <Box textAlign="center">
              <Text fontSize="lg">
                {
                  // eslint-disable-next-line no-nested-ternary
                  error ? `😭` : server?.passworded ? `✅ 🔐` : `✅`
                }
              </Text>
              <Text fontSize={["sm", null, "sm"]}>
                {
                  // eslint-disable-next-line no-nested-ternary
                  error
                    ? "Service disruption, huft~"
                    : server?.passworded
                    ? `Server is operating normally but it's locked`
                    : `Server is operating normally, yasss!`
                }
              </Text>
            </Box>
            {!error && (
              <>
                <Box>
                  <Heading size="xl">Server</Heading>
                  <Heading size="sm" fontWeight="thin">
                    Total {server?.online} online players of{" "}
                    <b>{server?.maxplayers}</b>
                  </Heading>
                  <Text fontSize="sm" alignItems="start" fontWeight="light">
                    Current version: <u>{server?.gamemode}</u>
                  </Text>
                </Box>
                <PlayerList server={server} />
              </>
            )}
          </VStack>
        </Section>
      </>
    </PageTransition>
  );
};

export const getStaticProps: GetStaticProps<ServerInfoProps> = async () => {
  try {
    const serverFallbackData = await getServerInfo();

    return {
      props: {
        serverFallbackData,
      },
      revalidate: 60,
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default Server;
