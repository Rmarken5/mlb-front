import { Team } from "./team";

export class Game {
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
}
