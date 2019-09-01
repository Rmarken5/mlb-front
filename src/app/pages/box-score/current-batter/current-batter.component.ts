import { Component, OnInit, Input } from '@angular/core';
import { CurrentBatter } from 'src/app/shared/models/box-score';

@Component({
  selector: 'app-current-batter',
  templateUrl: './current-batter.component.html',
  styleUrls: ['./current-batter.component.scss']
})
export class CurrentBatterComponent implements OnInit {


  @Input() batter: CurrentBatter;

  constructor() { }

  ngOnInit() {
  }

}
