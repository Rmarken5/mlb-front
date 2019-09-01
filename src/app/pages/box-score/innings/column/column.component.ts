import { Component, OnInit, Input } from '@angular/core';
import { Inning } from 'src/app/shared/models/box-score';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {


  @Input() inning: Inning;

  constructor() { }

  ngOnInit() {
  }

}
