import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-name',
  templateUrl: './team-name.component.html',
  styleUrls: ['./team-name.component.scss']
})
export class TeamNameComponent implements OnInit {


  @Input() teamName: string;

  constructor() { }

  ngOnInit() {
  }

}
