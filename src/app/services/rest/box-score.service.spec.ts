import { TestBed } from '@angular/core/testing';

import { BoxScoreService } from './box-score.service';

describe('BoxScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoxScoreService = TestBed.get(BoxScoreService);
    expect(service).toBeTruthy();
  });
});
