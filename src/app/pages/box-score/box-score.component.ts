import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoxScoreService } from 'src/app/services/rest/box-score.service';
import { BoxScore, GameStats } from 'src/app/shared/models/box-score';

@Component({
  selector: 'app-box-score',
  templateUrl: './box-score.component.html',
  styleUrls: ['./box-score.component.scss']
})
export class BoxScoreComponent implements OnInit {

  public boxScore: BoxScore;


  constructor(private route: ActivatedRoute, private _boxSvc: BoxScoreService) {

    this.route.params.subscribe(val => {
      this._boxSvc.findBoxForGame(val['gameId']);
    });

    this._boxSvc.boxScoreObservable.subscribe(boxScore => {
      this.boxScore = boxScore;
      console.log(this.boxScore);
    });


  }

  ngOnInit() {
  }

}
