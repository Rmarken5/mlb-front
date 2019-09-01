import { Component, OnInit, Input } from '@angular/core';
import { GameStats } from 'src/app/shared/models/box-score';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss']
})
export class LineupComponent implements OnInit {

  @Input() lineup: GameStats[];

  constructor() {

  }

  ngOnInit() {
  }

}
