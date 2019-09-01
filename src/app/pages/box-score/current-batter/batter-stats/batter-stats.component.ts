import { Component, OnInit, Input } from '@angular/core';
import { CurrentBatter } from 'src/app/shared/models/box-score';

@Component({
  selector: 'app-batter-stats',
  templateUrl: './batter-stats.component.html',
  styleUrls: ['./batter-stats.component.scss']
})
export class BatterStatsComponent implements OnInit {


  @Input() batterStats: CurrentBatter;

  constructor() { }

  ngOnInit() {
  }

}
