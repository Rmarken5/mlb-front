import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoresComponent } from './scores.component';
import { ScoreSummaryComponent } from './score-summary/score-summary.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ScoresComponent, ScoreSummaryComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[ScoresComponent, ScoreSummaryComponent]
})
export class ScoresModule { }
