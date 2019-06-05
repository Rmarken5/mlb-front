import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { User, Query } from 'src/app/models/graphql/schema';
import { Observable } from 'apollo-link';
import { WatchQueryOptions } from 'apollo-client/core/watchQueryOptions';
import { map } from 'rxjs/operators';
import { ApolloQueryResult } from 'apollo-client';

@Injectable({
  providedIn: 'root'
})
export class ApolloGraphqlService<T> {
  queryResults: Observable<T[]>;

  constructor(private apollo: Apollo) {

  }

  public query(query: WatchQueryOptions){
    return this.apollo.watchQuery<Query>(query).valueChanges;
  }

}
