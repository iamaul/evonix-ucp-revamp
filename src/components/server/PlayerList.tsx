import {
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { ServerProps } from "./types";

const PlayerList = ({ server }: ServerProps) => {
  return (
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
        {server.players.map((data) => (
          <Tr>
            <Td>{data.id}</Td>
            <Td>{data.name}</Td>
            <Td>{data.ping}</Td>
            <Td>{data.score}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default PlayerList;
