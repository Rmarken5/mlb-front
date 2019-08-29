import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbreviatedTeamScoreComponent } from './abbreviated-team-score.component';

describe('AbbreviatedTeamScoreComponent', () => {
  let component: AbbreviatedTeamScoreComponent;
  let fixture: ComponentFixture<AbbreviatedTeamScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbreviatedTeamScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbreviatedTeamScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
