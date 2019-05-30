import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private _httpClient: HttpClient) { }

  public getAllUsers(){
    this._httpClient.post(`http://localhost:4000`,`{ "query": "{ ledgers{id} }" }` ).subscribe(res => {
      console.log('Res', res );
    });
  }
}
