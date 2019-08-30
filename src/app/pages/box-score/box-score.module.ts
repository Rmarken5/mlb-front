import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxScoreComponent } from './box-score.component';
import { RouterModule } from '@angular/router';
import { AbbreviatedTeamScoreComponent } from './away-home-score-banner/abbreviated-team-score/abbreviated-team-score.component';
import { AwayHomeScoreBannerComponent } from './away-home-score-banner/away-home-score-banner.component';
import { BallsStrikesOutsComponent } from './away-home-score-banner/balls-strikes-outs/balls-strikes-outs.component';
import { BaseRunnersComponent } from './away-home-score-banner/base-runners/base-runners.component';

@NgModule({
  declarations: [BoxScoreComponent, AwayHomeScoreBannerComponent, AbbreviatedTeamScoreComponent, BallsStrikesOutsComponent, BaseRunnersComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [BoxScoreComponent]
})
export class BoxScoreModule { }
