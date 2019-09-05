import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-team-toggle',
  templateUrl: './team-toggle.component.html',
  styleUrls: ['./team-toggle.component.scss']
})
export class TeamToggleComponent implements OnInit {

  @Input() awayTeamName: string;
  @Input() homeTeamName: string;
  @Output() selectedTeam  = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  public toggleAway(): void {
    console.log('away');
    this.selectedTeam.emit('away');
  }
  public toggleHome(): void {
    console.log('home');
    this.selectedTeam.emit('home');
  }

}
