export interface CurrentBatter {
  name: string;
  avg: string;
  obp: string;
  slg: string;
  hr: number;
}

export interface Home {
  runs: number;
  hits: number;
  errors: number;
  leftOnBase: number;
}

export interface Away {
  runs: number;
  hits: number;
  errors: number;
  leftOnBase: number;
}

export interface Inning {
  num: number;
  ordinalNum: string;
  home: Home;
  away: Away;
}

export interface AwayLineup {
  fullName: string;
  position: string;
  atBats: number;
  runs: number;
  hits: number;
  runsBattedIn: number;
  baseOnBalls: number;
  strikeOuts: number;
  leftOnBase: number;
  battingAverage: string;
  onBasePlusSlugging: string;
}

export interface HomeLineup {
  fullName: string;
  position: string;
  atBats: number;
  runs: number;
  hits: number;
  runsBattedIn: number;
  baseOnBalls: number;
  strikeOuts: number;
  leftOnBase: number;
  battingAverage: string;
  onBasePlusSlugging: string;
}

export interface BoxScore {
  gameStatus: string;
  homeTeam: string;
  awayTeam: string;
  currentBatter: CurrentBatter;
  currentInning: number;
  inningState: string;
  balls: number;
  strikes: number;
  outs: number;
  first: boolean;
  second: boolean;
  third: boolean;
  innings: Inning[];
  awayLineup: AwayLineup[];
  homeLineup: HomeLineup[];
}
