import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-balls-strikes-outs',
  templateUrl: './balls-strikes-outs.component.html',
  styleUrls: ['./balls-strikes-outs.component.scss']
})
export class BallsStrikesOutsComponent implements OnInit {

  @Input() balls: string;
  @Input() strikes: string;
  @Input() outs: string;

  constructor() { }

  ngOnInit() {
  }

}
