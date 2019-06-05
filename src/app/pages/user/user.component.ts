import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/graphql/user.service';
import { User } from 'src/app/models/graphql/schema';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public userList: User[];

  constructor(private _userSvc: UserService) { }

  ngOnInit() {
    this._userSvc.getAllUsers().subscribe(res => {
      this.userList = res;
    });
  }

}
