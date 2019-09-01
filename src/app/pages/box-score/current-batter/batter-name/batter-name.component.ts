import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-batter-name',
  templateUrl: './batter-name.component.html',
  styleUrls: ['./batter-name.component.scss']
})
export class BatterNameComponent implements OnInit {


  @Input() batterName: string;

  constructor() { }

  ngOnInit() {
  }

}
