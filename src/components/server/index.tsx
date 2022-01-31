import {
  Heading,
  Image,
  VStack,
  Text,
  Box,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { ServerProps } from "./types";

import MotionBox from "@/components/motion/Box";

const ServerInfo = ({ server, error }: ServerProps) => {
  return (
    <>
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
            <Table variant="simple">
              <TableCaption>Online Players</TableCaption>
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Player Name</Th>
                  <Th>Ping</Th>
                  <Th>Score</Th>
                </Tr>
              </Thead>
              <Tbody>
                {server?.players.map((data) => (
                  <Tr>
                    <Td>{data.id}</Td>
                    <Td>{data.name}</Td>
                    <Td>{data.ping}</Td>
                    <Td>{data.score}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </>
        )}
      </VStack>
    </>
  );
};

export default ServerInfo;
