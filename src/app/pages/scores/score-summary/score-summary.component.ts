import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/shared/models/game';

@Component({
  selector: 'app-score-summary',
  templateUrl: './score-summary.component.html',
  styleUrls: ['./score-summary.component.scss']
})
export class ScoreSummaryComponent implements OnInit {


  @Input() game: Game;

  constructor() { }

  ngOnInit() {
  }

}
