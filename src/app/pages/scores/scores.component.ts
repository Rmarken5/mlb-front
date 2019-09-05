import { Component, OnInit, OnDestroy } from '@angular/core';
import { Game } from 'src/app/shared/models/game';
import { Team } from 'src/app/shared/models/team';
import { GamesService } from 'src/app/services/rest/games.service';
import { startWith } from 'rxjs/operators';
import { interval } from 'rxjs/internal/observable/interval';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit, OnDestroy {


  games: Game[] = [];
  private _interval: Subscription;
  private  _gamesSub: Subscription;

  constructor(private gamesSvc: GamesService) {

  }

  ngOnInit() {

   /*  this.gamesSvc.fetchGames(new Date()).subscribe(res =>{
      this.games = res;
    }); */

     this._interval = interval(1000 * 5).pipe(startWith(0)).subscribe(num =>{
      this._gamesSub = this.gamesSvc.fetchGames(new Date()).subscribe(res =>{
        this.games = res;
      });
    });
  }

  ngOnDestroy(): void {
    this._interval.unsubscribe();
    this._gamesSub.unsubscribe();
  }


}
