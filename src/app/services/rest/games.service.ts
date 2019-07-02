import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Game } from 'src/app/shared/models/game';
import { Team } from 'src/app/shared/models/team';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private _games: BehaviorSubject<Game[]> = new BehaviorSubject<Game[]>([]);


  constructor(
    private http: HttpClient
  ) { }

  public fetchGames(date: Date): BehaviorSubject<Game[]> {

    this.http.get<any>(`http://192.168.0.20:3000/baseball?date=${date.toLocaleString()}`).subscribe(res => {

      res = res.dates[0].games;
      let gamesArr = res.map(el => {
        let game: Game = new Game();
        let homeTeam: Team = new Team();
        let awayTeam: Team = new Team();
        let resHome = el.teams.home;
        let resaway = el.teams.away;


        homeTeam.teamName = resHome.team.shortName;
        homeTeam.runs = resHome.score;
        homeTeam.teamIconUrl = `https://a.espncdn.com/i/teamlogos/mlb/500/${resHome.team.abbreviation}.png`;
        homeTeam.wins = resHome.leagueRecord.wins;
        homeTeam.losses = resHome.leagueRecord.losses;

        awayTeam.teamName = resaway.team.shortName;
        awayTeam.runs = resaway.score;
        awayTeam.teamIconUrl = `https://a.espncdn.com/i/teamlogos/mlb/500/${resaway.team.abbreviation}.png`;
        awayTeam.wins = resaway.leagueRecord.wins;
        awayTeam.losses = resaway.leagueRecord.losses;

        game.awayTeam = awayTeam;
        game.homeTeam = homeTeam;
        game.dateTime = new Date(el.gameDate);
        game.isStarted = el.status.statusCode === 'I' ? true : el.status.statusCode === 'F' ? true : false;
        if (el.linescore) {
          game.isStarted = true;
          game.isTop = el.linescore.isTopInning;
          game.inning = el.linescore.currentInning;
          game.batter = el.linescore.offense.batter.fullName;
          game.balls = el.linescore.balls;
          game.strikes = el.linescore.strikes;
          game.outs = el.linescore.outs;

        }


        return game;
      });

      this.setGames(gamesArr);
    });
    return this._games;
  }


  private setGames(games: Game[]) {
    this._games.next(games);
  }

  public get games(): BehaviorSubject<Game[]> {
    return this._games;
  }

}
