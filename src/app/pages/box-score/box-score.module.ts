import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxScoreComponent } from './box-score.component';
import { RouterModule } from '@angular/router';
import { AbbreviatedTeamScoreComponent } from './away-home-score-banner/abbreviated-team-score/abbreviated-team-score.component';
import { AwayHomeScoreBannerComponent } from './away-home-score-banner/away-home-score-banner.component';
import { BallsStrikesOutsComponent } from './away-home-score-banner/balls-strikes-outs/balls-strikes-outs.component';
import { BaseRunnersComponent } from './away-home-score-banner/base-runners/base-runners.component';
import { InningsComponent } from './innings/innings.component';
import { ColumnComponent } from './innings/column/column.component';
import { TeamNameComponent } from './innings/team-name/team-name.component';
import { CurrentBatterComponent } from './current-batter/current-batter.component';
import { BatterNameComponent } from './current-batter/batter-name/batter-name.component';
import { BatterStatsComponent } from './current-batter/batter-stats/batter-stats.component';
import { LineupComponent } from './lineup/lineup.component';
import { HeaderComponent } from './lineup/header/header.component';
import { PositionComponent } from './lineup/position/position.component';
import { TeamToggleComponent } from './team-toggle/team-toggle.component';

@NgModule({
  declarations: [BoxScoreComponent, AwayHomeScoreBannerComponent, AbbreviatedTeamScoreComponent, BallsStrikesOutsComponent, BaseRunnersComponent, InningsComponent, ColumnComponent, TeamNameComponent, CurrentBatterComponent, BatterNameComponent, BatterStatsComponent, LineupComponent, HeaderComponent, PositionComponent, TeamToggleComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [BoxScoreComponent]
})
export class BoxScoreModule { }
