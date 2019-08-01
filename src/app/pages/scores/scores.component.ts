import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/models/game';
import { Team } from 'src/app/shared/models/team';
import { GamesService } from 'src/app/services/rest/games.service';
import { startWith } from 'rxjs/operators';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {

  games: Game[] = [];

  constructor(private gamesSvc: GamesService) {

  }

  ngOnInit() {

   /*  this.gamesSvc.fetchGames(new Date()).subscribe(res =>{
      this.games = res;
    }); */

     interval(1000 * 5).pipe(startWith(0)).subscribe(num =>{
      this.gamesSvc.fetchGames(new Date()).subscribe(res =>{
        this.games = res;
      });
    });
  }

}
