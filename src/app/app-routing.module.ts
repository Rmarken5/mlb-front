import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserModule } from './pages/user/user.module';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [{ path: '', component: UserComponent },
{ path: 'about', component: UserComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: [
    UserComponent
  ]
})
export class AppRoutingModule { }


