import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ScoresComponent } from './pages/scores/scores.component';
import { ScoresModule } from './pages/scores/scores.module';
import { SignInModule } from './pages/sign-in/sign-in.module';
import { BoxScoreComponent } from './pages/box-score/box-score.component';
import { BoxScoreModule } from './pages/box-score/box-score.module';

const routes: Routes = [
  {
    path: 'box/:gameId',
    component: BoxScoreComponent,
    outlet: 'content'

  },
  { path: '', component: SignInComponent, outlet: 'signIn' },
  { path: '', component: ScoresComponent, outlet: 'content', },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    ReactiveFormsModule,
    ScoresModule,
    SignInModule,
    BoxScoreModule,
  ],
  exports: [RouterModule],
  declarations: [
  ]
})
export class AppRoutingModule { }


