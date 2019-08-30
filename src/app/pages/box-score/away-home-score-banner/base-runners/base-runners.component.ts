import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-base-runners',
  templateUrl: './base-runners.component.html',
  styleUrls: ['./base-runners.component.scss']
})
export class BaseRunnersComponent implements OnInit {

  @Input() isFirst: boolean;
  @Input() isSecond: boolean;
  @Input() isThird: boolean;

  constructor() { }

  ngOnInit() {
  }

}
