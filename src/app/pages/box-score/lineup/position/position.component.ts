import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { GameStats } from 'src/app/shared/models/box-score';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {

  @Input() player: GameStats;
  fullPlayer: string;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {

    this.fullPlayer = this.player
      && this.player.position
      ? `${this.player.fullName}, ${this.player.position}`
      : this.player.fullName;

  }
}
