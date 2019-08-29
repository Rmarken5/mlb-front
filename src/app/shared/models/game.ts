import { Team } from "./team";

export class Game {
  gameId: string;
  homeTeam: Team;
  awayTeam: Team;
  dateTime: Date;
  isStarted: boolean;
  inning: string;
  isTop: boolean;
  batter: string;
  balls: string;
  strikes: string;
  outs: string;
  first: boolean;
  second: boolean;
  third: boolean;
}
