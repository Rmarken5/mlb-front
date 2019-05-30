import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/graphql/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private _userSvc: UserService) { }

  ngOnInit() {
    this._userSvc.getAllUsers();
  }

}
