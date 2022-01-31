export type ServerResponse = {
  address: string;
  gamemode: string;
  hostname: string;
  mapname: string;
  maxplayers: number;
  online: number;
  passworded: boolean;
  players: Array<Players>;
  rules: Rules;
};

export type Players = {
  id: number;
  name: string;
  ping: number;
  score: number;
};

export type Rules = {
  artwork: string;
  lagcomp: boolean;
  mapname: string;
  version: string;
  weather: number;
  weburl: string;
  worldtime: string;
};
