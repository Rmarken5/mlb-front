import { TestBed } from '@angular/core/testing';

import { ApolloGraphqlService } from './apollo-graphql.service';

describe('ApolloGraphqlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApolloGraphqlService = TestBed.get(ApolloGraphqlService);
    expect(service).toBeTruthy();
  });
});
