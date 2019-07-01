import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/models/game';
import { Team } from 'src/app/shared/models/team';
import { GamesService } from 'src/app/services/rest/games.service';

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
    this.games = this.gamesSvc.games.value;
    setInterval(() => {
      this.gamesSvc.fetchGames(new Date()).subscribe(res => {
        this.games = res;
      });
    }, 1000 * 20);
  }

  }
