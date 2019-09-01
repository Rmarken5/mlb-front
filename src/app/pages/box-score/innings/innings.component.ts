import { Component, OnInit, Input } from '@angular/core';
import { Inning } from 'src/app/shared/models/box-score';

@Component({
  selector: 'app-innings',
  templateUrl: './innings.component.html',
  styleUrls: ['./innings.component.scss']
})
export class InningsComponent implements OnInit {

  @Input() innings: Inning[];
  @Input() homeTeam: string;
  @Input() awayTeam: string;

  constructor() { }

  ngOnInit() {
  }

}
