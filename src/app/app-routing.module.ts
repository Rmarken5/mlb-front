import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ScoresComponent } from './pages/scores/scores.component';
import { ScoresModule } from './pages/scores/scores.module';
import { SignInModule } from './pages/sign-in/sign-in.module';

const routes: Routes = [
  { path: '', component: SignInComponent, outlet: 'signIn' },
  { path: '', component: ScoresComponent, outlet: 'content' },
  { path: 'login', component: SignInComponent, outlet: 'signIn' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    ReactiveFormsModule,
    ScoresModule,
    SignInModule,
  ],
  exports: [RouterModule],
  declarations: [
   ]
})
export class AppRoutingModule { }


