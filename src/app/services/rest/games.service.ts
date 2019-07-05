import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Game } from 'src/app/shared/models/game';
import { Team } from 'src/app/shared/models/team';
import { Observable } from 'rxjs';
import {environment} from '../../../../src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private _games: BehaviorSubject<Game[]>;

  public games$: Observable<Game[]>;



  constructor(
    private http: HttpClient
  ) {
    this._games = new BehaviorSubject<Game[]>([]);
    this.games$ = this._games.asObservable();
  }

  public fetchGames(date: Date): BehaviorSubject<Game[]> {

    this.http.get<any>(`${environment.server}:3000/baseball?date=${date.toLocaleString()}`).subscribe(res => {

      res = res.dates[0].games;
      const gamesArr = res.map(el => {
        const game: Game = new Game();
        const homeTeam: Team = new Team();
        const awayTeam: Team = new Team();
        const resHome = el.teams.home;
        const resaway = el.teams.away;



        homeTeam.teamName = resHome.team.shortName;
        homeTeam.runs = resHome.score;
        homeTeam.teamCode = resHome.team.abbreviation.toLowerCase();
        homeTeam.teamIconUrl = `https://a.espncdn.com/i/teamlogos/mlb/500/${homeTeam.teamCode}.png`;
        homeTeam.wins = resHome.leagueRecord.wins;
        homeTeam.losses = resHome.leagueRecord.losses;

        awayTeam.teamName = resaway.team.shortName;
        awayTeam.runs = resaway.score;
        awayTeam.teamCode = resaway.team.abbreviation.toLowerCase();
        awayTeam.teamIconUrl = `https://a.espncdn.com/i/teamlogos/mlb/500/${awayTeam.teamCode}.png`;
        awayTeam.wins = resaway.leagueRecord.wins;
        awayTeam.losses = resaway.leagueRecord.losses;

        game.awayTeam = awayTeam;
        game.homeTeam = homeTeam;
        game.dateTime = new Date(el.gameDate);
        game.isStarted = el.status.statusCode === 'I' ? true : el.status.statusCode === 'F' ? true : false;
        if (el.linescore) {
          const linescore = el.linescore;
          game.isStarted = true;
          game.isTop = linescore.isTopInning || '';
          game.inning = linescore.currentInning;
          if (linescore.offense && linescore.offense.batter && linescore.offense.batter.fullName) {
            game.batter = linescore.offense.batter.fullName || '';
          }
          game.balls = linescore.balls || '';
          game.strikes = linescore.strikes || '';
          game.outs = linescore.outs || '';
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

  public get games(): Observable<Game[]> {
    return this.games$;
  }

}
