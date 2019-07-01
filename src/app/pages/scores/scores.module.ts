import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoresComponent } from './scores.component';
import { ScoreSummaryComponent } from './score-summary/score-summary.component';

@NgModule({
  declarations: [ScoresComponent, ScoreSummaryComponent],
  imports: [
    CommonModule
  ],
  exports:[ScoresComponent, ScoreSummaryComponent]
})
export class ScoresModule { }
