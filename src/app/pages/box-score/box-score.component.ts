import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoxScoreService } from 'src/app/services/rest/box-score.service';
import { BoxScore, GameStats } from 'src/app/shared/models/box-score';
import { interval, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Observable } from 'apollo-link';

@Component({
  selector: 'app-box-score',
  templateUrl: './box-score.component.html',
  styleUrls: ['./box-score.component.scss']
})
export class BoxScoreComponent implements OnInit, OnDestroy {

  public boxScore: BoxScore;

  public selectedLineup: GameStats[];

  private interval: Subscription;
  private bsSubsription: Subscription;

  constructor(private route: ActivatedRoute, private _boxSvc: BoxScoreService) {

    this.route.params.subscribe(val => {
      this.interval = interval(1000 * 5).pipe(startWith(0)).subscribe(num => {
        this._boxSvc.findBoxForGame(val['gameId']);
      });


    });

    this.bsSubsription = this._boxSvc.boxScoreObservable.subscribe(boxScore => {
      this.boxScore = boxScore;
      console.log(this.boxScore);
      if (this.boxScore && !this.selectedLineup) {
        this.selectedLineup = this.boxScore.awayLineup;
      }
    });
  }


  teamListener(team) {
    if (team === 'away') {
      this.selectedLineup = this.boxScore.awayLineup;
    } else if (team === 'home') {
      this.selectedLineup = this.boxScore.homeLineup;
    }
  }

  ngOnInit() {
  }


  ngOnDestroy(): void {
    this.interval.unsubscribe();
    this.bsSubsription.unsubscribe();
  }
}
