import { Component, OnInit, Input } from '@angular/core';
import { BoxScore } from 'src/app/shared/models/box-score';

@Component({
  selector: 'app-away-home-score-banner',
  templateUrl: './away-home-score-banner.component.html',
  styleUrls: ['./away-home-score-banner.component.scss']
})
export class AwayHomeScoreBannerComponent implements OnInit {

  @Input() boxScore: BoxScore;

  constructor() { }

  ngOnInit() {
  }

}
