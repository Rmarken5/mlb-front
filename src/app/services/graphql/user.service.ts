import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { ApolloGraphqlService } from './apollo-graphql.service';
import { User } from 'src/app/models/graphql/schema';
import { Observable } from 'rxjs';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  queryResults: Observable<User[]>;

  constructor(private apolloSvc: ApolloGraphqlService<User>) { }

  public getAllUsers() {
    return this.apolloSvc.query({
      query: gql`
      query allCourses {
        allUsers {
          id
          firstName
          lastName
          userName
        }
      }
    `
    }).pipe(map(result => result.data.allUsers));
  }

  public login(username: string, password: string) {

    return this.apolloSvc.query({
      query: gql`
      query allCourses {
        loginUser($username:string, $password: string) {
          id
          firstName
          lastName
          userName
        }
      }
    `,
    variables: {["username"]: username }
    }).pipe(map(result => result.data.allUsers));

  }

}
