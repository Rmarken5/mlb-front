import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-abbreviated-team-score',
  templateUrl: './abbreviated-team-score.component.html',
  styleUrls: ['./abbreviated-team-score.component.scss']
})
export class AbbreviatedTeamScoreComponent implements OnInit {

  @Input() teamName: string;
  @Input() score: number;
  @Input() colorScheme: string;

  constructor() { }

  ngOnInit() {
  }

}
